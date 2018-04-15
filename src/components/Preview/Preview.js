import React from 'react';
import marked from 'marked';
import Title from '../../components/Title/Title';
import Aux from '../../hoc/Aux';

const preview = (props) => {
    
    const style = {
        display:'inline-block',
        width:'48%',
        height:'750px',
        border:'1px solid #ccc',
        boxShadow:'0px 3px 5px #ccc',
        marginTop:'16px',
    }

    const createmarkUp =  () => {
      return  {__html: marked(props.data,{sanitize:true})}
    }

    return (
        <Aux>
            <Title title='Preview'/>
            <div style={style} dangerouslySetInnerHTML={createmarkUp()} >
                
            </div>
        </Aux>
    )
}

export default preview;