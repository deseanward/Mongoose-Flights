const React = require("react");
const { default: DefaultLayout } = require("./layout/layout");

const Landing = () => {
  return (
    <DefaultLayout>
      <div className='w-full h-[50vh] flex flex-col justify-center items-center gap-6'>
        <h1 className='font-bold text-5xl'>
          WELCOME TO <span className='text-[#09507C]'>FLIGHTZ!</span>
        </h1>
        <p className='font-bold text-2xl'>
          <a
            href='/flights'
            className='p-4 hover:bg-[#09507C] hover:text-white rounded-lg'
          >
            ENTER
          </a>
        </p>
      </div>
    </DefaultLayout>
  );
};

module.exports = Landing;
