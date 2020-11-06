import { ReactiveService } from './reactive-service';
import { userReactiveService } from '../domain/user/user.reactive-service';
import { briefingsServiceReactive, BriefingsServiceReactive } from '@/domain/briefing/briefings-service-reactive';

type ServicesType = 'user' | 'briefings'

class ReactiveServiceFactory {
    private _services = {
        'user': userReactiveService,
        'briefings': briefingsServiceReactive
    }

    get(name: ServicesType): ReactiveService<any> {
        return this._services[name];
    }
}

const reactiveServiceFactory = new ReactiveServiceFactory();

export { reactiveServiceFactory, BriefingsServiceReactive } 