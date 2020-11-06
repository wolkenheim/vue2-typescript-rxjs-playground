import { BriefingsService } from "./briefings-service";
import { BriefingsRepository } from "./briefings-repository";

const briefingsRepository = new BriefingsRepository();
const briefingsService = new BriefingsService(briefingsRepository);

export { briefingsService }