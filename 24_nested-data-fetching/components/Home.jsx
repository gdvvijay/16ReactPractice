import { useState } from "react"
import CountriesList from "./CountriesList"
import SearchBar from "./SearchBar"
import SelectMenu from "./SelectMenu"

export default function Home(){
    const [query,setQuery]=useState('')
    return(
        <main>
            <div className="search-filter-container">
                <SearchBar setQuery={setQuery}/>
                <SelectMenu/>
            </div>
            <CountriesList query={query}/>
        </main>
    )
}