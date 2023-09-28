import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link';
import { SiSemanticuireact } from "react-icons/si";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
const routes = [
  {
    label: "Dashboard", 
    icon: SiSemanticuireact,
    href: "/",
  },
  {
    label: "Password generator", 
    icon: SiSemanticuireact,
    href: "/password-generator",
  },
  {
    label: "Todo", 
    icon: SiSemanticuireact,
    href: "/todo",
  },
  {
    label: "Video Generation", 
    icon: SiSemanticuireact,
    href: "/video",
  },
  {
    label: "Music Generation", 
    icon: SiSemanticuireact,
    href: "/music",
  },
  {
    label: "Code Generation", 
    icon: SiSemanticuireact,
    href: "/code",
  },
  {
    label: "Settings", 
    icon: SiSemanticuireact,
    href: "/settings",
  },
  {
    label: "Video Generation", 
    icon: SiSemanticuireact,
    href: "/video",
  },
  {
    label: "Music Generation", 
    icon: SiSemanticuireact,
    href: "/music",
  },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">

          <aside className='space-y-4 flex flex-col h-screen bg-gray-600 text-white w-96'>
            <div className='flex items-center px-2 py-3 text-2xl text-bold bg-purple-500 border-b border-white'>
              <SiSemanticuireact className="" />
              <h1 className='ml-2'>React mini projects 1</h1>
            </div>
            {routes.map((route) => (
              <div className='flex items-center px-2 py-3 text-2xl text-bold' key={route.path}>
                <route.icon />
                <Link href={route.href} className='ml-2'>{route.label}</Link>
              </div>
            ))}
          </aside>
          <div className='w-full'>
            {children}
          </div>
          
        </div>
      </body>
    </html>
  )
}
