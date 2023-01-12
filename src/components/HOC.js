import React from "react";

function UpdateCom ( OrignalCom){

    class NewCom extends React.Component{

        constructor(){
            super();
    
            this.state={
                count : 0
            }

            
        }
    
         increment = () => {

             this.setState((prevState) =>{
                return ({ count : prevState.count + 1})
             })
         } 

        render (){

            return (
                <>
                    <OrignalCom count={this.state.count} incrementd={()=> {this.increment()}}/>
                </>
            )
        }
    }

    return  NewCom;

} 
export default UpdateCom;