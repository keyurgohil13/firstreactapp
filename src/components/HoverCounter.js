import React from "react";
import UpdateCom from './HOC';

class HoverCounter extends React.Component{


    render(){
        const {count, incrementd} = this.props;
        return (
            <>
                <h1 onMouseEnter={incrementd}>
                    Hover {count} Time
                </h1>
            </>
        )
    }
}

export default UpdateCom(HoverCounter);