import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { BriefingEntity } from "../briefing/briefing.entity";
import { BriefingsRepository } from './briefings-repository';
import { List } from 'immutable';

export class BriefingsServiceReactive {


    //private _todos: BehaviorSubject<List<Todo>> = new BehaviorSubject(List([]));
    state$: Observable<BriefingEntity[]>;
    private _state$: BehaviorSubject<BriefingEntity[]>;


    constructor(private readonly briefingsRepository: BriefingsRepository) {
        this._state$ = new BehaviorSubject([{} as BriefingEntity])
        this.state$ = this._state$.asObservable();
    }

    /*
        get state(): BriefingEntity[] {
            return this._state$
        }
        */
    setState(nextState: BriefingEntity[]): void {
        this._state$.next(nextState);
    }


    async getBriefings(): Promise<void> {
        try {
            const result = await this.briefingsRepository.getBriefings();

            if (result.data.length > 0) {
                this.setState(result.data);

            }
        } catch (error) {
            console.log(error);
        }

    }


    async getBriefingById(id: number): Promise<BriefingEntity> {
        const result = await this.briefingsRepository.getBriefingById(id);
        return result.data;
    }

    /*
    getBriefingList(): BriefingEntity[] {
        return this.briefingList;
    }
    */
}