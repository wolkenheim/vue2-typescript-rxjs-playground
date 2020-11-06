
import { BriefingEntity } from "../briefing/briefing.entity";



export class BriefingsServiceReactive {


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