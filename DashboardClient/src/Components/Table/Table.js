import React , { Component }from 'react'
import './Table.css'
import TableHeadder from './TableHeadder/TableHeadder'

import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
//import Pagination from './Pagination/Pagination'
class Table extends  Component{

    //Data Handler to Export data to Excel Format
    dataExportHandler = () => {
        const ws = XLSX.utils.json_to_sheet(this.props.recruiters);
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'});
        FileSaver.saveAs(data, 'Recruiters' + '.xlsx');
    }

    getKeys = () =>{
        return Object.keys(this.props.recruiters[0])
    }

    getHeadder = () =>{
        let keys = this.getKeys();
        return keys.map(
            (key,index)=>{ return <th key={key}>{key.toUpperCase()}</th> }
        );
    }

    getRowsData = function(){
        var items = this.props.recruiters;
        var keys = this.getKeys();
        return items.map((row, index)=>{
            return <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
        })
    };





    render() {

        return (
            <div className="container-xl">
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <TableHeadder title="Recruiter" dataExportHandler={this.dataExportHandler}/>
                        <table className="table table-striped table-hover">
                            <thead>
                            <tr>{this.getHeadder()}</tr>
                            </thead>
                            <tbody>
                             {this.getRowsData()}
                            </tbody>
                        </table>
                        {/*
                        <Pagination/>
                        */}
                    </div>
                </div>
            </div>
    );
    }
}


const RenderRow = (props) =>{
    return props.keys.map((key, index)=>{
        return <td key={props.data[key]}>{props.data[key]}</td>
    })
}


export default Table;