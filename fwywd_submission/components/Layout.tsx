import React, { ReactNode } from 'react'
import Head from 'next/head'
import Image from 'next/image'

import Fwywd from '../public/introduction/logo.png'
import Footer_Logo from '../public/introduction/logo_white.png'
import Twitter from '../public/introduction/twitter.png'
import Facebook from '../public/introduction/facebook.png'


type Props = {
    children?: ReactNode
    items?: string[]
    title?: string
}
 

const Layout = ({ children, items = ['about', 'skills', 'values', 'future'], title = 'fwywd in 淡路島'}: Props) => {
    return (
        <div>
            <Head>
                <title>{}</title>
                <meta charSet="utf-8" />
            </Head>
            {/*--------header---------*/}
            <header className="desktop:flex desktop:h-[90px]">
                <div className="mobile:text-center">
                <Image
                src={Fwywd}
                width={200}
                height={100}
                />
                </div>
                <nav className="desktop:ml-auto desktop:leading-[90px] desktop:flex-nowrap mobile:mt-[-20px] mobile:pb-[15px]">
                <ul className="flex mobile:justify-center">
                    {items.map((item) => {
                    return (
                    <li key={item} className="text-[#008c8d] mr-2 font-semibold tracking-[1px] text-[17px]">
                        <a className="uppercase">
                            {item}
                        </a>
                    </li>
                        );
                    })}  
                </ul>
                </nav>
            </header>
            {children}
            {/*--------footer---------*/}
            <footer className="bg-[#262c3a] text-[white]">
                <div className="desktop:hidden">
                    <div className="flex justify-center pt-[30px] text-[15px]">
                    <a className="mr-4">お問い合わせ</a>
                    <a>助成金について</a>
                    </div>
                    <div className="flex justify-center pt-[10px] text-[15px]">
                    <a className="mr-4">特定商取引法に基づく表記</a>
                    <a>プライバシーポリシー</a>
                    </div>
                </div>
                <div className="mobile:hidden">
                    <div className="flex justify-center items-center pt-[40px]">
                    <a className="text-white text-[10px] opacity-80 tracking-widest font-semibold">CREATED BY</a>
                    </div>
                </div>
                <div className="mobile:mt-12 mt-16 text-center">
                    <Image
                    src={Footer_Logo}
                    width={100}
                    height={130}
                    />
                </div>
                <div className="flex justify-center mt-8">
                    <div className="opacity-80 mr-4">
                    <Image
                    src={Twitter}
                    width={20}
                    height={20}
                    />
                    </div>
                    <div className="opacity-80">
                    <Image
                    src={Facebook}
                    width={20}
                    height={20}
                    />
                    </div>
                </div>
                <div className="pb-[30px]">
                    <p className="text-[7px] mt-8 text-white font-medium opacity-80 tracking-[1px] text-center">@2021 KIKAGAKU</p>
                </div>
            </footer>
        </div>
    )
}

export default Layout