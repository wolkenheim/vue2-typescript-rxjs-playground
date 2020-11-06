import { UserEntity } from './domain/user/user.entity';
import { Repository } from './repository/repository';
import { repositoryFactory } from './repository/repository-factory';

// I got this use case a couple of times
// user is not logging in via app but we get a user object from third party auth provider like keycloak
export const initUser = () => {
    const userRepo: Repository<UserEntity> = repositoryFactory.getRepository('user');

    // use setter to publish user on ReplaySubject
    const firstUser = { id: 3, name: "Martin", email: "test@test.com" };
    userRepo.state = firstUser;
}
