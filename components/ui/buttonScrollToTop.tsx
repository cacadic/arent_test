"use client";

import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const ButtonScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 50) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)
        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])

    return (
        <>
            {isVisible && (
                <Button
                    onClick={scrollToTop}
                    variant="ghost"
                    className="rounded-full p-3 size-12 shadow-lg bg-white hover:bg-secondary/80 border border-ring fixed bottom-12 right-2 md:right-8 xl:right-24 z-50"
                >
                    <Image
                        src="/icons/icon_up.svg"
                        alt="Scroll to top"
                        width={15}
                        height={8}
                    />
                </Button>
            )}
        </>
    );
};

export default ButtonScrollToTop;