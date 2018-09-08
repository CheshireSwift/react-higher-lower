type ActionCreator = (...args: any[]) => any;

declare type Action<C extends ActionCreator> = ReturnType<C>;
declare type Reducer<S, C extends ActionCreator> = (
  state: S | undefined,
  action: Action<C> | { type: "X" }
) => S;
