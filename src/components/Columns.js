import { ColumnFilter } from "./ColumnFilter";

export const COLUMNS = [
  {
    Header: "Customer Name",
    accessor: "custName",
    Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: "Customer Account Number",
    accessor: "custAccNo",
    Filter: ColumnFilter,
  },
  {
    Header: "Account Type",
    accessor: "accType",
    Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: "Customer ID",
    accessor: "custID",
    Filter: ColumnFilter,
  },
  {
    Header: "Transaction Date",
    accessor: "transDate",
    Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: "Transaction Reason",
    accessor: "transReason",
    Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: "Transaction Type",
    accessor: "transType",
    Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: "Transactions",
    accessor: "transactions",
    Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: "Transaction Reference Number",
    accessor: "transRefNo",
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
  },
];
