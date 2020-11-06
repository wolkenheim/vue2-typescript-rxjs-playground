import { UserEntity } from './domain/user/user.entity';
import { ReactiveService } from './repository/reactive-service';
import { reactiveServiceFactory } from './repository/reactive-service-factory';

// I got this use case a couple of times
// user is not logging in via app but we get a user object from third party auth provider like keycloak
export const initUser = () => {
    const userService: ReactiveService<UserEntity> = reactiveServiceFactory.get('user');

    // use setter to publish user on ReplaySubject
    const firstUser = { id: 3, name: "Martin", email: "test@test.com" };
    userService.state = firstUser;
}
