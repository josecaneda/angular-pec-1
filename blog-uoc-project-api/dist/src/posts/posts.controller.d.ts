import { DeleteResult, UpdateResult } from 'typeorm';
import { PostDto } from './post.dto';
import { PostsService } from './posts.service';
export declare class PostsController {
    private postsService;
    constructor(postsService: PostsService);
    getAllPosts(): Promise<PostDto[]>;
    getPostById(id: string): Promise<PostDto>;
    newPost(post: PostDto): Promise<PostDto>;
    updatePost(id: string, post: PostDto): Promise<PostDto>;
    likePost(id: string): Promise<UpdateResult>;
    dislikePost(id: string): Promise<UpdateResult>;
    deletePost(id: string): Promise<DeleteResult>;
}
