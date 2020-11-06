import { Observable, BehaviorSubject } from 'rxjs';

export class ReactiveStore<T> {
    state$: Observable<T>;
    private _state$: BehaviorSubject<T>;

    protected constructor(initialState: T) {
        this._state$ = new BehaviorSubject(initialState);
        this.state$ = this._state$.asObservable();
    }
    get state(): T {
        return this._state$.getValue();
    }
    setState(nextState: T): void {
        console.log(nextState);
        this._state$.next(nextState);
    }
}