import { useEffect, useState } from "react";
import "./CountryDetail.css";
import { useParams } from "react-router-dom";

export default function CountryDetail() {
  const params = useParams();
  const countryName = params.country;
  const [countryData, setCountryData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  
  useEffect(()=>{
     fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
    .then((res) => res.json())
    .then(([data]) => {
      setCountryData({
        name: data.name.common,
        nativeName: Object.values(data.name.nativeName)[0].common,
        population: data.population,
        region: data.region,
        subregion: data.subregion,
        capital: data.capital,
        flag: data.flags.svg,
        tld: data.tld,
        languages: Object.values(data.languages).join(", "),
        currencies: Object.values(data.currencies)
          .map((currency) => currency.name)
          .join(", "),
      })
    }).catch((err)=>{
        setNotFound(true)
    })
  },[])

  if(notFound){
    return(
        <div>Country Not Found</div>
    )
  }
    return countryData ===null ?(
        'loading...'
    ) : (
        <main>
            <div className="country-details-container">
                <span className="back-button" onClick={()=>history.back()}>
                    <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
                </span>
                <div className="country-details">
                    <img src={countryData.flag} alt={`${countryData.name} flag`}/>
                    <div className="details-text-container">
                        <h1>{countryData.name}</h1>
                        <div className="details-text">
                            <p>
                                <b>Native Name: </b>
                                <span className="native-name">{countryData.nativeName}</span>
                            </p>
                            <p>
                                <b>Population: </b>
                                <span className="population">{countryData.population.toLocaleString('en-In')}</span>
                            </p>
                            <p>
                                <b>Region: </b>
                                <span className="region">{countryData.region}</span>
                            </p>
                            <p>
                                <b>Sub Region: </b>
                                <span className="sub-region">{countryData.subregion}</span>
                            </p>
                            <p>
                                <b>Capital: </b>
                                <span className="capital">{countryData.capital.join(', ')}</span>
                            </p>
                            <p>
                                <b>Top Level Domain: </b>
                                <span className="top-level-domain">{countryData.tld}</span>
                            </p>
                            <p>
                                <b>Currencies: </b>
                                <span className="currencies">{countryData.currencies}</span>
                            </p>
                            <p>
                                <b>Languages: </b>
                                <span className="languages">{countryData.languages}</span>
                            </p>
                        </div>
                        <div className="border-countries">
                            <b>Border Countries: </b>&nbsp;
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
