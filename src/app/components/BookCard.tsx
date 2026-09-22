import Image from 'next/image';
import React from 'react';

const BookCard = ({book}) => {
	return (

		 <div
      key={book.bookId}
      className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      {/* Image */}
      <div className="relative flex h-72 items-center justify-center overflow-hidden bg-gray-100 p-6">
        <Image
          src={book.image}
          alt={book.bookName}
          width={200}
          height={260}
          className="h-full w-auto rounded-lg object-cover shadow-lg transition duration-500 group-hover:scale-105"
        />

        {/* Category */}
        <span className="absolute right-4 top-4 rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white">
          {book.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-medium text-gray-500">
            {book.yearOfPublishing}
          </span>

          <div className="flex items-center gap-1">
            <span className="text-yellow-500">★</span>
            <span className="font-semibold text-gray-700">
              {book.rating}
            </span>
          </div>
        </div>

        <h2 className="line-clamp-1 text-xl font-bold text-gray-900">
          {book.bookName}
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          by {book.author}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Book information */}
        <div className="my-5 grid grid-cols-2 gap-3 border-y border-gray-100 py-4">
          <div>
            <p className="text-xs text-gray-400">Pages</p>
            <p className="font-semibold text-gray-800">
              {book.totalPages}
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-400">Publisher</p>
            <p className="line-clamp-1 font-semibold text-gray-800">
              {book.publisher}
            </p>
          </div>
        </div>

        {/* Button */}
        <button className="w-full rounded-xl bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700">
          View Details →
        </button>
      </div>
    </div>
	);
};

export default BookCard;