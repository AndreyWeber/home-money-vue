<template>
  <b-container fluid class="my-2">
    <b-form
      @submit.prevent="onSubmit"
      @reset.prevent="onReset"
    >
      <b-row>
        <b-col cols="12" sm="8" md="6" lg="4">
          <b-form-group
            id="input-group-symbol"
            label="Symbol:"
            label-for="input-symbol"
            label-cols-sm="4"
            label-size="sm"
            label-class="text-sm-right"
          >
            <b-form-select
              id="input-symbol"
              size="sm"
              v-model="transactionData.symbol"
              :options="symbols"
              required
            ></b-form-select>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="12" sm="8" md="6" lg="4">
          <b-form-group
            id="checkbox-group-planned-transaction"
            label="Planned transaction"
            label-for="checkbox-planned-transaction"
            label-cols-sm="4"
            label-size="sm"
            label-class="text-sm-right"
          >
            <b-form-checkbox
              id="checkbox-planned-transaction"
              v-model="transactionData.planned"
              name="checkbox-planned-transaction"
            ></b-form-checkbox>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="12" sm="8" md="6" lg="4">
          <b-form-group
            id="input-group-value"
            label="Value:"
            label-for="input-value"
            label-cols-sm="4"
            label-size="sm"
            label-class="text-sm-right"
          >
            <b-form-input
              id="input-value"
              size="sm"
              v-model="transactionData.value"
              :type="'number'"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="12" sm="8" md="6" lg="4">
          <b-form-group
            id="input-group-comment"
            label="Comment:"
            label-for="input-value"
            label-cols-sm="4"
            label-size="sm"
            label-class="text-sm-right"
          >
            <b-form-input
              id="input-comment"
              size="sm"
              v-model="transactionData.comment"
              :type="'text'"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="12" sm="8" md="6" lg="4">
          <b-form-group
            id="input-group-transaction-date"
            label="Transaction date:"
            label-for="input-transaction-date"
            label-cols-sm="4"
            label-size="sm"
            label-class="text-sm-right"
          >
            <b-form-input
              id="input-transaction-date"
              size="sm"
              v-model="transactionData.date"
              :type="'date'"
            >
            </b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col
          cols="12" sm="8" md="6" lg="4"
          class="text-sm-right"
        >
          <b-button
            type="reset"
            variant="danger"
            size="sm"
            class="mr-1"
          >
            Reset
          </b-button>
          <b-button
            type="submit"
            size="sm"
            variant="success"
          >
            Submit
          </b-button>
        </b-col>
      </b-row>

      <div>Planned transaction: {{transactionData.planned}}</div>
    </b-form>
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class TransactionEditor extends Vue {
  public transactionData = {
    symbol: "GFTS: Gifts",
    planned: false,
    comment: null,
    value: 0.0
  }

  public get symbols(): Array<string> {
    return [
      "WEB : Internet",
      "GFTS: Gifts",
      "PRVT : Private expenses",
    ];
  }

  public onSubmit(): void {
    console.log("Submit");
  }

  public onReset(): void {
    console.log("Reset");
  }

}
</script>