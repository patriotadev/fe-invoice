'use client'

import { useEffect } from 'react'
import Link from "next/link";
import { usePathname } from 'next/navigation'

interface NavigationInterface {
    label: string,
    icon: string,
    url: string
}

export default function Navigation() {
    const pathName = usePathname()
    const navigations = [
        {
            label: 'Dashboard',
            icon: `M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z`,
            url: '/'
        },
        {
            label: 'Invoices',
            icon: `M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`,
            url: '/invoices'
        },
    ]
    const isActiveNav = {
        icon: 'text-secondary',
        label: 'font-semibold text-secondary'
    }
    useEffect(() => console.log(pathName), []);
    return (
        <div className="navbar fixed z-50 bg-white">
            <div className="container mx-auto">
            <div className="flex-1">
                <div className="flex gap-20">
                    <a className="btn btn-base-300 text-secondary normal-case text-xl">DEVELOPMENT</a>
                    <div className="flex gap-10">
                        {navigations.map((_nav: NavigationInterface, index: number) => 
                            <div key={index}>
                                <Link href={_nav.url} className="flex items-center gap-2 h-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${pathName === _nav.url ? isActiveNav.icon : ''}`}>
                                        <path strokeLinecap="round" strokeLinejoin="round" 
                                            d={_nav.icon} 
                                        />
                                    </svg>
                                    <p className={pathName === _nav.url ? isActiveNav.label : ''}>{_nav.label}</p>
                                </Link>
                            </div>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="flex-none">
                <button className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                </button>
            </div>
            </div>
        </div>
    )
}