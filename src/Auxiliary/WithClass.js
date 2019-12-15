import React from 'react';


const withclass = (props) =>(
    <div className={props.classes}>{props.children}</div>
);

export default withclass;