import _ from "lodash";

type ActionCreator<Type, Data> = (...args: any[]) => { type: Type } & Data;

interface TestCase<O> {
  [name: string]: { args: any[]; output: O };
}

export function describeAction<Type, Rest>(
  desc: string,
  action: ActionCreator<Type, Rest>,
  type: string,
  cases: TestCase<Rest> = {}
): void {
  describe(desc, () => {
    it(`uses type "${type}"`, () => {
      expect(action({}).type).toBe(type);
    });

    _.forEach(cases, (testCase, name) => {
      it(name, () => {
        expect(action(...testCase.args)).toMatchObject(testCase.output);
      });
    });
  });
}
