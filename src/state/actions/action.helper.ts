import _ from "lodash";

type ActionCreator<Type, P, E, M> = (
  ...args: any[]
) => { type: Type } & FluxFields<P, E, M>;

interface TestCase<P, E, M> {
  [name: string]: { args: any[] } & FluxFields<P, E, M>;
}

export function describeAction<Type, P, E, M>(
  desc: string,
  action: ActionCreator<Type, P, E, M>,
  type: string,
  cases: TestCase<P, E, M> = {}
): void {
  describe(desc, () => {
    it(`uses type "${type}"`, () => {
      expect(action({}).type).toBe(type);
    });

    _.forEach(cases, (testCase, name) => {
      it(name, () => {
        expect(action(...testCase.args)).toMatchObject(
          _.omit(testCase, "args")
        );
      });
    });
  });
}
