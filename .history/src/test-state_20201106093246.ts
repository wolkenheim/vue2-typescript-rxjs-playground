import { ReplaySubject } from "rxjs";

const testState: ReplaySubject<number> = new ReplaySubject(5)

export { testState }