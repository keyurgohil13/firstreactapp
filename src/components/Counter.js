import React from "react";
import UpdateCom from './HOC';

class Counter extends React.Component{

    
    render(){
        console.log(this.props);
        const {count, incrementd} = this.props;

        // console.log(this.props.increment);

        return (<>
            <h1>
                Class Base Component...
            </h1>
           
            <p>
                {count}
            </p>

            
            <button onClick={incrementd}>
                Click
            </button>
        </>
        )
    }
}

export default UpdateCom(Counter) ;