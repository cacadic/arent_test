import React from 'react';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image';
import Link from 'next/link';

const HamburgerMenu = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Image
                    src="/icons/icon_menu.svg"
                    width={32}
                    height={32}
                    alt="Menu"
                    className="lg:ml-4"
                />
            </SheetTrigger>
            <SheetContent className="flex flex-col items-start p-0 bg-transparent text-white h-[442px]">
                <SheetTitle></SheetTitle>
                <ul className="w-full bg-arent-gray-400 mt-8 cursor-pointer">
                    <li className="w-full text-left px-8 py-[23px] border-b border-gray-600 cursor-pointer hover:bg-gray-500 transition-all">
                        <Link href="/record">
                            自分の記録
                        </Link>
                    </li>
                    <li className="w-full text-left px-8 py-[23px] border-b border-gray-600 cursor-pointer hover:bg-gray-500 transition-all">
                        体重グラフ
                    </li>
                    <li className="w-full text-left px-8 py-[23px] border-b border-gray-600 cursor-pointer hover:bg-gray-500 transition-all">
                        目標
                    </li>
                    <li className="w-full text-left px-8 py-[23px] border-b border-gray-600 cursor-pointer hover:bg-gray-500 transition-all">
                        選択中のコース
                    </li>
                    <li className="w-full text-left px-8 py-[23px] border-b border-gray-600 cursor-pointer hover:bg-gray-500 transition-all">
                        <Link href="/recommended">
                            コラム一覧
                        </Link>
                    </li>
                    <li className="w-full text-left px-8 py-[23px] border-b border-gray-600 cursor-pointer hover:bg-gray-500 transition-all">
                        設定
                    </li>
                </ul>
            </SheetContent>
        </Sheet>
    );
};

export default HamburgerMenu;
