import type { NextPage } from 'next'
import Image from 'next/image'
import Layout from '../components/Layout'
import About_Card from '../components/index/About_Card'
import Main_Title from '../components/index/Main_Title'
import ProgressBar from '../components/index/ProgressBar'
import Values_Card from '../components/index/Values_Card'

import Hero from '../public/introduction/hero.png'
import About1 from '../public/introduction/about-1.png'
import About2 from '../public/introduction/about-2.png'
import About3 from '../public/introduction/about-3.png'
import Skill from '../public/introduction/skill.png'
import Value1 from '../public/introduction/value1.png'
import Value2 from '../public/introduction/value2.png'
import Value3 from '../public/introduction/value3.png'
import Future from '../public/introduction/future.png'

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
              <About_Card
              about_images={About1}
              about_title={'趣味'}
              text={'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'}
              />
            </div>
            <div className="desktop:w-[310px] desktop:text-center desktop:mr-6 desktop:ml-6 mobile:mb-[25px]">
              <About_Card
              about_images={About2}
              about_title={'好きな食べ物'}
              text={'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'}
              />
            </div>
            <div className="desktop:w-[310px] desktop:text-center mobile:mb-[25px]">
              <About_Card
              about_images={About3}
              about_title={'性格'}
              text={'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'}
              />
            </div>
          </div>
        </section>
      </section>
    </div>

    {/*------skills------*/}
    <section className="desktop:bg-skills-pattern desktop:mt-[-200px] desktop:h-[690px] mobile:bg-phone-skills-pattern mobile:bg-cover relative">
      {/*------skills-mobile------*/}
      <div className="desktop:hidden ">
        <div className="text-center pt-[40px]">
            <Main_Title
            title={'スキル'}
            sub_title={'SKILLS'}/>
        </div>
        <div className="p-[20px]">
          <Image 
          src={Skill}
          />
        </div>
        <div className="pr-[20px] pl-[20px] pb-[30px]">
          <p　className="tracking-widest text-sm opacity-70 leading-6 font-semibold opacity-50" >
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p> 
        </div>
        <div className="pl-8 pr-8 pb-16">
          <div className="rounded bg-white p-8">
          <ProgressBar
            per_params={'80%'}
            params={80}
            />
            <ProgressBar
            per_params={'60%'}
            params={60}
            />
            <ProgressBar
            per_params={'40%'}
            params={40}
            />
            <ProgressBar
            per_params={'20%'}
            params={20}
            />
          </div>
        </div>
      </div>
      {/*------skills-desktop------*/}
      <div className="mobile:hidden flex pt-[50px]">
        <div className="w-1/2 text-right mt-[60px] mr-8">
          <Image 
          src={Skill}
          />
        </div>
        <div className="w-1/2 text-left mr-[80px]">
          <div className="flex">
            <h2 className="font-bold tracking-[6px] opacity-70 text-[25px] mr-[10px]">スキル</h2>
            <p className="text-[#008c8d] text-[15px] font-bold  inline-flex tracking-[1px] items-center">SKILLS</p>
          </div>
          <div className="mr-28 mt-4 w-9/12 mb-4">
            <p　className="tracking-widest text-sm opacity-70 leading-6 font-semibold opacity-50" >
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p> 
          </div>
          <div className="w-9/12 rounded bg-white p-8">
            <ProgressBar
            per_params={'80%'}
            params={80}
            />
            <ProgressBar
            per_params={'60%'}
            params={60}
            />
            <ProgressBar
            per_params={'40%'}
            params={40}
            />
            <ProgressBar
            per_params={'20%'}
            params={20}
            />
          </div>
        </div>
      </div> 
    </section>

    {/*------背景2------*/}
    <div className="desktop:h-[280px] relative bg-white">
    {/*------values------*/}
      <section>
        <div className="desktop:flex desktop:justify-center desktop:items-center mobile:text-center">
          <Main_Title
            title={'価値観'}
            sub_title={'VALUES'}/>
        </div>
        <div className="desktop:flex desktop:justify-center desktop:mt-12 mobile:mt-[30px]">
          <div className="desktop:w-[330px] desktop:h-[450px] bg-white desktop:rounded-bl-md">
            <Values_Card
            value_image={Value1}
            title={'価値観01'}
            text={'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'}
            />
          </div>
          <div className="desktop:h-[450px] desktop:w-[10px] desktop:bg-white">
            <div className="desktop:bg-green-500 desktop:p-auto desktop:w-[2px] desktop:h-[400px] desktop:opacity-20"></div>
          </div>
          <div className="desktop:w-[330px] desktop:h-[450px] desktop:bg-white">
            <Values_Card
            value_image={Value2}
            title={'価値観02'}
            text={'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'}
            />
          </div>
          <div className="desktop:h-[450px] desktop:w-[10px] desktop:bg-white">
            <div className="desktop:bg-green-500 desktop:p-auto desktop:w-[2px] desktop:h-[400px] desktop:opacity-20"></div>
          </div>
          <div className="desktop:w-[330px] desktop:h-[450px] bg-white rounded-br-md">
            <Values_Card
            value_image={Value3}
            title={'価値観03'}
            text={'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'}
            />
          </div>
        </div>
      </section>
    </div>

    {/*------future------*/}
    <section className="desktop:bg-future-pattern desktop:h-[626px] mobile:bg-phone-future-pattern bg-cover">
      {/*------future-mobile------*/}
      <div className="desktop:hidden text-center mt-[-200px]">
        <div className="pt-[250px] mb-4">
          <Main_Title
          title={'FUTURE'}
          sub_title={'3年後にやりたいこと'}/>
        </div>
        <p className="pr-4 pl-4 leading-7 text-[14px] font-semibold opacity-60 tracking-[1px] text-left">
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </p>
        <div className="mt-4 mb-[-10px]">
          <Image 
          src={Future}
          />
        </div>
      </div>
      {/*------future-desktop------*/}
      <div className="mobile:hidden flex justify-center pt-[300px]">
        <div className="w-1/2 text-left mt-[60px]">
          <div className="flex items-center pl-[220px] mb-4">
            <Main_Title
            title={'FUTURE'}
            sub_title={'3年後にやりたいこと'}/>
            </div>
            <p className="pl-[220px] leading-7 text-[14px] font-semibold opacity-60 tracking-[1px]">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
          </div>
        <div className="w-1/2 text-left ml-12 mt-[40px]">
          <Image 
          src={Future}
          />
        </div>
      </div>
    </section>

    </Layout>
  )
}

export default Home
