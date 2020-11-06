import { ReactiveStore } from './services/reactive-store';

export class Repository<T> {
    private _store: ReactiveStore<T>;

    constructor() {
        this._store = new ReactiveStore<T>();
    }

    get state$() {
        return this._store.state$;
    }

    set state(state: T) {
        this._store.setState(state);
    }
}