import { Observable, Subject, BehaviorSubject, ReplaySubject } from 'rxjs';
import { BriefingEntity } from "../briefing/briefing.entity";
import { BriefingsRepository } from './briefings-repository';
import { ReactiveStore } from './reactive-store';


export class BriefingsServiceReactive {

    private _briefingsStore: ReactiveStore<BriefingEntity[]>;

    get state$() {
        return this._briefingsStore.state$;
    }

    constructor(private readonly briefingsRepository: BriefingsRepository) {
        this._briefingsStore = new ReactiveStore<BriefingEntity[]>();
    }


    async getBriefings(): Promise<void> {
        try {
            const result = await this.briefingsRepository.getBriefings();

            if (result.data.length > 0) {
                this._briefingsStore.setState(result.data);

            }
        } catch (error) {
            console.log(error);
        }

    }


    async getBriefingById(id: number): Promise<BriefingEntity> {
        const result = await this.briefingsRepository.getBriefingById(id);
        return result.data;
    }
}