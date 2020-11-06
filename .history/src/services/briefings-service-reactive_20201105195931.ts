import { Observable, Subject } from 'rxjs';
import { BriefingEntity } from "../briefing/briefing.entity";
import { BriefingsRepository } from './briefings-repository';

export class BriefingsServiceReactive {

    state$: Observable<BriefingEntity[]>;
    private _state$: Subject<BriefingEntity[]>;


    constructor(private readonly briefingsRepository: BriefingsRepository) {
        this._state$ = new Subject()
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