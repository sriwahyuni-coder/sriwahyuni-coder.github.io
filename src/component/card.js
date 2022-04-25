import { Image } from "antd"
import Text from "antd/lib/typography/Text"

export const card = ({ title, subtitle, icon }) => {
    return (
        <div className="flex bg-slate-700 rounded-3xl w-3/12 p-4 drop-shadow-lg justify-center items-center">
            <Image width={70} preview={false} src={icon} />
            <div className="px-10">
                <div>
                    <Text storng className='text-pink text-3xl'>{title}</Text>
                </div>
                <div>
                    <Text className='text-white text-base'>{subtitle}</Text>
                </div>
            </div>
        </div>
    )
}