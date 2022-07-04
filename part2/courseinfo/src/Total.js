const Total = (props) => {

    /*
    var total = 0;
    for(let i = 0; i<props.parts.length; i++){
        total += props.parts[i].exercises;
    }
    */

    const initialValue = 0;
    const total = props.parts.reduce(
        (prev, curr) => prev + curr.exercises, 
        initialValue 
    );

    return(
        <div>
            <h4>Number of exercises {total}</h4>
        </div>
    )
}

export default Total;