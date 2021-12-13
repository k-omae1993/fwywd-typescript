import Image from 'next/image'


type Props = {
    value_images: StaticImageData
    value_title: string
    text: string

}

const Values_Card = ({value_images, value_title, text }: Props) => {
    return (
        <>
        <Image
        src={value_images}
        width={184}
        height={157}
        className=""
        />
        <h2 className="mt-[15px] mb-[15px] text-[#008c8d] font-bold text-[23px] text-center">
            {value_title}
        </h2>
        <p　className="opacity-60 text-left text-[14px] font-semibold tracking-[4px] opacity-80 leading-6 mobile:pr-[20px] mobile:pl-[20px]">
            {text}
        </p>
        </>
    )
}

export default Values_Card