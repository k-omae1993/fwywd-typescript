import type { NextPage } from 'next'
import Image from 'next/image'
import Layout from '../components/Layout'

import Hero from '../public/introduction/hero.png'

const Home: NextPage = () => {
  return (
    
    <Layout>
      {/*------main------*/}
      <main className="desktop:h-[570px] desktop:flex desktop:justify-between bg-[#6bc2c3] text-center text-white">
        <div className="desktop:w-3/6 desktop:m-auto mobile:text-center">
          <div className="inline-block desktop:text-left desktop:mr-[150px] mobile:text-center mobile:pt-[30px]">
            <h2 className="desktop:text-[43px] desktop:opacity-90 mobile:text-[26px] tracking-[5px] font-semibold mb-4 ">メインタイトル</h2>
            <p className="desktop:text-[28px] mobile:text-[18px] font-bold opacity-80 tracking-[5px]">サブタイトル</p>
          </div>
        </div>
        <div className="desktop:w-3/6 desktop:m-auto mobile:pr-[50px] mobile:pl-[50px] mobile:pt-[50px] mobile:pb-[20px]">
          <Image 
          src={Hero}
          width={500}
          height={400}
          />
        </div>
      </main>
    </Layout>
  )
}

export default Home
