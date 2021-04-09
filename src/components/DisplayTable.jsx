import React, { Component } from "react";
import BasicTable from "./BasicTable";
import MOCK_DATA from "./mockData.json";
class DisplayTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      tableData: [],
      fromDate: "",
      toDate: "",
      searchBy: "custID",
      searchValue: "",
    };
    this.fromDateRef = React.createRef();
    this.toDateRef = React.createRef();
  }
  componentDidMount() {
    this.setState({ data: MOCK_DATA, tableData: MOCK_DATA });
  }
  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  filterData = (data, fromDate, toDate, searchBy, searchValue) => {
    let filteredData = searchValue
      ? data.filter(
          (item) =>
            item.transDate >= fromDate &&
            item.transDate <= toDate &&
            item[searchBy] === searchValue
        )
      : data.filter(
          (item) => item.transDate >= fromDate && item.transDate <= toDate
        );
    return filteredData;
  };
  clickHandler = () => {
    // alert(
    //   `search by option: ${this.state.searchBy} search Value: ${this.state.searchValue}`
    // );
    console.log("from date ki value:", this.state.fromDate);
    console.log("toDate ki value:", this.state.toDate);
    let filteredData = this.filterData(
      this.state.data,
      this.state.fromDate,
      this.state.toDate,
      this.state.searchBy,
      this.state.searchValue
    );
    this.setState({ tableData: filteredData });
  };
  render() {
    return (
      <div>
        <label htmlFor="fromDate">From Date</label>
        <input
          type="date"
          id="fromDate"
          name="fromDate"
          value={this.state.fromDate}
          onChange={this.onChangeHandler}
        />
        <label htmlFor="toDate">To Date</label>
        <input
          type="date"
          id="toDate"
          value={this.state.toDate}
          name="toDate"
          onChange={this.onChangeHandler}
        />
        <label>Search By</label>
        <select
          value={this.state.searchBy}
          name="searchBy"
          onChange={this.onChangeHandler}
        >
          <option value="custID">Customer ID</option>
          <option value="custAccNo">Customer Account No.</option>
        </select>
        <input
          type="text"
          value={this.state.searchValue}
          name="searchValue"
          onChange={this.onChangeHandler}
        />
        <button onClick={(event) => this.clickHandler(event)}>Search</button>
        <BasicTable data={this.state.tableData} />
      </div>
    );
  }
}

export default DisplayTable;
