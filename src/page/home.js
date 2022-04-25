import { Image } from "antd"
import Text from "antd/lib/typography/Text"
import Header from "../component/header"
import Avatar from '../asset/img/avatar.png'
import Exp from '../asset/img/exp.png'
import ComplitProject from '../asset/img/cml-prj.png'
import Client from '../asset/img/client.png'
import DownCircleLine from '../asset/img/DownCircleLine.png'
import { card as CardComponent } from '../component/card'

const home = () => {

    return (
        <div id={"home"}>
            <Header />
            <div className=" mt-28">
                <div className="p-3">
                    <Text className="text-white text-4xl">Hi, I am </Text>
                    <Text strong className="text-pink text-4xl underline">Sri Wahyuni</Text>
                </div>
                <div className="p-3">
                    <Text className="text-white text-6xl">Android Developer & Front-End Developer</Text>
                </div>
                <div className="p-3">
                    <Text className="text-white text-2xl">I code beautifully simple things, and I love what I do.</Text>
                </div>
                <div className="justify-center flex">
                    <Image width={180} src={Avatar} preview={false} />
                </div>
                <div className="flex mt-14 mx-16 justify-between">
                    <CardComponent title={"4+"} subtitle={"Years of Experience"} icon={Exp} />
                    <CardComponent title={"50+"} subtitle={"Completed Projects"} icon={ComplitProject} />
                    <CardComponent title={"10+"} subtitle={"Happy Clients"} icon={Client} />
                </div>
                <div className="flex mt-10 ml-0 justify-center">
                    <Image className="animate-bounce" width={40} src={DownCircleLine} preview={false} />
                </div>
            </div>
        </div>
    )
}

export default home