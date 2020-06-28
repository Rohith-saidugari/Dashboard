import React from 'react'
import './TableHeadder.css'
const tableHeadder = (props) =>{
    return(
        <div className="table-title">
            <div className="row">
                <div className="col-sm-5">
                    <h2>{props.title} Management</h2>
                </div>
                <div className="col-sm-7">
                    <a href="/" className="btn btn-secondary"><i className="material-icons">&#xE147;</i>
                        <span>Add New {props.title}</span></a>
                    <a href="/" className="btn btn-secondary"><i className="material-icons">&#xE24D;</i>
                        <span>Export to Excel</span></a>
                </div>
            </div>
        </div>
    );
}

export default  tableHeadder;