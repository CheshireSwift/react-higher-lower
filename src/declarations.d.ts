declare type Action<Creator extends (...args: any[]) => any> = ReturnType<
  Creator
>;
