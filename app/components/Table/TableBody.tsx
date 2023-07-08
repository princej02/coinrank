import { BASE_URL, HEADERS } from '@/app/lib/config'
import useSWR from 'swr'

export default function TableBody() {
  const { data, error, isLoading } = useSWR([`${BASE_URL}/coins`, HEADERS], fetcher)
  return (
    <tbody>
      {}
    </tbody>
  )
}