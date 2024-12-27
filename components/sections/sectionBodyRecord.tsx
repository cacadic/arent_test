"use client";

import React from 'react';
import mockDataBodyRecord from '@/mocks/bodyRecords.json';
import CardBodyRecord from '@/components/cardBodyRecord';
import mockDataMyExcercise from '@/mocks/myExcercise.json';
import { Button } from '@/components/ui/button';
import ChartRecord from '@/components/ChartRecord';

const exerciseData = Array.from({ length: 30 }, () => mockDataMyExcercise);

const content = `
    私の日記の記録が一部表部表部表示されます<br/>
    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。
    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。
    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。
    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。
    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。
    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。
    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。
    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。
    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。
    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。
  `;

const SectionBodyRecord = () => {
    return (
        <section className='container-arent flex flex-col gap-14'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
                {mockDataBodyRecord.map((record) => (
                    <CardBodyRecord
                        key={record.id}
                        imageUrl={record.imageUrl}
                        title={record.title}
                        description={record.description}
                    />))}
            </div>
            <div className='w-full h-[304px] bg-arent-dark-500 px-6 py-4 text-white flex flex-col gap-2'>
                <div className='flex gap-4'>
                    <p className='uppercase w-24 text-[15px] leading-[18px] font-inter font-normal'>My Excercise</p>
                    <p className='font-inter text-[22px] leading-[27px]'>2021.05.21</p>
                </div>
                <ChartRecord />

                <div className='flex items-center gap-4'>
                    <div className='w-14 h-6 flex justify-center items-center bg-white rounded-full text-arent-primary-300 font-notoSansJP text-[15px] leading-[22px] font-light cursor-pointer'>
                        日
                    </div>

                    <div className='w-14 h-6 flex justify-center items-center bg-white rounded-full text-arent-primary-300 font-notoSansJP text-[15px] leading-[22px] font-light cursor-pointer'>
                        週
                    </div>

                    <div className='w-14 h-6 flex justify-center items-center bg-white rounded-full text-arent-primary-300 font-notoSansJP text-[15px] leading-[22px] font-light cursor-pointer'>
                        月
                    </div>

                    <div className='w-14 h-6 flex justify-center items-center bg-arent-primary-300 rounded-full text-white font-notoSansJP text-[15px] leading-[22px] font-light cursor-pointer'>
                        年
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-1 bg-arent-dark-500 px-6 py-4 text-white'>
                <div className='flex gap-4'>
                    <p className='uppercase w-24 text-[15px] leading-[18px] font-inter font-normal'>My Excercise</p>
                    <p className='font-inter text-[22px] leading-[27px]'>2021.05.21</p>
                </div>

                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-x-10 pr-10 max-h-[192px] overflow-y-auto scrollbar-thin scrollbar-thumb-yellow-500 scrollbar-track-arent-gray-400 scrollbar-thumb-rounded-full scrollbar-track-rounded-full'>
                    {exerciseData.map((exercise, index) => (
                        <li className="flex justify-between items-center relative before:content-[''] before:w-[4px] before:h-[4px] before:bg-white before:rounded-full before:absolute before:left-[18px] before:top-3.5 before:-translate-x-4 border-b-[1px] border-arent-gray-400 px-4 py-[3.5px]" key={index}>
                            <div className="flex flex-col">
                                <p className='text-[15px] font-light leading-[22px]'>{exercise.title}</p>
                                <p className='text-[15px] leading-[18px] text-arent-primary-300'>{exercise.description}</p>
                            </div>
                            <p className='font-inter text-[18px] leading-[22px] text-right text-arent-primary-300'>{exercise.time}</p>
                        </li>
                    ))
                    }

                </ul>
            </div>

            <div className='flex flex-col gap-y-2'>
                <p className='uppercase font-inter text-[22px] leading-[27px] text-arent-dark-500'>My Diary</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
                    {new Array(8).fill(0).map((_, index) => (
                        <div className='border border-[#707070] p-4 pb-[27px]' key={index}>
                            <p className='font-inter font-normal text-[18px] leading-[22px] text-arent-dark-500'>2021.05.21</p>
                            <p className='font-inter font-normal text-[18px] leading-[22px] text-arent-dark-500'>23:25</p>
                            <div className='line-clamp-7 text-[12px] leading-[17px] font-light font-notoSansJP mt-2' dangerouslySetInnerHTML={{ __html: content }}></div>
                        </div>
                    ))}
                </div>
            </div>

            <Button variant="arentPrimary" className='mx-auto'>
                記録をもっと見る
            </Button>
        </section>
    );
};

export default SectionBodyRecord;