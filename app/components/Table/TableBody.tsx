'use client'

import { BASE_URL, HEADERS } from '@/app/lib/config'
import { fetcher } from '@/app/lib/swr/fetcher'
import useSWR from 'swr'

export default function TableBody() {
  const { data, error, isLoading } = useSWR([`${BASE_URL}/coins`, HEADERS], fetcher)
  return (
    <tbody>
      {}
    </tbody>
  )
}