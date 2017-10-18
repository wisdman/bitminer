
export interface Context {
  [key: string]: Module
}

export abstract class Module {
  constructor(readonly context: Context){}
  init(){}
}
