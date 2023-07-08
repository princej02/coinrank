import TableBody from "./TableBody"
import TableHeader from "./TableHeader"

export default function Table() {
  const titles = ["#", "Name", "Price", "Change", "Market Cap", "Volume(24h)"]
  return (
    <div className="relative overflow-x auto mb-8">
      <table className="w-full text-gray-500 dark:text-gray-400">
        <TableHeader titles={titles}/>
        <TableBody />
      </table>
    </div>
  )
}