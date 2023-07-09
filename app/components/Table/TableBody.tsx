'use client'

import { BASE_URL, HEADERS } from '@/app/lib/config'
import { fetcher } from '@/app/lib/swr/fetcher'
import { GetCoinsResponse } from '@/types'
import useSWR from 'swr'

export default function TableBody() {
  const { data, error, isLoading } = useSWR<GetCoinsResponse>(`${BASE_URL}/coins`, fetcher)
  
  
  return (
    <tbody>
      {}
    </tbody>
  )
}