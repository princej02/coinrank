'use client'

import { useState } from 'react'
import { FiSearch } from "react-icons/fi"
import useSWR from 'swr'
import Link from 'next/link'
import { BASE_URL } from '../lib/config'
import { fetcher } from '../lib/swr/fetcher'
import { GetCoinsResponse } from '@/types'
import Image from 'next/image'

type SearchResultProps = {
  value: string
  handleClick: () => void
}

export const SearchResult = ({ value, handleClick }: SearchResultProps) => {
  const { data, error, isLoading } = useSWR<GetCoinsResponse>(`${BASE_URL}/coins`, fetcher)

  const coins = data?.data.coins
  const Coins = coins!
  const searchData = () => {
    return Coins.filter(d => d.name.toLowerCase().includes(value.toLowerCase()))
  }

  if (isLoading) return <div>Loading...</div>

  return (
    <div className="w-full absolute top-12 flex flex-col gap-2 rounded-md bg-white shadow-md h-60 overflow-y-scroll z-10">
      {searchData().map((d, i) => (
        <Link key={i} href={`/coin/${d.uuid}`} onClick={handleClick}>
          <div className="p-2 flex items-center text-sm hover:bg-zinc-50">
            <div className='relative w-8 h-8 mr-4'>
              <Image src={d.iconUrl} alt={d.name} className='h-8 w-8' fill/>
            </div>
            <div className="flex flex-col flex-wrap gap-2">
              <div className="flex gap-2">
                <h3 className='font-bold text-gray-400'>{d.name}</h3>
                <span>{d.symbol}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span>rank: {d.rank}</span>
                <span>Change: {d.change}</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export const Search = () => {
  const [value, setValue] = useState("")
  const validInput = value !== "".trim()
  const handleClick = () => setValue("")

  return (
    <div className='flex flex-col relative'>
      <label htmlFor="search" className="sr-only">Search</label>
      <div className="flex gap-4 items-center bg-gray-200 rounded-md focus-within:text-gray-400">
        <div className="absolute inset-y-0 left-0 pl-3 pointer-events-none flex items-center">
          <FiSearch className=''/>
        </div>
        <input 
          id="search" 
          type="text"
          value={value} 
          placeholder="Search..." 
          className="border-transparent border-2 block rounded-md font-medium pl-10 p-2.5 outline-none bg-transparent w-full focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
          onChange={(e) => setValue(e.target.value)}
          autoComplete="off"
        />
      </div>
      {validInput && (
        <SearchResult value={value} handleClick={handleClick}/>
      )}
    </div>
  )
}