import React  from "react";

const navigationItem = (props)=>{
    let cssClass = ['nav-items']
    if(props.active)
        cssClass.push('active')
        return (
            <li className={cssClass.join(' ')}>
                <a className="nav-link"  onClick={props.clicked}>{props.title}
                    {props.active?<span className="sr-only">(current)</span>:null}
                </a>
            </li>
        );
    }

export default navigationItem;