import React from "react";

const DefaultLayout = ({ title = "Flights", children }) => {
  return (
    <main>
      <head>
        <title>{title}</title>
        <script src='https://cdn.tailwindcss.com'></script>
      </head>

      <body className='h-screen py-4 px-8 flex justify-center'>
        <nav className='w-[70vw] flex gap-x-2 mb-4'>
          <h1 className='font-bold text-3xl text-[#09507C] mb-4'>
            <a href='/'>Flightz!</a>
          </h1>
          <section className="ml-auto flex flex-end items-center">
            <a
              href='/flights/'
              className='ml-auto font-bold p-[0.5em] hover:bg-[#09507C] hover:text-white rounded-lg'
            >
              View Departures
            </a>
            
            <a
              href='/flights/new'
              className='font-bold p-[0.5em] hover:bg-[#09507C] hover:text-white rounded-lg'
            >
              Create New Flight
            </a>
          </section>
        </nav>
        <hr className='mb-4 border-gray-500' />
        {children}
      </body>
    </main>
  );
};

export default DefaultLayout;
