import Link from 'next/link'
import { BsGithub } from 'react-icons/bs'

export default function Footer() {
  return (
    <footer className=" relative bottom-0 w-full flex-1 p-4 flex items-center justify-center">
      <div className="text-sm font-semibold text-gray-600 flex flex-col justify-center items-center">
        <p>Made by princej02 &copy; {new Date().getFullYear()}</p>
        <Link href='https://github.com/princej02' target='_blank'><BsGithub /></Link>
      </div>
    </footer>
  )
}