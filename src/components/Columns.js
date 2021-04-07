import { ColumnFilter } from "./ColumnFilter";

export const COLUMNS = [
  {
    Header: "Customer Name",
    accessor: "custName",
    Filter: ColumnFilter,
    disableFilters: true,
    disableSorting: true,
  },
  {
    Header: "Customer Account Number",
    accessor: "custAccNo",
    Filter: ColumnFilter,
    disableSorting: true,
  },
  {
    Header: "Account Type",
    accessor: "accType",
    Filter: ColumnFilter,
    disableFilters: true,
    disableSorting: true,
  },
  {
    Header: "Customer ID",
    accessor: "custID",
    Filter: ColumnFilter,
    disableSorting: true,
  },
  {
    Header: "Transaction Date",
    accessor: "transDate",
    Filter: ColumnFilter,
    disableFilters: true,
    disableSorting: true,
  },
  {
    Header: "Transaction Reason",
    accessor: "transReason",
    Filter: ColumnFilter,
    disableFilters: true,
    disableSorting: true,
  },

  {
    Header: "Transaction Reference Number",
    accessor: "transRefNo",
    Filter: ColumnFilter,
    disableFilters: true,
    disableSorting: true,
  },
  {
    Header: "Credit",
    accessor: "transType",
    Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: "Debit",
    accessor: "transactions",
    Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: "Balance",
    accessor: "balance",
    Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: "Comments",
    accessor: "comments",
    Filter: ColumnFilter,
    disableFilters: true,
    disableSorting: true,
  },
];
