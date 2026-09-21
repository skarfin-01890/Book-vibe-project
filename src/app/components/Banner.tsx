import Image from 'next/image';
import React from 'react';
import BannerImg from '@/assests/hero_img.jpg'

const Banner = () => {
	return (

<div className="container mx-auto mt-14 flex min-h-[500px] items-center justify-between gap-10 rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 px-10 py-12 shadow-sm">

  {/* Left Content */}
  <div className="">
    <p className="mb-4 text-sm font-semibold uppercase tracking-[4px] text-green-600">
      Discover Your Next Read
    </p>

    <h1 className="text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
      Books to freshen up
      <br />
      <span className="text-green-600">your bookshelf</span>
    </h1>

    <p className="mt-6 max-w-md text-base leading-7 text-gray-500">
      Explore amazing books, discover new stories, and find your next
      favorite read for your bookshelf.
    </p>

    <button className="mt-8 rounded-xl bg-green-600 px-7 py-3 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-xl">
      View The List →
    </button>
  </div>

  {/* Right Image */}
  <div className="relative hidden md:block">
    <div className="absolute -inset-4 -z-10 rounded-full bg-green-200/40 blur-3xl"></div>

    <Image
      alt="Books"
      src={BannerImg}
      width={400}
      height={400}
      className="rounded-3xl object-cover shadow-2xl"
    />
  </div>

</div>
	);
};

export default Banner;