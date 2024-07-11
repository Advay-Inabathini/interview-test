import React from 'react'

interface ItemCardProps {
    item: {
        name:string;
        calories: number;
        price: number;
        quantity: number;
        image: string;
    }

}


const ItemCard = ({item}:ItemCardProps) => {
  return (
    <div className="flex p-4 border-b border-gray-200">
      <img src={item.image} alt={item.name} className="w-20 h-20 rounded" />
      <div className="flex flex-col justify-between p-4">
        <span className="text-lg font-bold">{item.name}</span>
        <span className="text-gray-400">{item.calories}</span>
        <span className="text-gray-800 font-bold">{item.price}</span>
      </div>
      <div className="ml-auto flex items-center">
        <button className='text-gray-500'>-</button>
        <span className='mx-4'>{item.quantity}</span>
        <button className='text-gray-500'>+</button>
      </div>
    </div>
  );
};

export default ItemCard
