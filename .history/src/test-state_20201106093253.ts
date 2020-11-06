import { ReplaySubject } from "rxjs";

const testState: ReplaySubject<number> = new ReplaySubject(1)

export { testState }