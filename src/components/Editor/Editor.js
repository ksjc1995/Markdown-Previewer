import React from 'react';
import Title from '../../components/Title/Title';
import Aux from '../../hoc/Aux';
const editor = (props) => {

    const style = {
        width:'49%',
        height:'750px',
        display:'inline-block',
        marginTop:'16px',
        float:'left',
        boxShadow:'0px 3px 5px #ccc',
        padding:'10px'
    }

    return (
        <Aux>
            <Title title='Editor'/>
            <textarea style={style} onChange={props.changed} value={props.data}>
            </textarea>
        </Aux>
    )
}

export default editor;