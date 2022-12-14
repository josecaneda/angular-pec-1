import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/Services/category.service';
import { LocalStorageService } from 'src/app/Services/local-storage.service';
import { PostService } from 'src/app/Services/post.service';
import { SharedService } from 'src/app/Services/shared.service';

import { PostDTO } from 'src/app/Models/post.dto';
import { FormControl, FormGroup, Validators, } from '@angular/forms';
import { CategoryDTO } from 'src/app/Models/category.dto';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent implements OnInit {
  post: PostDTO;
  title: FormControl;
  description: FormControl;
  publication_date: FormControl;
  categories: FormControl;

  postForm: FormGroup;
  isValidForm: boolean | null;

  allCategories?: CategoryDTO[];

  private isUpdateMode: boolean;
  private validRequest: boolean;
  private postId: string | null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService,
    private formBuilder: FormBuilder,
    private router: Router,
    private sharedService: SharedService,
    private localStorageService: LocalStorageService,
    private categoryService: CategoryService
  ) {
    this.isValidForm = null;
    this.postId = this.activatedRoute.snapshot.paramMap.get('id');
    this.post = new PostDTO('', '', 0, 0, new Date());
    
    this.isUpdateMode = false;
    this.validRequest = false;

    this.title = new FormControl(this.post.title, [
      Validators.required,
      Validators.maxLength(55),
    ]);

    this.description = new FormControl(this.post.description, [
      Validators.required,
      Validators.maxLength(255),
    ]);
    
    this.publication_date = new FormControl(this.post.publication_date, Validators.required);
    this.publication_date.setValue(formatDate(new Date(), 'yyyy-MM-dd', 'en'));


    this.categories = new FormControl();

    this.postForm = this.formBuilder.group({
      title: this.title,
      description: this.description,
      categories: this.categories, 
      publication_date: this.publication_date,
    });

    this.loadCategories();

  }
  // TODO 13
  async ngOnInit(): Promise<void> {
    let errorResponse: any;

    //update
    if (this.postId) {
      this.isUpdateMode = true;
      try {
        this.post = await this.postService.getPostById(this.postId);

        this.title.setValue(this.post.title);
        this.description.setValue(this.post.description);
        this.publication_date.setValue(formatDate(this.post.publication_date, 'yyyy-MM-dd', 'en'));
        //this.categories.setValue(this.post.categories);    

        this.postForm = this.formBuilder.group({
          title: this.title,
          description: this.description,
          categories: this.categories, 
          publication_date: this.publication_date,
        });
      } catch (error: any) {
        errorResponse = error.error;
        this.sharedService.errorLog(errorResponse);
      }
    }   
  }

  private async editPost(): Promise<boolean> {
    let errorResponse: any;
    let responseOK: boolean = false;
    if (this.postId) {
      try {
        await this.postService.updatePost(this.postId, this.post);
        responseOK = true; 
      } catch (error: any) {
        errorResponse = error.error;
        this.sharedService.errorLog(errorResponse);
      }
      await this.sharedService.managementToast(
        'postFeedback',
        responseOK,
        errorResponse
      );

      if (responseOK) {
        this.router.navigateByUrl('posts');
      } 
    }
    return responseOK;
  }


  private async createPost(): Promise<boolean> {
    let errorResponse: any;
    let responseOK: boolean = false;
    const userId = this.localStorageService.get('user_id');
    
    if (userId) {
      try {
        await this.postService.createPost(this.post);
        responseOK = true;
      } catch (error: any) {
        errorResponse = error.error;
        this.sharedService.errorLog(errorResponse);
      }
    }
    await this.sharedService.managementToast(
      'postFeedback',
      responseOK,
      errorResponse
    );

    if (responseOK) {
      this.router.navigateByUrl('posts');
    }
    return responseOK;
  }


  async savePost() {
    this.isValidForm = false;

    if (this.postForm.invalid) return;

    this.isValidForm = true;
    this.post = this.postForm.value;


    if (this.isUpdateMode) this.validRequest = await this.editPost();
    else this.validRequest = await this.createPost();
  }


  private async loadCategories(): Promise<void> {
    let errorResponse: any;
    const userId = this.localStorageService.get('user_id');
    if (userId) {
      try {
        this.allCategories = await this.categoryService.getCategoriesByUserId(userId);
      } catch (error: any) {
        errorResponse = error.error;
        this.sharedService.errorLog(errorResponse);
      }
    }
  }

  checkSelectedCategories(category: CategoryDTO): boolean {
    if (this.post.categories) {
      return this.post.categories.some( c => category.categoryId === c.categoryId);
    } else {
      return false;
    }
  }
}
