import React from "react";

const DefaultLayout = ({ title = "Flights", children }) => {
  return (
    <main>
      <head>
        <title>{title}</title>
        <script src='https://cdn.tailwindcss.com'></script>
      </head>

      <body className='w-full h-screen border-2 py-4 px-8 flex justify-center'>
        <nav className='flex gap-x-2 mb-4'>
          <h1 className='font-bold text-3xl text-[#09507C] mb-4'>Flightz!</h1>
          <a
            href='/flights/new'
            className='ml-auto border-2 rounded-lg p-2 hover:bg-[#09507C] hover:text-gray-300'
          >
            Create New Flight
          </a>
        </nav>
        <hr className='mb-4 border-gray-500' />
        {children}
      </body>
    </main>
  );
};

export default DefaultLayout;
