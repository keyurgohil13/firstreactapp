import React, {useState} from "react";

function CounterFun (){

    const [name, setName] = useState("Rahul");
    const [count, setCount]  = useState(5)
    const [stu, setStudent] = useState({name: "Yash", rollNo : 10})

    console.log(stu);

   let increment = () =>{

    console.log("cliick");

      setCount((prevState) =>{
        console.log("prev", prevState);
            return ( prevState + 1);
        })
    }

    let changeName = () =>{

        setName((prevState) => {
            return  prevState = "Raj";
        })
    }

    return (
        <>
            <h1>
               {name} Visited {count} time
            </h1>

            <button onClick={() => {increment()}}>
                Click 
            </button>

            <button onClick={() => {changeName()}}>
                Click 
            </button>

        </>
    )
}

export default CounterFun;