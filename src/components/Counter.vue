<template>
  <div>
    <p>Counter: {{ counter }}</p>
    <button @click="incrementCounter(5)">Increment by 5</button>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import ExampleModule from "@/store/modules/exampleModule";

const exampleModuleState = getModule(ExampleModule);

export default class Counter extends Vue {
  public get counter(): number {
    return exampleModuleState.counter;
  }

  public async incrementCounter(delta: number) {
    await exampleModuleState.incrementAsync(delta);
  }
}

</script>