import React , { Component }from 'react'
import './Table.css'
import TableHeadder from './TableHeadder/TableHeadder'
class Table extends  Component{

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
    }


    render() {

        return (
            <div className="container-xl">
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <TableHeadder title="Recruiter"/>
                        <table className="table table-striped table-hover">
                            <thead>
                            <tr>{this.getHeadder()}</tr>
                            </thead>
                            <tbody>
                             {this.getRowsData()}
                            </tbody>
                        </table>
                        <div className="clearfix">
                            <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
                            <ul className="pagination">
                                <li className="page-item disabled"><a href="/">Previous</a></li>
                                <li className="page-item"><a href="/" className="page-link">1</a></li>
                                <li className="page-item"><a href="/" className="page-link">2</a></li>
                                <li className="page-item active"><a href="/" className="page-link">3</a></li>
                                <li className="page-item"><a href="/" className="page-link">4</a></li>
                                <li className="page-item"><a href="/" className="page-link">5</a></li>
                                <li className="page-item"><a href="/" className="page-link">Next</a></li>
                            </ul>
                        </div>
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