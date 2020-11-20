import './App.css';
import React, { Component } from "react";
import Jumbo from "./components/Jumbotron/index";
import Table from "./components/Table/table";
// import Wrapper from "./components/Wrapper/wrapper";
import API from "./utils/API";
import Search from "./components/Search/Search";

class App extends Component {
  state = {
    employeeData: [],
    filteredEmployee: [],
    search: "",
    order: "ascend"
  };

  componentDidMount() {
    API.getUsers()
      .then(res => this.setState({ employeeData: res.data.results, filteredEmployee: res.data.results }))
      .catch(err => console.log(err));
  }

  sortByName = () => {
    const filtered = this.state.filteredEmployee;
    if (this.state.order === "ascend") {
      const sort = filtered.sort((a, b) => (a.name.last > b.name.last) ? 1 : -1)
      this.setState({
        filteredEmployee: sort,
        order: "descend"
      })
    } else {
      const sorts = filtered.sort((a, b) => (a.name.last > b.name.last) ? -1 : 1)
      this.setState({
        filteredEmployee: sorts,
        order: "ascend"
      })
    }
  }

  handleInputChange = event => {
    console.log(event.target.value)
    const employee = this.state.employeeData;
    const input = event.target.value;
    this.setState({
      filteredEmployee: employee.filter(employee => {
        // employee.name.first.includes(input.toLowerCase()) > -1)
        let values = Object.values(employee).join("").toLocaleLowerCase();
        return values.indexOf(input.toLowerCase()) !== -1;
      })
    })

  }

  render() {
    return (
      <div>
        <Jumbo />
        <Search
          employee={this.state.employeeData}
          handleInputChange={this.handleInputChange}
        />
        <Table
          results={this.state.filteredEmployee}
          sortByName={this.sortByName}
        />
      </div>
    );
  }
}

export default App;
