import React from 'react'

interface FrequentlyOrderedProps {
    items: {
        name: string;
        price: number;
        image: string;
    }[];
}


const FrequentlyOrdered = ({items}: FrequentlyOrderedProps) => {
  return (
    <div>
      <span className="text-lg font-bold">Frequently Ordered</span>
      <div className="flex flex-col">

      
        {items.map((items, index) => (
        <div key={index} className='flex mt-4 flex-col items-center'>
            <img src={items.image} alt={items.name} className='w-40 h-20 rounded' />
            <span className='mt-4'>{items.name}</span>
            <span>{items.price}</span>
        </div>
      ))}
        </div>
    </div>
  );
};

export default FrequentlyOrdered
