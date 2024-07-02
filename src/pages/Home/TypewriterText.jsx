// import { useTypewriter } from 'react-simple-typewriter'
import { Typewriter } from 'react-simple-typewriter'

const TypewriterText = () => {


   return (
      <div className="text-center text-3xl">
         
         <h1 className='my-8'>
        Life is very Short. {' '}
        <span className='text-green-500 font-bold font-kanit'>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['The world is wide!', 'Collect Moments!', 'Sunsets are always Free!', 'Go for a Trip!']}
            loop={10}
            cursor
            cursorStyle='_'
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
            onLoopDone={() => console.log(`Done after 10 loops!`)}
          />
        </span>
      </h1>
      </div>
   );
};

export default TypewriterText;