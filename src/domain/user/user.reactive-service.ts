import { ReactiveService } from '@/repository/reactive-service';
import { UserEntity } from "./user.entity";

const userReactiveService = new ReactiveService<UserEntity>();

export { userReactiveService, UserEntity }