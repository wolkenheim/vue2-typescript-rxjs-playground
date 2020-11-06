import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { BriefingEntity } from "../briefing/briefing.entity";
import { BriefingsRepository } from './briefings-repository';

export class BriefingsServiceReactive {


    private _briefings: BehaviorSubject<BriefingEntity[]> = new BehaviorSubject([]);

    //public readonly _briefings: Observable<List<BriefingEntity>> = this.briefingList.asObservable();

    constructor(private readonly briefingsRepository: BriefingsRepository) {
        //this.
    }

    asObservable(subject: Subject) {
        return new Observable(fn => subject.subscribe(fn));
    }


    get briefings() {
        return this.asObservable(this._briefings);
    }

    async getBriefings(): Promise<void> {
        try {
            const result = await this.briefingsRepository.getBriefings();

            if (result.data.length > 0) {
                this.briefingList = [];
                result.data.forEach((rawBriefingEntity: BriefingEntity): void => {
                    this.briefingList.push(rawBriefingEntity);
                })
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