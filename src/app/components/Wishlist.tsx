'use client'

import { BooksContext } from '@/context/BooksContext';
import { Bookstype } from '@/types/books.types';
import React, { useContext } from 'react';

const Wishlist = ({book}:{book:Bookstype}) => {
	const {wishlist, setWishlist}=useContext(BooksContext)
	console.log(wishlist,"Wishlist")
	const handlewishBtn=()=>{

		setWishlist([...wishlist, book])
	}
	return  <button className="mt-6 w-full rounded-xl bg-blue-400 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 cursor-pointer hover:shadow-lg" onClick={()=>{handlewishBtn()}}>
        Wishlist
      </button>
};

export default Wishlist;