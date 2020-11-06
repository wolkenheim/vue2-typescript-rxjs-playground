import { BriefingEntity } from "../briefing/briefing.entity";
import { BriefingsRepository } from './briefings-repository';

export class BriefingsService {

    constructor(private readonly briefingsRepository: BriefingsRepository) { }

    private briefingList: BriefingEntity[] = [];

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

    getBriefingList(): BriefingEntity[] {
        return this.briefingList;
    }
}