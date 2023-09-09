const React = require("react");
const Landing = require("./Landing");

const { default: DefaultLayout } = require("./layout/layout");

function Flights(allFlights) {
  const flights = allFlights.allFlights;

  const logos = {
    united:
      "https://theoagroup.org/wp-content/uploads/2021/12/united-airlines-logo_2.png",

    american:
      "https://s202.q4cdn.com/986123435/files/doc_downloads/logos/american-airlines/aa_aa__vrt_rgb_grd_pos.png",

    southwest:
      "https://logos-world.net/wp-content/uploads/2020/10/Southwest-Airlines-Emblem.png",
  };

  // Formatting of Flight Airline display
  const capitalize = (flight) => {
    const firstLetter = flight.airline.charAt(0);
    const firstLetterCap = firstLetter.toUpperCase();
    const remainingLetters = flight.airline.toLowerCase().slice(1);
    flight.airline = firstLetterCap + remainingLetters;

    return flight;
  };

  return (
    <DefaultLayout>
      <div className='w-[600px] rounded-md'>
        <h2 className='font-bold text-2xl mb-4'>
          {flights ? "Departures" : ""}
        </h2>

        {flights ? (
          flights.map((flight) => {
            flight = capitalize(flight);

            return (
              <div
                key={flight._id}
                className='flex flex-col  gap-y-2 mb-4 pb-6 border-b border-gray-300'
              >
                <div className='grid grid-cols-2'>
                  <section>
                    <h2 className='font-bold '>Airport</h2>
                    {flight.airport}
                  </section>

                  <section>
                    <h2 className='font-bold '>Airline</h2>
                    <span className='flex items-center gap-2'>
                      {flight.airline}
                      <img
                        src={logos[flight.airline.toLowerCase()]}
                        alt=''
                        className='absolute h-16 ml-[10%]'
                      />
                    </span>
                  </section>
                </div>

                <div className='grid grid-cols-2'>
                  <section>
                    <h2 className='font-bold '>Flight Number</h2>
                    {flight.flightNo}
                  </section>

                  <section className='mb-8'>
                    <h2 className='font-bold '>Departure</h2>
                    {flight.departs.toUTCString()}
                  </section>
                </div>

                <section>
                  <a href={`/flights/${flight._id}`}>
                    <input
                      type='button'
                      value='View Details'
                      className='p-[0.5em] border-2 border-gray-300 focus:border-gray-500 rounded-md w-fit outline-none hover:bg-[#09507C] hover:text-white cursor-pointer'
                    />
                  </a>
                </section>
              </div>
            );
          })
        ) : (
          <Landing />
        )}
      </div>
    </DefaultLayout>
  );
}

module.exports = Flights;
