import { BriefingEntity } from './briefing.entity';
import axios from 'axios';

export class BriefingsRepository {

    getBriefings() {
        return axios.get<BriefingEntity[]>("http://localhost:3022/briefings");
    }

    getBriefingById(id: number) {
        return axios.get<BriefingEntity>("http://localhost:3022/briefings/" + id);
    }
}