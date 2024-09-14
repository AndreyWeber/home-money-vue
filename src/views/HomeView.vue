<template>
  <div>
    <TransactionEditor />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TransactionEditor from '@/components/TransactionEditor.vue';

@Component({
  components: {
    TransactionEditor,
  },
})
export default class HomeView extends Vue {
  
}
</script>
