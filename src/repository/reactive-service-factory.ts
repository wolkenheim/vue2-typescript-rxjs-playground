import { ReactiveService } from './reactive-service';
import { userRepository } from '../domain/user/user.repository';

type ServicesType = 'user' | 'briefings'

class ReactiveServiceFactory {
    private _services = {
        'user': userRepository,
        'briefings': userRepository
    }

    getRepository(name: ServicesType): ReactiveService<any> {
        return this._services[name];
    }
}

const reactiveServiceFactory = new ReactiveServiceFactory();

export { reactiveServiceFactory } 