import { Observable, ReplaySubject } from 'rxjs';

export class ReactiveStore<T> {
    private _stateObservable$: Observable<T>;
    private _stateSubject$: ReplaySubject<T>;

    // this sends one aka the latest payload to late subscribers
    // needs no initialState in contrast to Behaviour Subject
    constructor() {
        this._stateSubject$ = new ReplaySubject(1);
        this._stateObservable$ = this._stateSubject$.asObservable();
    }

    public get state$(): Observable<T> {
        return this._stateObservable$;
    }

    public setState(nextState: T): void {
        this._stateSubject$.next(nextState);
    }
}