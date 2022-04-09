import React from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"
import {useRouter} from "next/dist/client/router"
import {format} from "date-fns"
import InfoCard from "../components/InfoCard"
import Map from "../components/Map"

const Search = ({searchResults}) => {
    const router = useRouter()
    const {location , endDate , noOfGuest , startDate} = router.query;
    const formattedStartDate = format(new Date(startDate),"dd.MM.yyyy");
    const formattedEndDate = format(new Date(endDate),"dd.MM.yyyy");
    const range = `${formattedStartDate} - ${formattedEndDate}`
  return (
    <div>
        <Header placeholder={`${location} | ${range} | ${noOfGuest} Guests`}/>
        <main className='flex'>
            <section className='flex-grow pt-14 px-6'>
                <p className="text-xs">300+ Stays {range} for {noOfGuest} guests</p>
                <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>
                <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                    <button className="btn">Cancelation Flexibility</button>
                    <button className="btn">Type Of Place</button>
                    <button className="btn">Price</button>
                    <button className="btn">Rooms and Beds</button>
                    <button className="btn">More Filters</button>
                </div>
                <div className="flex flex-col">
                    {searchResults.map((result)=>(
                        <InfoCard key={result.img} result ={result}/>
                    ))}
                </div>
            </section>
            <section className='hidden xl:inline-flex xl:min-w-[600px]'>
              <Map searchResults={searchResults}/>
            </section>
        </main>

        <Footer/>
    </div>
  )
}
export default Search

export async function getServerSideProps(context){
  const searchResults = await fetch("https://links.papareact.com/isz").then(res => res.json())
  return {
    props:{
      searchResults
    }
  }
}