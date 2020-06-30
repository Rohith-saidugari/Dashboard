import React from 'react'

const table  = (props) =>{
    return (
        <div className="container">
            <div className="card border-0 shadow my-5">
                <div className="card-body p-5">
                    {props.title}
                </div>
            </div>
        </div>
    );
}
export default table;