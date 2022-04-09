import React , {useState}   from 'react'
import Image from "next/image"
import {SearchIcon , GlobeAltIcon , MenuIcon , UserCircleIcon , UserIcon , UsersIcon} from '@heroicons/react/solid'
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router';


const Header = ({placeholder}) => {
  const [searchInput  , setsearchInput] = useState("")
  console.log(new Date)
  const [startDate , setstartDate] = useState(new Date())
  const [endDate , setendDate] = useState(new Date())
  const [noOfGuest , setnoOfGuest] = useState(1)
  const router = useRouter()


  const handleSelect =(ranges)=> {
    setstartDate(ranges.selection.startDate)
    setendDate(ranges.selection.endDate)
  }
  const selectionRange = {
    startDate :startDate,
    endDate:endDate,
    key:"selection"
  }
  const handleSearch = () =>{
    router.push({
      pathname:"/search",
      query:{
        location:searchInput , 
        startDate:startDate.toISOString(),
        endDate:endDate.toISOString(),
        noOfGuest:noOfGuest
      }
    })
  }
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 shadow-md py-4 pl-4 md:px-10 bg-white">
        <div className="relative flex items-center h-10 cursor-pointer my-auto" onClick={()=>router.push("/")}>
            <Image src={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"}
            layout='fill'  objectFit='contain'
            alt={"aibnb image"}
            objectPosition="left"
            />
        </div>
        <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
          <input type="text"className="flex-grow  pl-5 bg-transparent outline-none text-gray-800
          placeholder-gray-500 placeholder:font-mono
          font-mono
          " value={searchInput} onChange={(e)=>setsearchInput(e.target.value)} placeholder={placeholder || "Start your Search"}/>
          <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 rounded-full p-1 text-white cursor-pointer md:mx-2
          "
          
          />
        </div>
        <div className="flex items-center space-x-4 justify-end text-gray-700">
          <p className="hidden md:inline">Become a host</p>
          <GlobeAltIcon className='h-6'/>
          <div className="flex space-x-1 border-2 border-gray-500 rounded-3xl px-2 py-1 ">
            <MenuIcon className="h-5"/>
            <UserCircleIcon className="h-5"/>
          </div>
        </div>

        {searchInput && 
          (
            <div className="flex flex-col col-span-3 mx-auto">
              <DateRangePicker ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors = {["#FD5b61"]}
              onChange={handleSelect}
              />
              <div className='flex items-center border-b mb-4'>
                <h2 className="text-2xl pl-2 flex-grow">Number of Guests</h2>
                <UsersIcon className="h-5"/>
                <input type="number" className="w-12 pl-2 text-lg outline-none text-red-400
                " 
                min = {1}
                value={noOfGuest} onChange={(e)=>setnoOfGuest(e.target.value)}/>
              </div>
              <div className='flex space-x-4 ml-[200px]'>
                <button className="mt-2  rounded-3xl px-4 py-2 text-red-400 hover:shadow-2xl active:scale-110 transition duration-300 hover:-translate-y-2 hover:bg-red-400 hover:text-white flex-grow" >Cancel</button>
                <button className="mt-2  rounded-3xl px-4 py-2 text-red-400 hover:shadow-2xl active:scale-110 transition duration-300 hover:-translate-y-2 hover:bg-red-400 hover:text-white flex-grow" onClick={handleSearch}>Search</button>
              </div>
            </div>
          )
        }
    </header>
  )
}
export default Header