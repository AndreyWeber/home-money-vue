<template>
  <b-container fluid class="sm-2">
    <ag-grid-vue
      ref="agGrid"
      class="ag-theme-alpine surface-grid"
      :headerHeight="25"
      :rowHeight="25"
      :defaultColDef="defaultColDef"
      :columnDefs="columnDefs"
      :rowData="rowData"
      :gridOptions="gridOptions"
      @gridReady="onGridReady($event)"
      @gridSizeChanged="onGridSizeChanged()"
    ></ag-grid-vue>
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { GridOptions, GridReadyEvent, GridApi, RowSelectedEvent } from "ag-grid-community";
import { AgGridVue } from "ag-grid-vue";

@Component({
  components: {
    AgGridVue,
  },
})
export default class TransactionsList extends Vue {

  private gridApi!: GridApi;

  public gridOptions: GridOptions = {
    context: {
      componentParent: this,
    },
    onRowSelected: this.onRowSelected,
    rowSelection: "single",
  };

  public get defaultColDef(): object {
    return {
      floatingFilter: true,
      filter: true,
      suppressMenu: true,
      resizable: true,
      editable: false,
      sortable: true,
    };
  }

  public columnDefs = [
    {
      headerName: "Symbol",
      field: "symbol",
      sortable: true,
    },
    {
      headerName: "Is Planned",
      field: "isPlanned",
      sortable: true,
    },
    {
      headerName: "Value",
      field: "value",
      sortable: true,
    },
    {
      headerName: "Comment",
      field: "comment",
      sortable: true,
    },
    {
      headerName: "Transaction Date",
      field: "transactionDate",
      sortable: true,
    },
  ];

  public rowData = [
    {
      symbol: "GFTS: Gifts",
      isPlanned: false,
      value: 2.57,
      comment: "Gift to Umka and Misha",
      transactionDate: "12-09-2024"
    },
    {
      symbol: "SVNG: Invetments",
      isPlanned: true,
      value: 100.20,
      comment: "Invetments",
      transactionDate: "12-09-2024"
    },
  ];

  private sizeColumnsToFit(): void {
    this.gridApi?.sizeColumnsToFit();
  }

  public onGridReady(event: GridReadyEvent): void {
    this.gridApi = event.api;
    try {
      this.gridApi?.showLoadingOverlay();
      this.gridApi?.setDomLayout("autoHeight");
    } finally {
      this.gridApi?.hideOverlay();
    }
  }

  public onGridSizeChanged(): void {
    this.sizeColumnsToFit();
  }

  public onRowSelected(event: RowSelectedEvent): void {
    if (event.node.isSelected()) {
      console.log("onSelectionChanged");
      const selectedRows = event.api.getSelectedRows();
      console.log("Selected Rows:", selectedRows);
    }
  }
}
</script>

<style lang="scss" scoped>
.surface-grid {
  width: 100%;
  height: 100%;
}
</style>