import { PostDto } from './post.dto';
import { PostEntity } from './post.entity';
export declare class PostMapper {
    dtoToEntity(postDto: PostDto): Promise<PostEntity>;
    entityToDto(postEntity: PostEntity): PostDto;
}
