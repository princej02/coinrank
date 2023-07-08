import useSWR from 'swr'

export default function TableBody() {
  const { data, error, isLoading } = useSWR('', fetcher)
  return (
    <tbody>
      {}
    </tbody>
  )
}