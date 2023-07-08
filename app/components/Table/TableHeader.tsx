interface ITableHead {
  titles: string[]
}

export default function TableHeader({
  titles
}: ITableHead) {
  return (
    <thead>
      <tr className="border-b-2">
        <th className="text-sm py-2 px-2" scope="col">{titles[0]}</th>
        <th className="text-sm py-2 px-2" scope="col">{titles[1]}</th>
        <th className="text-sm py-2 px-2" scope="col">{titles[2]}</th>
        <th className="text-sm py-2 px-2" scope="col">{titles[3]}</th>
        <th className="text-sm py-2 px-2" scope="col">{titles[4]}</th>
        <th className="text-sm py-2 px-2" scope="col">{titles[5]}</th>
      </tr>
    </thead>
  )
}