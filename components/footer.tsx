import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className='w-full min-h-32 bg-arent-dark-500 text-white'>
            <div className='container-arent min-h-32 flex flex-col lg:flex-row items-center gap-x-[45px] gap-y-5 py-10 lg:py-0'>
                <Link href='/' className='hover:underline'>
                    会員登録
                </Link>
                <Link href='/' className='hover:underline'>
                    運営会社
                </Link>
                <Link href='/' className='hover:underline'>
                    利用規約
                </Link>
                <Link href='/' className='hover:underline'>
                    個人情報の取扱について
                </Link>
                <Link href='/' className='hover:underline'>
                    特定商取引法に基づく表記
                </Link>
                <Link href='/' className='hover:underline'>
                    お問い合わせ
                </Link>
            </div>
        </footer>
    );
};

export default Footer;