import React, { Component } from 'react';
import './App.css';
import Table from './Components/Table/Table'
import ApiService from "./ApiService/ApiService";
class App extends Component {

    state = {
        recruiters:null
    }


    componentDidMount() {
        ApiService.fetchRecruiters().then(
            response =>{
                this.setState({recruiters :response.data})
            }
        );
    }


    render() {
        let tableData = <h1>Loading Table Data</h1>
        if(this.state.recruiters)
            tableData = <Table recruiters = {this.state.recruiters}/>;
        return (
            <div>
                <div>Navbar</div>
                <div>
                    {tableData}
                </div>
                <div>Footer</div>
            </div>
        );
    }
}

export default App;
