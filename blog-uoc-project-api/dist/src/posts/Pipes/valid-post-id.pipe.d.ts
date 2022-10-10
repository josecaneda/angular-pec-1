import { PipeTransform } from '@nestjs/common';
import { PostsService } from '../posts.service';
export declare class ValidPostIdPipe implements PipeTransform {
    private postsService;
    constructor(postsService: PostsService);
    transform(value: any): Promise<any>;
}
