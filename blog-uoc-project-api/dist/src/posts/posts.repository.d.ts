import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { PostDto } from './post.dto';
import { PostEntity } from './post.entity';
import { PostMapper } from './post.mapper';
export declare class PostsRepository {
    private postsRepository;
    private mapper;
    constructor(postsRepository: Repository<PostEntity>, mapper: PostMapper);
    getAllPosts(): Promise<PostEntity[]>;
    getPostById(id: string): Promise<PostEntity>;
    newPost(postDto: PostDto): Promise<PostEntity>;
    updatePost(id: string, postDto: PostDto): Promise<PostEntity>;
    likePost(id: string): Promise<UpdateResult>;
    dislikePost(id: string): Promise<UpdateResult>;
    deletePost(id: string): Promise<DeleteResult>;
}
