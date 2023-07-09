import useSWR from 'swr'
import { fetcher } from './fetcher'
import { BASE_URL } from '../config'
import { GetCoinResponse } from '@/types'

export default function useCoin(uuid: string) {
  const { data, error, isLoading } = useSWR<GetCoinResponse>(`${BASE_URL}/coin/${uuid}`, fetcher)

  return {
    coin: data?.data.coin,
    isLoading,
    isError: error
  }
}