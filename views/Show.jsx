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

  const arrivalDate = new Date().toISOString().slice(0, 16);
  const destinations = ["AUS", "DAL", "LAX", "SAN", "SEA"];

  return (
    <DefaultLayout>
      <div className='flex gap-12'>
        <div className='w-[600px] rounded-md'>
          {flight ? (
            <div
              key={flight._id}
              className='flex flex-col gap-y-2 mb-4 pb-6 border-b border-gray-300'
            >
              <div className='grid grid-cols-2'>
                <section>
                  <h2 className='font-bold'>Airport</h2>
                  {flight.airport}
                </section>

                <section>
                  <h2 className='font-bold'>Airline</h2>
                  {flight.airline}
                </section>
              </div>
              <div className='grid grid-cols-2'>
                <section>
                  <h2 className='font-bold'>Flight Number</h2>
                  {flight.flightNo}
                </section>

                <section className='mb-4'>
                  <h2 className='font-bold'>Departure</h2>
                  {flight.departs.toUTCString()}
                </section>
              </div>

              <form
                action={`/api/flights/${flight._id}?_method=PUT`}
                method='POST'
              >
                <section className='flex flex-col mb-8'>
                  <label className='font-bold'>Destinations</label>
                  <select
                    name='airport'
                    className='cursor-pointer p-3 rounded-lg'
                  >
                    <option value='Select Airport' selected>
                      Select Desination...
                    </option>
                    {destinations.map((destination) => (
                      <option
                        key={destination}
                        value={destination}
                        className='cursor-pointer'
                      >
                        {destination}
                      </option>
                    ))}
                  </select>
                </section>

                <section className='flex flex-col mb-8'>
                  <label className='font-bold'>Arrival Date</label>
                  <input
                    type='datetime-local'
                    name='arrival'
                    defaultValue={arrivalDate}
                    required
                    className='border-2 border-gray-300 focus:border-gray-500 rounded-md outline-none p-2 mb-8'
                  />
                </section>

                <input
                  value='Update'
                  className='border-2 border-gray-300 focus:border-gray-500 cursor-pointer outline-none hover:bg-[#09507C] hover:text-white rounded-md p-2 mr-2'
                  type='submit'
                />
                <a href={`/flights/`}>
                  <input
                    type='button'
                    value='Back'
                    className='border-2 border-gray-300 focus:border-gray-500 rounded-md w-fit outline-none py-2 px-4 hover:bg-[#09507C] hover:text-white cursor-pointer'
                  />
                </a>
              </form>
            </div>
          ) : (
            <h2>No Flights Today!</h2>
          )}
        </div>

        <div id='right-side' className="border-l-2 pl-8">
          <h2 className='font-bold'>Current Destinations</h2>
          {flight.destinations.length > 0
            ? flight.destinations.map((desc, idx) => {
                return (
                  <div key={idx}>
                    <p className='flex mb-4'>
                      <section>
                        <span className='font-bold'>Airport: </span>
                        {desc.airport}
                      </section>

                      <span className='font-bold'>Arrival: </span>
                      {desc.arrival.toISOString().slice(0, 16)}
                    </p>
                  </div>
                );
              })
            : flight.destinations.length}
        </div>
      </div>
    </DefaultLayout>
  );
}

module.exports = Show;
