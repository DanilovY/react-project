// import Product from './Product';
// import { Alert } from './Alert';
// import { UserMenu } from './Icon';

// export const App = () => {
//   return (
//     <>
//       <UserMenu />
//       <Alert variant="info">
//         Would you like to browse our recommended products?
//       </Alert>
//       <Alert variant="error" outlined>
//         There was an error during your last transaction
//       </Alert>
//       <Alert variant="success" elevated>
//         Payment received, thank you for your purchase
//       </Alert>
//       <Alert variant="warning" outlined elevated>
//         Please update your profile contact information
//       </Alert>
//     </>
//   );
// };

// export const App = () => {
//   const handleClick = evt => {
//     console.log(evt);
//   };

//   return (
//     <>
//       <button onClick={handleClick}> First button </button>
//       <button onClick={evt => console.log(evt)}>Second button </button>
//     </>
//   );
// };

// const CustomButton = ({ message, children }) => {
//   return <button onClick={() => alert(message)}>{children}</button>;
// };

// export const  App = () => {
// 	 let clicks = 0 ;

//   const  handleClick = () => {
//     clicks = clicks + 1 ;
//   };

// 	return  < button  onClick = {handleClick} > Current: {clicks} </ button >
// };

// import { useState } from 'react';

// export const App = () => {
//   // let clicks = 0;

//   const [clicks, setClicks] = useState(0);

//   const handleClick = () => {
//     // clicks = clicks + 1;
//     setClicks(clicks + 1);
//   };

//   return <button onClick={handleClick}> Current: {clicks} </button>;
// };

// export function App() {
//   const [clicks, setClicks] = useState(0);
//   const [isOpen, setIsOpen] = useState(false);

//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <button onClick={handleClick}>Current: {clicks}</button>
//       <button onClick={handleToggle}>{isOpen ? 'Hide' : 'Show'}</button>
//       {isOpen && <p>Now you can see me!</p>}
//     </>
//   );
// }

// const ClickCounter = () => {
//   const [clicks, setClicks] = useState(0);

//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   return <button onClick={handleClick}> Current: {clicks} </button>;
// };

// export const App = () => {
//   return (
//     <>
//       <ClickCounter />
//       <ClickCounter />
//     </>
//   );
// };

// const ClickCounter = ({ value, onUpdate }) => {
//   return <button onClick={onUpdate}> Current: {value} </button>;
// };

// export const App = () => {
//   const [clicks, setClicks] = useState(0);

//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   return (
//     <>
//       <ClickCounter value={clicks} onUpdate={handleClick} />
//       <ClickCounter value={clicks} onUpdate={handleClick} />
//     </>
//   );
// };

// export const App = () => {
//   const [values, setValues] = useState({
//     x: 0,
//     y: 0,
//   });

//   const updateX = () => {
//     setValues({
//       ...values,
//       x: values.x + 1,
//     });
//   };

//   const updateY = () => {
//     setValues({
//       ...values,
//       y: values.y + 1,
//     });
//   };

//   return (
//     <div>
//       <p>
//         x:{values.x}, y:{values.y}
//       </p>

//       <button onClick={updateX}> Update x </button>
//       <button onClick={updateY}> Update y </button>
//     </div>
//   );
// };

import { useState, useEffect } from 'react';

// export const App = () => {
//   const [clicks, setClicks] = useState(0);

//   // Оголошуємо ефект
//   useEffect(() => {
//     document.title = `You clicked ${clicks} times`;
//   });

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// };

// export const App = () => {
//   const [clicks, setClicks] = useState(0);

//   useEffect(() => {
//     console.log('You can see me only once!');
//   }, []);

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// };

// export const App = () => {
//   useEffect(() => {
//     setInterval(() => {
//       console.log(`Interval - ${Date.now()} `);
//     }, 2000);
//   }, []);

//   return <div>App</div>;
// };

// const Modal = () => {
//   useEffect(() => {
//     const int = setInterval(() => {
//       console.log(`Interval - ${Date.now()} `);
//     }, 2000);
//     return () => {
//       clearInterval(int);
//     };
//   }, []);

//   return <div>Modal</div>;
// };

// export const App = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? 'Close' : 'Open'}
//       </button>
//       {isOpen && <Modal />}
//     </div>
//   );
// };

// export const App = () => {
//   useEffect(() => {
//     console.log('Effect');

//     return () => {
//       console.log('Clean up');
//     };
//   });

//   return <div>App</div>;
// };

// const Modal = () => {
//   useEffect(() => {
//     // Зберігаємо ідентифікатор інтервалу в змінну
//     const intervalId = setInterval(() => {
//       console.log(`Interval - ${Date.now()}`);
//     }, 2000);

//     return () => {
//       // Очищаємо інтервал за його ідентифікатором
//       clearInterval(intervalId);
//     };
//   }, []);

//   return <div>Modal</div>;
// };

// export const App = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? 'Close' : 'Open'}
//       </button>
//       {isOpen && <Modal />}
//     </div>
//   );
// };

// export const App = () => {
//   const [clicks, setClicks] = useState(0);

//   // ❌ Эффект записан с ошибкой!
//   useEffect(() => {
//     console.log('Clicks updated: ', clicks);
//   }, [clicks]);

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// };

// export const App = () => {
//   const [clicks, setClicks] = useState(0);

//   useEffect(() => {
//     console.log('You can see me only once!');
//   }, []);

//   useEffect(() => {
//     console.log('Clicks updated: ', clicks);
//   }, [clicks]);

//   useEffect(() => {
//     document.title = `You clicked ${clicks} times`;
//   });

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// };

// export const App = () => {
//   const [first, setFirst] = useState(0);
//   const [second, setSecond] = useState(0);

//   useEffect(() => {
//     console.log('First updated: ', first);
//   }, [first]);

//   useEffect(() => {
//     console.log('Second updated: ', second);
//   }, [second]);

//   useEffect(() => {
//     console.log('First or second updated: ', first + second);
//   }, [first, second]);

//   return (
//     <>
//       <button onClick={() => setFirst(first + 1)}> First : {first}</button>
//       <button onClick={() => setSecond(second + 1)}> Second : {second}</button>
//     </>
//   );
// };

export const App = () => {
  const [clicks, setClicks] = useState(() => {
    const savedClicks = window.localStorage.getItem('saved-clicks');
    if (savedClicks !== null) {
      return Number(savedClicks);
    }
    return 0;
  });

  useEffect(() => {
    window.localStorage.setItem('saved-clicks', clicks);
  }, [clicks]);

  return (
    <div>
      <button onClick={() => setClicks(clicks + 1)}>
        You clicked {clicks} times
      </button>
      <button onClick={() => setClicks(0)}>Reset </button>
    </div>
  );
};
