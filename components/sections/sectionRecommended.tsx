import React from 'react';
import mockDataCardText from "@/mocks/recommendCardText.json"
import CardRecommendText from '@/components/cardRecommendText';
import mockDataCardPost from "@/mocks/recommendCardPost.json"
import CardRecommendPost from '@/components/cardRecommendPost';
import { Button } from '@/components/ui/button';

const SectionRecommended = () => {
    return (
        <section className='w-full py-14'>
            <div className='container-arent flex flex-col gap-14'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {mockDataCardText.map((card) => (
                        <CardRecommendText
                            key={card.id}
                            title={card.title}
                            description={card.description}
                        />))}
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-4'>
                    {mockDataCardPost.map((card) => (
                        <CardRecommendPost
                            key={card.id}
                            imageUrl={card.imageUrl}
                        />))}
                </div>

                <Button variant="arentPrimary" className='mx-auto'>
                    記録をもっと見る
                </Button>
            </div>
        </section>
    );
};

export default SectionRecommended;