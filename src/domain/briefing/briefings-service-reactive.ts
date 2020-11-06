
import { ReactiveService } from '@/repository/reactive-service';
import { BriefingEntity } from "../briefing/briefing.entity";
import { BriefingsRepository } from './briefings-repository';
const briefingsRepository = new BriefingsRepository();

class BriefingsServiceReactive extends ReactiveService<BriefingEntity[]>{

    async fetchBriefings(): Promise<void> {
        try {
            const result = await briefingsRepository.getBriefings();

            if (result.data.length > 0) {
                this.state = result.data;

            }
        } catch (error) {
            console.log(error);
        }
    }
}

const briefingsServiceReactive = new BriefingsServiceReactive();

export { briefingsServiceReactive, BriefingsServiceReactive }