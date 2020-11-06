import { BriefingsService } from "./briefings-service";
import { BriefingsRepository } from "./briefings-repository";
import { BriefingsServiceReactive } from './briefings-service-reactive';

const briefingsRepository = new BriefingsRepository();
const briefingsService = new BriefingsService(briefingsRepository);

const initialState = await briefingsRepository.getBriefings();
const briefingsServiceReactive = new BriefingsServiceReactive(briefingsRepository);

export { briefingsService, briefingsServiceReactive }