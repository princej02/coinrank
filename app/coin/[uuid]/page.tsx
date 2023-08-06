'use client'

import useCoin from '@/app/lib/swr/useCoin'
import { IoIosArrowForward } from 'react-icons/io'
import { BiLink, BiLinkExternal } from 'react-icons/bi'
import { formatCurrency } from '@/app/lib/formatCurrency'
import Image from 'next/image'
import { SparkLine } from '@/app/components/Sparkline'
import { strToNumArr } from '@/app/lib/strToNumArr'


export default function Page({ params }: { params: { uuid: string } }) {
  const { coin, isLoading, isError } = useCoin(params.uuid)
  const isChangeNeg = coin?.change[0] === '-'
  
  if (isLoading) return <div>Loading...</div>

  return (
    <div className='w-full font-font-poppins min-h-full mb-16'>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-2 mb-4 text-sm font-bold text-gray-500">
          <a href="/">Coins</a> 
          <IoIosArrowForward /> 
          <span className="text-black">{coin?.name}</span>
        </div>
        <div className="container flex flex-col lg:flex-row justify-between gap-8">
          <div className="detail flex flex-col flex-1 gap-4">
            <div className="flex items-center gap-4">
              <div className='relative'>
                <Image src={coin?.iconUrl!} alt={coin?.name!} className="w-12 h-12" fill/>
              </div>
              <h2 className="text-3xl font-bold">{coin?.name}</h2>
              <span className="py-1 px-1 rounded-md bg-gray-200 font-semibold text-sm">{coin?.symbol}</span>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
              <span className="py-2 px-2 rounded-md bg-slate-400 text-white">Rank #{coin?.rank}</span>
              <span className="py-2 px-2 rounded-md bg-gray-500 text-white">coin</span>
              <span className="py-2 px-2 rounded-md bg-gray-500 text-white flex items-center gap-2">
                <BiLink />
                <a href={coin?.websiteUrl!} target="_blank">{coin?.websiteUrl}</a>
                <BiLinkExternal />
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <h5 className="text-sm font-bold text-zinc-500">Tags:</h5>
              <div className="flex items-center gap-2">
                {coin?.tags.map((tag, i) => (
                  <span key={i} className="text-xs rounded-lg px-2 py-1 bg-gray-500 text-gray-300 font-semibold">{tag}</span>
                ))}
              </div>
            </div>
            <div className="text-sm">
              <h5 className="font-bold text-zinc-500">Description:</h5>
              <p>{coin?.description}</p>
            </div>
          </div>
          <div className="data flex flex-col flex-1 gap-2">
            <span className="flex justify-end text-gray-400 font-bold text-sm">{coin?.name} Price ({coin?.symbol})</span>
            <div className="flex items-center justify-end gap-2">
              <h2 className="text-4xl font-bold">{formatCurrency(coin?.price!)}</h2>
              <span className={`rounded-md px-2 py-1 text-white font-semibold ${isChangeNeg ? 'bg-red-400': 'bg-green-400'}`}>{coin?.change}</span>
            </div>
            <div className="flex flex-col items-end">
              <h3 className="text-gray-400 font-bold text-sm">Market Cap</h3>
              <span className="font-semibold text-slate-500">{formatCurrency(coin?.marketCap!)}</span>
            </div>
            <div>
              <SparkLine data={strToNumArr(coin?.sparkline!)}/>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}