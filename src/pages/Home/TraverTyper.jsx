import { Typewriter } from 'react-simple-typewriter'

const TravelTyper = () => {


   return (
      <div className="text-center text-3xl w-[90%]">
         
         <h1 className='my-8 text-white font-bold'>
        Once a Year, {' '}
        <span className='text-green-500 font-bold font-kanit'>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Go For Travel!', 'Travel New Places!', 'Travel to Refresh Yourself!']}
            loop={10}
            cursor
            cursorStyle='_'
            typeSpeed={90}
            deleteSpeed={50}
            delaySpeed={1500}
            onLoopDone={() => console.log(`Done after 10 loops!`)}
          />
        </span>
      </h1>
      </div>
   );
};

export default TravelTyper;