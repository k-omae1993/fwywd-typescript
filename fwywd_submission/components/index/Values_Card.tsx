import Image from "next/image"

type Props = {
    value_image: StaticImageData
    title: string
    text: string
}

const Values_Card = ({ value_image, title, text }: Props ) => {
    return (
        <>
        <div className="text-center">
            <Image
            src={value_image}
            />
            </div>
            <h2 className="desktop:mt-8 mobile:mt-4 text-center font-bold opacity-80">
                {title}
            </h2>
            <p className="p-[25px] text-[14px] tracking-[1.5px] font-semibold leading-7 opacity-70">
                {text}
            </p>
        </>
    )
}

export default Values_Card