import { discoverValidationDepths } from 'next/dist/server/app-render/instant-validation/instant-validation';
import Image from 'next/image';
import React from 'react';
import BookCard from './BookCard';
const getBooks=async()=>{

const res=await fetch("http://localhost:3000/booksData.json")
const data=await res.json()

return data
}
const Books =async () => {
	const getBooksData= await getBooks()
	return (
		<section className='container mx-auto'>

			<h1 className='items-center font-bold text-5xl flex justify-center mt-26 mb-8'>Books</h1>


			<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
  {getBooksData.map((book) => (<BookCard key={book.bookId} book={book}></BookCard>

  ))}
</div>
		</section>
	);
};

export default Books;