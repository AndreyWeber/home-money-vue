import {
    Module,
    VuexModule,
    Mutation,
    Action,
} from "vuex-module-decorators";
import Store from "@/store";

@Module({ namespaced: true, store: Store, dynamic: true, name: "exampleModule" })
export default class ExampleModule extends VuexModule {
  // State
  public counter = 0;

  @Mutation
  public increment(delta: number): void  {
      this.counter += delta;
  }

  @Action({ commit: "increment" })
  public async incrementAsync(delta: number): Promise<number> {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return delta;
  }
}