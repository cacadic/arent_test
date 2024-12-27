import HamburgerMenu from '@/components/hamburgerMenu';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navigation = () => {
    return (
        <nav className='w-full h-16 bg-arent-dark-500 text-white'>
            <div className='container-arent flex items-center justify-between gap-x-8'>
                <Link href="/">
                    <Image
                        src="/icons/logo.svg"
                        alt="Logo"
                        width={109}
                        height={40}
                        className="w-[109px] h-[40px]"
                        priority
                    />
                </Link>

                <div className='flex items-center gap-x-8'>
                    <div className='flex items-center gap-x-2'>
                        <Link href="/" className='relative'>
                            <Image
                                src="/icons/icon_memo.svg"
                                alt="Memo"
                                width={32}
                                height={32}
                            />
                        </Link>
                        <Link href="/record" className='hover:underline hidden md:block'>
                            自分の記録
                        </Link>
                    </div>
                    <div className='flex items-center gap-x-2'>
                        <div className='relative'>
                            <Image
                                src="/icons/icon_challenge.svg"
                                alt="Memo"
                                width={32}
                                height={32}
                            />
                        </div>
                        <Link href="/recommended" className='hover:underline hidden md:block'>
                            チャレンジ
                        </Link>
                    </div>
                    <div className='flex items-center gap-x-2'>
                        <Link href="/" className='relative'>
                            <Image
                                src="/icons/icon_info.svg"
                                alt="Memo"
                                width={32}
                                height={32}
                            />
                            <span className='noti-icon'>
                                1
                            </span>
                        </Link>
                        <Link href="/" className='hover:underline hidden md:block'>
                            お知らせ
                        </Link>
                    </div>

                    <HamburgerMenu />
                </div>
            </div>
        </nav>
    );
};

export default Navigation;