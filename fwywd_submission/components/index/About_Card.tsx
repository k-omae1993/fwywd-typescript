import Image from 'next/image'


type Props = {
    about_images: StaticImageData
    about_title: string
    text: string

}

const About_Card = ({about_images, about_title, text }: Props) => {
    return (
        <>
        <Image
        src={about_images}
        width={184}
        height={157}
        className=""
        />
        <h2 className="mt-[15px] mb-[15px] text-[#008c8d] font-bold text-[23px] text-center">
            {about_title}
        </h2>
        <p　className="opacity-60 text-left text-[14px] font-semibold tracking-[4px] opacity-80 leading-6 mobile:pr-[20px] mobile:pl-[20px]">
            {text}
        </p>
        </>
    )
}

export default About_Card