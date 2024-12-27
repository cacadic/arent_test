import Image from 'next/image';
import React from 'react';
import mockData from "@/mocks/mealsHistory.json";
import CardMealHistory from '@/components/cardMealHistory';
import { Button } from '@/components/ui/button';

const SectionMealHistory = () => {
    return (
        <section className='w-full flex flex-col gap-7 mb-16'>
            <div className='container-arent grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2'>
                {mockData.map((meal) => (
                    <CardMealHistory
                        key={meal.id}
                        imageUrl={meal.imageUrl}
                        description={meal.description}
                    />))}
            </div>

            <Button variant="arentPrimary" className='mx-auto'>
                記録をもっと見る
            </Button>
        </section>
    );
};

export default SectionMealHistory;