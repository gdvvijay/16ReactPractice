import CountriesData from '../countriesData'
import CountryCard from './CountryCard'

export default function CountriesList({query}){
    return(
        <>
            <div className="countries-container">
                 {CountriesData.filter((country)=>country.name.common.toLowerCase().includes(query)).map((country)=>{
                    return(
                        <CountryCard key={country.name.common} name={country.name.common} flag={country.flags.svg} population={country.population} region={country.region} capital={country.capital?.[0]}/>
                    )
                 })}               
            </div>
        </>
    )
}