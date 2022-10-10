import { DeleteResult, UpdateResult } from 'typeorm';
import { PostDto } from './post.dto';
import { PostMapper } from './post.mapper';
import { PostsRepository } from './posts.repository';
export declare class PostsService {
    private postsRepository;
    private mapper;
    constructor(postsRepository: PostsRepository, mapper: PostMapper);
    getAllPosts(): Promise<PostDto[]>;
    getPostById(id: string): Promise<PostDto>;
    newPost(postDTO: PostDto): Promise<PostDto>;
    updatePost(id: string, postDTO: PostDto): Promise<PostDto>;
    likePost(id: string): Promise<UpdateResult>;
    dislikePost(id: string): Promise<UpdateResult>;
    deletePost(id: string): Promise<DeleteResult>;
}
