"use client"
import React from 'react'
import { SafeUser } from '../types';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import useFavorite from '../hooks/useFavorite';

interface HeartButtonProps{
    listingId:string;
    currentUser?:SafeUser | null;
}

const HeartButton:React.FC<HeartButtonProps> = ({
    listingId,currentUser
}) => {
    const {hasFavorited,toggleFavorite}=useFavorite({
      listingId,
      currentUser
    })

  return (
    <div 
    onClick={toggleFavorite}
    className="
      relative
      hover:opacity-80
      transition
      cursor-pointer
    "
  >
    <AiOutlineHeart
      size={30}
      className="
        fill-white
        absolute
        -top-[2px]
        -right-[2px]
        m-[10px]
      "
    />
    <AiFillHeart
      size={25}
      className={`
        ${hasFavorited ? 'fill-rose-500' : 'fill-neutral-500/70'}
        absolute
        -right-[0.5px]
         m-[10px]
        `
      }
    />
  </div>
  )
}

export default HeartButton