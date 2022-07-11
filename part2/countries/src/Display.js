import Country from './Country.js'
import Weather from './Weather.js'

const Display = (props) => {

    if(props.show){

        if(props.countriesToShow.length === 1) {
            return (
                <div>
                    <Country country = {props.countriesToShow[0]}/>
                </div>
            )
        }
        else if(props.clickedCountry.isClicked){
            return (
                <Country country = {props.clickedCountry.country}/>
            )
        }
        else{
            return (
                <div>
                    {
                        props.countriesToShow.map(country =>    
                            <p key = {country.name.official}>
                                {country.name.common} 
                                <button onClick = {() => props.clickHandler(country)} >Show</button>
                            </p>
                        )
                    }
                </div>
            )
        }
    }
    return(
        <div>
            <p>Too many matches, specify another filter.</p>
        </div>
    )
}

export default Display