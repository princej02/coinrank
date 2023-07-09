import { Sparklines, SparklinesLine } from 'react-sparklines'

type SparkLineProps = {
  data: number[]
}

export const SparkLine = ({ data }: SparkLineProps) => {
  return (
    <Sparklines data={data} limit={5} width={100} height={20} margin={5}>
      <SparklinesLine color='blue'/>
    </Sparklines>
  )
}