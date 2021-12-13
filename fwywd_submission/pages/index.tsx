import type { NextPage } from 'next'
import Image from 'next/image'
import Layout from '../components/Layout'
import Values_Card from '../components/index/Values_Card'
import Main_Title from '../components/index/Main_Title'

import Hero from '../public/introduction/hero.png'
import About1 from '../public/introduction/about-1.png'
import About2 from '../public/introduction/about-2.png'
import About3 from '../public/introduction/about-3.png'

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

      {/*------背景1------*/}
    <div className="relative  bg-white">
    {/*------values------*/}
      <section>
        <section className="desktop:h-[762px] desktop:bg-about-pattern desktop:bg-cover">
          <div className="desktop:flex desktop:justify-center desktop:mb-12 desktop:items-center mobile:text-center mobile:mb-[20px]">
            <Main_Title
            title={'私について'}
            sub_title={'ABOUT'}/>
          </div>
          <div className="desktop:flex desktop:justify-center mobile:text-center ">
            <div className="desktop:w-[310px] desktop:text-center mobile:mb-[25px]">
              <Values_Card
              value_images={About1}
              value_title={'趣味'}
              text={'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'}
              />
            </div>
            <div className="desktop:w-[310px] desktop:text-center desktop:mr-6 desktop:ml-6 mobile:mb-[25px]">
              <Values_Card
              value_images={About2}
              value_title={'好きな食べ物'}
              text={'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'}
              />
            </div>
            <div className="desktop:w-[310px] desktop:text-center mobile:mb-[25px]">
              <Values_Card
              value_images={About3}
              value_title={'性格'}
              text={'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'}
              />
            </div>
          </div>
        </section>
      </section>
    </div>

    </Layout>
  )
}

export default Home
