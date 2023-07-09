'use client'

import { BASE_URL } from '@/app/lib/config'
import { fetcher } from '@/app/lib/swr/fetcher'
import { GetCoinsResponse } from '@/types'
import useSWR from 'swr'
import TableRow from './TableRow'

export default function TableBody() {
  const { data, error, isLoading } = useSWR<GetCoinsResponse>(`${BASE_URL}/coins`, fetcher)

  const coins = data?.data.coins
  
  return (
    <tbody>
      {coins?.map((coin, index) => (
        <TableRow key={index} coin={coin} />
      ))}
    </tbody>
  )
}