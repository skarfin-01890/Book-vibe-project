import ReadButton from '@/app/components/ReadButton';
import Wishlist from '@/app/components/Wishlist';
import { Bookstype } from '@/types/books.types';
import Image from 'next/image';
import React from 'react';



interface BooksDetailsProps{
	params:Promise<{
		id:string
	}>
}
const getBooks=async()=>{

const res=await fetch("http://localhost:3000/booksData.json")
const data=await res.json()

return data
}
const page = async({params}:BooksDetailsProps) => {
	const {id}=await params;
	const booksData= await getBooks()
	const book=booksData.find((bookdata:Bookstype)=>bookdata.bookId===Number(id))as Bookstype
	console.log("id:", id);
console.log("book:", book);

	return (
		<div className="container mx-auto mt-12 px-4">
  <div className="grid overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg md:grid-cols-2">

    {/* Book Image */}
    <div className="flex items-center justify-center bg-gray-50 p-10">
      <Image
        src={book.image}
        alt={book.bookName}
        width={300}
        height={420}
        className="rounded-xl object-cover shadow-xl"
      />
    </div>

    {/* Book Details */}
    <div className="flex flex-col justify-center p-8 md:p-12">

      {/* Category */}
      <span className="mb-4 w-fit rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700">
        {book.category}
      </span>

      {/* Book Name */}
      <h1 className="text-4xl font-extrabold text-gray-900">
        {book.bookName}
      </h1>

      {/* Author */}
      <p className="mt-2 text-lg text-gray-500">
        by <span className="font-semibold text-gray-700">{book.author}</span>
      </p>

      {/* Rating */}
      <div className="mt-5 flex items-center gap-2">
        <span className="text-xl text-yellow-500">★</span>
        <span className="font-bold text-gray-800">{book.rating}</span>
        <span className="text-gray-400">/ 5</span>
      </div>

      {/* Review */}
      <p className="mt-6 leading-7 text-gray-600">
        {book.review}
      </p>

      {/* Tags */}
      <div className="mt-6 flex flex-wrap gap-2">
        {book.tags.map((tag: string) => (
          <span
            key={tag}
            className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-600"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Information */}
      <div className="mt-8 grid grid-cols-2 gap-4 border-y border-gray-200 py-6">

        <div>
          <p className="text-sm text-gray-400">Total Pages</p>
          <p className="mt-1 font-bold text-gray-800">
            {book.totalPages}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-400">Published</p>
          <p className="mt-1 font-bold text-gray-800">
            {book.yearOfPublishing}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-400">Publisher</p>
          <p className="mt-1 font-bold text-gray-800">
            {book.publisher}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-400">Book ID</p>
          <p className="mt-1 font-bold text-gray-800">
            #{book.bookId}
          </p>
        </div>

      </div>

      {/* Button */}
	  <div className='flex gap-4'> <ReadButton book={book}></ReadButton>


	  <Wishlist book={book}></Wishlist>
</div>

    </div>
  </div>
</div>
	);
};

export default page;