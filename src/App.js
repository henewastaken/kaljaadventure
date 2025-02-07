import { useState, useEffect } from 'react';
import { rooms } from './data/rooms';
import { items } from './data/items';
import { ReactComponent as Money } from './assets/money.svg';

let availableItems = Object.keys(items);

export default function Game() {
  const [currentRoom, setCurrentRoom] = useState(rooms['start']);
  const [time, setTime] = useState(100);
  const [inventoryItems, setInventoryItems] = useState([]);

  console.log('currentroom', inventoryItems);

  // useEffect(() => {
  //   setInventoryItems((prevItems) => [...prevItems, getRandomItems()]);
  // }, [currentRoom]);
  const getRandomItem = () => {
    const randomIndex = Math.floor(Math.random() * availableItems.length);
    const randomItemKey = availableItems[randomIndex];
    availableItems.splice(randomIndex, 1);
    addToInventory(randomItemKey);
  };

  const handleUseItem = (item) => {
    item.action();
    setInventoryItems(
      (prevItems) => prevItems.filter((inventoryItem) => inventoryItem !== item) // Filter out the used item
    );
  };

  const addToInventory = (itemKey) => {
    setInventoryItems((previousInventoryState) => [...previousInventoryState, items[itemKey]]);
  };

  const changeRoom = (nextRoom) => {
    setTime((prev) => prev - currentRoom.timePenalty);
    Math.random() <= 0.2 && getRandomItem();
    setCurrentRoom(rooms[nextRoom]);
  };

  return (
    <div className='relative w-full h-screen flex flex-col items-center justify-center bg-gray-800 text-white'>
      olet {currentRoom.name}
      <Money className='money' />
      {/* <div className='relative w-3/4 h-3/4 bg-black'>
        <img
          src={rooms[currentRoom].background}
          alt='Room'
          className='absolute w-full h-full object-cover'
        />
        {roomItems.map((item, index) => (  
          <img
            key={index}
            src={item}
            alt='item'
            className='absolute w-16 h-16 cursor-pointer'
            style={{ top: `${Math.random() * 80}%`, left: `${Math.random() * 80}%` }}
          />
        ))}
      </div> */}
      <div>
        items:
        {inventoryItems.map((item) => {
          return <button onClick={() => handleUseItem(item)}>use {item.name}</button>;
        })}
      </div>
      <div className='flex gap-4 mt-4'>
        where to go?
        {currentRoom.connections.map((room) => (
          <button
            key={room}
            className='px-4 py-2 bg-blue-500 rounded hover:bg-blue-700'
            onClick={() => changeRoom(room)}
          >
            Go to {room}
          </button>
        ))}
      </div>
      <p className='mt-4 text-lg'>Time Remaining: {time}</p>
    </div>
  );
}
