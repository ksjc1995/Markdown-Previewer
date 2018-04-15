import React from 'react';

const title = ( props )=>{

    const style={
        textAlign:'center',
        width:'50%',
        height:'32px',
        display:'inline-block',
        paddingTop:'16px',
        fontSize:'20px',
        fontWeight:'bold'

    }

    return (
            <div style={style}>
                {props.title}
            </div>
    );
}

export default title;