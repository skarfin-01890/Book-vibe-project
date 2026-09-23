
'use client'
import { BooksContext } from '@/context/BooksContext';
import { Bookstype } from '@/types/books.types';
import React, { useContext } from 'react';

const ReadButton = ({book}:{book:Bookstype}) => {
const {readBooks, setReadBooks}=useContext(BooksContext)
console.log(readBooks)
	const handleReadBtn=()=>{

		setReadBooks([...readBooks, book])
	}
	return<button className="mt-6 w-full rounded-xl bg-green-600 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 cursor-pointer hover:shadow-lg" onClick={()=>handleReadBtn()}>
        Read
      </button>
};

export default ReadButton;