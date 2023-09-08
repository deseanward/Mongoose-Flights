const React = require("react");
const { default: DefaultLayout } = require("./layout/layout");

function New({ airlineErr = null, flightErr = null }) {
  const aError = airlineErr;
  const fError = flightErr;

  // Default flight Booking Date
  const bookingDate = new Date().toISOString().slice(0, 16);
  const airports = ["AUS", "DAL", "LAX", "SAN", "SEA"];
  return (
    <DefaultLayout>
      <h2 className='font-bold text-2xl'>Create Flight</h2>
      <form className='w-[600px]' action='/api/flights' method='post'>
        <div className='flex flex-col gap-y-2'>
          <label>Airport</label>
          <select
            name='airport'
            className='cursor-pointer p-3 text-xl rounded-lg'
          >
            <option value='Select Airport'>Select Airport...</option>
            {airports.map((airport) => (
              <option
                key={airport}
                value={airport}
                className='cursor-pointer'
                selected={airport === "SAN"}
              >
                {airport}
              </option>
            ))}
          </select>
          <label>Airline</label>
          <input
            type='text'
            name='airline'
            required
            className='border-2 border-gray-300 focus:border-gray-500 rounded-md outline-none text-xl p-2'
          />
          <span
            className={
              aError === null ? "hidden" : "flex text-red-500 text-md mb-4"
            }
          >
            {aError}
          </span>

          <label>Flight Number</label>
          <input
            type='text'
            name='flightNo'
            required
            className='border-2 border-gray-300 focus:border-gray-500 rounded-md outline-none text-xl p-2'
          />
          <span
            className={
              fError === null ? "hidden" : "flex text-red-500 text-md mb-4"
            }
          >
            {fError}
          </span>

          <label>Booking Date</label>
          <input
            type='datetime-local'
            name='departs'
            defaultValue={bookingDate}
            required
            className='border-2 border-gray-300 focus:border-gray-500 rounded-md outline-none text-xl p-2 mb-8'
          />

          <input
            type='submit'
            value='Create Flight'
            className='border-2 border-gray-300 focus:border-gray-500 rounded-md w-fit outline-none text-xl p-2 hover:bg-[#09507C] hover:text-white cursor-pointer'
          />
        </div>
      </form>
    </DefaultLayout>
  );
}

module.exports = New;
