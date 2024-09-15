<template>
  <!-- <b-container fluid>
    <b-row>
      <b-col>
        <TransactionEditor />
      </b-col>
      <b-col>
        <TransactionsList />
      </b-col>
    </b-row>
  </b-container> -->
  <div>
    <TransactionsList />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TransactionEditor from '@/components/TransactionEditor.vue';
import TransactionsList from '@/components/TransactionsList.vue';

@Component({
  components: {
    TransactionEditor,
    TransactionsList,
  },
})
export default class HomeView extends Vue {
  
}
</script>
