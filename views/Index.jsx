const React = require("react");
const { default: DefaultLayout } = require("./layout/layout");

function Flights(allFlights) {
  const flights = allFlights.allFlights;

  const capitalize = (flight) => {
    const firstLetter = flight.airline.charAt(0);
    const firstLetterCap = firstLetter.toUpperCase();
    const remainingLetters = flight.airline.slice(1);
    flight.airline = firstLetterCap + remainingLetters;

    return flight;
  };

  return (
    <DefaultLayout>
      <div className="w-[600px] border-2 border-gray-300 p-4 rounded-md">
        {flights ? (
          flights.map((flight) => {
            flight = capitalize(flight);

            return (
              <div key={flight._id} className='flex flex-col gap-y-2'>
                <section>
                  <h2 className='font-bold text-xl'>Airline</h2>
                  {flight.airline}
                </section>

                <section>
                  <h2 className='font-bold text-xl'>Flight Number</h2>
                  {flight.flightNo}
                </section>

                <section>
                  <h2 className='font-bold text-xl'>Departure</h2>
                  {flight.departs.toISOString().slice(0, 16)}
                </section>
                
              </div>
            );
          })
        ) : (
          <h2>No Flights Today!</h2>
        )}
      </div>
    </DefaultLayout>
  );
}

module.exports = Flights;
