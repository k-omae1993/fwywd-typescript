type Props = {
    title: string
    sub_title: string
}

const Main_Title = ({ title, sub_title }: Props) => {
    return (
        <>
        <h2 className="desktop:text-2xl desktop:mr-4 mt-12 tracking-widest font-semibold mobile:text-[20px]">
            {title}
        </h2>
        <a className="text-[#008c8d] font-semibold font-[15px] text-center mt-[45px]">
            {sub_title}
        </a>
        </>
    )
}

export default Main_Title