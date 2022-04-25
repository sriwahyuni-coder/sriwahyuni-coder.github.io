import { Image } from "antd"
import avatar from '../asset/img/avatar.png'
import {card as CardComponent} from '../component/card'

const about =()=>{
    return(
        <div id="about" className="flex h-screen justify-center">
            <Image src={avatar} width={200} preview={false}/>
            <CardComponent label={"WHO I AM"} />
        </div>
    )
}

export default about