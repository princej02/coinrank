import { formatCurrency } from "@/app/lib/formatCurrency"
import { Coin } from "@/types"
import Image from "next/image"
import Link from "next/link"

interface ITableRow {
  coin: Coin
  isLoading?: boolean
}

export default function TableRow({ coin, isLoading }: ITableRow) {
  return (
    <tr key={coin.uuid} className="border-b-2 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td>
        <div className="flex items-center justify-center">
          {coin.rank}
        </div>
      </td>
      <td className="py-2 px-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 relative">
            <Image className="w-8 h-8" src={coin.iconUrl} alt={coin.name} fill/>
          </div>
          <Link href={`/coin/${coin.uuid}`}>
            <h3 className="font-semibold">{coin.name}</h3>
          </Link>
          <span>{coin.symbol}</span>
        </div>
      </td>
      <td className="py-2">
        <div className="flex items-center justify-center">
          {formatCurrency(coin.price)}
        </div>
      </td>
      <td className="py-2">
        <div className={`flex items-center justify-center ${coin.change[0] != "-" ? "text-green-400": "text-red-500"}`}>
          {coin.change}
        </div>
      </td>
      <td className="py-2">
        <div className="flex items-center justify-center">
          {formatCurrency(coin.marketCap)}
        </div>
      </td>
      <td className="py-2">
        <div className="flex items-center justify-center">
          {formatCurrency(coin['24hVolume'])} 
        </div>
      </td>
    </tr>
  )
}