const React = require("react");
const { default: DefaultLayout } = require("./layout/layout");

function Show({ flight }) {
  // const flights = allFlights.allFlights;

  // Formatting of Flight Airline display
  const capitalize = (flight) => {
    const firstLetter = flight.airline.charAt(0);
    const firstLetterCap = firstLetter.toUpperCase();
    const remainingLetters = flight.airline.toLowerCase().slice(1);
    flight.airline = firstLetterCap + remainingLetters;

    return flight;
  };

  flight = capitalize(flight);

  return (
    <DefaultLayout>
      <div className='w-[600px] rounded-md'>
        {flight ? (
          <div
            key={flight._id}
            className='flex flex-col text-xl gap-y-2 mb-4 pb-6 border-b border-gray-300'
          >
            <div className='grid grid-cols-2'>
              <section>
                <h2 className='font-bold text-xl'>Airport</h2>
                {flight.airport}
              </section>

              <section>
                <h2 className='font-bold text-xl'>Airline</h2>
                {flight.airline}
              </section>
            </div>

            <div className='grid grid-cols-2'>
              <section>
                <h2 className='font-bold text-xl'>Flight Number</h2>
                {flight.flightNo}
              </section>

              <section className='mb-8'>
                <h2 className='font-bold text-xl'>Departure</h2>
                {flight.departs.toUTCString()}
              </section>
            </div>

            <section>
              <a href={`/flights/`}>
                <input
                  type='button'
                  value='Back'
                  className='border-2 border-gray-300 focus:border-gray-500 rounded-md w-fit outline-none text-xl py-2 px-4 hover:bg-[#09507C] hover:text-white cursor-pointer'
                />
              </a>
            </section>
          </div>
        ) : (
          <h2>No Flights Today!</h2>
        )}
      </div>
    </DefaultLayout>
  );
}

module.exports = Show;
