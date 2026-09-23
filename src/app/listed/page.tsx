'use client'


import { BooksContext } from '@/context/BooksContext';
import { Bookstype } from '@/types/books.types';
import Image from 'next/image';
import React, { useContext } from 'react';

const ListedBooks = () => {
	const {readBooks}=useContext(BooksContext)
	console.log(readBooks,"readbooks")
	return (
		<section className='conatainer mx-auto'>
			<h1 className='font-bold text-4xl bg-gray-300 h-25 w-[1100px] flex justify-center items-center mt-15 rounded-xl'>Books</h1>

			<button className='mt-30 bg-amber-500 p-6'>Read Books</button>
		<div className="grid grid-cols-1 gap-6  mt-9">
  {readBooks.map((readbook: Bookstype) => (
    <div
      key={readbook.bookId}
      className="flex gap-5 rounded-2xl border border-gray-200 bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Image */}
      <div className="shrink-0">
        <Image
          src={readbook.image}
          alt={readbook.bookName}
          width={140}
          height={190}
          className="h-[190px] w-[140px] rounded-xl object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col">
        {/* Category */}
        <span className="w-fit rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
          {readbook.category}
        </span>

        {/* Book name */}
        <h2 className="mt-3 text-xl font-bold text-gray-900">
          {readbook.bookName}
        </h2>

        {/* Author */}
        <p className="mt-1 text-sm text-gray-500">
          By{" "}
          <span className="font-semibold text-gray-700">
            {readbook.author}
          </span>
        </p>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-2">
          <span className="text-yellow-500">★</span>
          <span className="font-semibold">{readbook.rating}</span>
          <span className="text-gray-400">/ 5</span>
        </div>

        {/* Pages & Published */}
        <div className="mt-3 flex gap-4 text-sm text-gray-500">
          <span>{readbook.totalPages} pages</span>
          <span>{readbook.yearOfPublishing}</span>
        </div>

        {/* Publisher */}
        <p className="mt-2 text-sm text-gray-500">
          Publisher:{" "}
          <span className="font-medium text-gray-700">
            {readbook.publisher}
          </span>
        </p>

        {/* Button */}
        <button className=" mt-5 rounded-lg bg-green-600 px-4 py-2 font-semibold text-white transition hover:bg-green-700">
          Read Again
        </button>
      </div>
    </div>
  ))}
</div>
</section>
	);

};

export default ListedBooks;