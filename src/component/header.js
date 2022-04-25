import React from 'react';
import { Button, Image } from 'antd';
import Text from 'antd/lib/typography/Text';
import { button as ButtoComponent } from './button'
import logo from '../asset/img/logo.png'
import { Link } from 'react-scroll';

const header = () => {
    return (
        <div className='flex my-6 mx-10 justify-between '>
            {/* icon left */}
            {/* <Text className='text-pink'>
                SRI WY
            </Text> */}
            <Image width={40}  src={logo} preview={false} />

            {/* menu bar center */}
            <div className='flex w-2/5 justify-center h-auto items-center'>
                <Link to='home' className='font-semibold mx-5 text-lg text-pink hover:text-white'>
                    Home
                </Link>
                <Link to='about'  className='font-semibold mx-5 text-lg text-pink hover:text-white'>
                    About
                </Link>
                <Link to='skill'  className='font-semibold text-lg text-pink hover:text-white'>
                    Skill
                </Link>
                <Link to='about'  className='font-semibold mx-5 text-lg text-pink hover:text-white'>
                    Portfolio
                </Link>
            </div>

            {/* contact right */}
            <ButtoComponent label="Contact Me" />

        </div>
    )
}

export default header