import { ReplaySubject } from "rxjs";

const testState: ReplaySubject<number> = new ReplaySubject(2)

export { testState }