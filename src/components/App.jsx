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

// import { useState, useEffect } from 'react';

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

// export const App = () => {
//   const [clicks, setClicks] = useState(() => {
//     const savedClicks = window.localStorage.getItem('saved-clicks');
//     if (savedClicks !== null) {
//       return Number(savedClicks);
//     }
//     return 0;
//   });

//   useEffect(() => {
//     window.localStorage.setItem('saved-clicks', clicks);
//   }, [clicks]);

//   return (
//     <div>
//       <button onClick={() => setClicks(clicks + 1)}>
//         You clicked {clicks} times
//       </button>
//       <button onClick={() => setClicks(0)}>Reset </button>
//     </div>
//   );
// };

// export const App = () => {
//   const handleSubmit = evt => {
//     evt.preventDefault();
//     console.log(evt);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="login" />
//       <input type="password" name="password" />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// const LoginForm = ({ onLogin }) => {
//   const handleSubmit = evt => {
//     evt.preventDefault();

//     const form = evt.target;
//     const { login, password } = form.elements;

//     // Посилання на DOM-елементи
//     console.log(login, password);

//     // Вызываем пропс onLogin
//     onLogin({
//       login: login.value,
//       password: password.value,
//     });

//     // Значення полів
//     console.log(login.value, password.value);

//     // Скидаємо значення полів після відправки
//     form.reset();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="login" />
//       <input type="password" name="password" />
//       <button type="submit">Login</button>
//     </form>
//   );
// };
// export const App = () => {
//   // Колбек-функція для обробки сабміту форми
//   const handleLogin = userData => {
//     // Виконуємо необхідні операції з даними
//     console.log(userData);
//   };

//   return (
//     <div>
//       <h1>Please login to your account!</h1>
//       {/* Передаємо колбек як пропс форми */}
//       <LoginForm onLogin={handleLogin} />
//     </div>
//   );
// };
// import { useState } from 'react';

// export const App = () => {
//   const [inputValue, setInputValue] = useState('');

//   const handleChange = evt => {
//     setInputValue(evt.target.value);
//   };

//   return (
//     <div>
//       <input type="text" value={inputValue} onChange={handleChange} />
//       <p>{inputValue}</p>
//     </div>
//   );
// };

// const LangSwitcher = ({ value, onSelect }) => {
//   const selectId = useId();

//   return (
//     <div>
//       <label htmlFor={selectId}>Choose language</label>
//       <select
//         id={selectId}
//         value={value}
//         onChange={evt => onSelect(console.log(evt.target.value))}
//       >
//         <option value="uk">Ukrainian</option>
//         <option value="en">English</option>
//         <option value="pl">Polish</option>
//       </select>
//     </div>
//   );
// };

// export const App = () => {
//   const [lang, setLang] = useState('uk');

//   return (
//     <>
//       <p>Selected language: {lang}</p>
//       <LangSwitcher value={lang} onSelect={setLang} />
//     </>
//   );
// };

// export const App = () => {
//   const [values, setValues] = useState({
//     login: '',
//     password: '',
//   });

//   const handleChange = evt => {
//     setValues({
//       ...values,
//       [evt.target.name]: evt.target.value,
//     });
//   };

//   const handleSumit = evt => {
//     evt.preventDefault();

//     console.log(values);

//     setValues({
//       login: '',
//       password: '',
//     });
//   };

//   return (
//     <form onSubmit={handleSumit}>
//       <input
//         type="text"
//         name="login"
//         value={values.login}
//         onChange={handleChange}
//       />
//       <input
//         type="password"
//         name="password"
//         value={values.password}
//         onChange={handleChange}
//       />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

//---------------------------------------VSPOMNI----------------------------------//
// import { useId } from 'react';
// import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';
// import { ErrorMessage } from 'formik';

// const FeedbackSchema = Yup.object().shape({
//   username: Yup.string()
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('Required'),
//   email: Yup.string().email('Must be a valid email!').required('Required'),
//   message: Yup.string()
//     .min(3, 'Too short')
//     .max(256, 'Too long')
//     .required('Required'),
//   level: Yup.string().oneOf(['good', 'neutral', 'bad']).required('Required'),
// });

// const initialValues = {
//   username: '',
//   email: '',
//   message: '',
//   level: 'good',
// };

// export const App = () => {
//   const nameFieldId = useId();
//   const emailFieldId = useId();
//   const msgFieldId = useId();
//   const levelFieldId = useId();

//   const handleSubmit = (values, actions) => {
//     console.log(values);
//     actions.resetForm();
//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       onSubmit={handleSubmit}
//       validationSchema={FeedbackSchema}
//     >
//       <Form>
//         <div>
//           <label htmlFor={nameFieldId}>Username</label>
//           <Field type="text" name="username" id={nameFieldId} />
//           <ErrorMessage name="username" component="span" />
//         </div>

//         <div>
//           <label htmlFor={emailFieldId}>Email</label>
//           <Field type="email" name="email" id={emailFieldId} />
//           <ErrorMessage name="email" component="span" />
//         </div>

//         <div>
//           <label htmlFor={msgFieldId}>Message</label>
//           <Field as="textarea" name="message" id={msgFieldId} rows="5" />
//           <ErrorMessage name="message" component="span" />
//         </div>

//         <div>
//           <label htmlFor={levelFieldId}>Service satisfaction level</label>
//           <Field as="select" name="level" id={levelFieldId}>
//             <option value="good">Good</option>
//             <option value="neutral">Neutral</option>
//             <option value="bad">Bad</option>
//           </Field>
//           <ErrorMessage name="level" component="span" />
//         </div>

//         <button type="submit">Submit</button>
//       </Form>
//     </Formik>
//   );
// };
//______________-___________________________________________________________________///

// import axios from 'axios';
// import { useEffect, useState } from 'react';

// const ArticlesList = ({ item }) => {
//   return (
//     <ul>
//       {item.map(({ objectID, url, title }) => (
//         <li key={objectID}>
//           <a href={url} target="_blank" rel="noreferrer noopener">
//             {title}
//           </a>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export const App = () => {
//   // 1. Объявляем состояние
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     async function fetchArticles() {
//       try {
//         // 1. Устанавливаем индикатор в true перед запросом
//         setLoading(true);
//         const respons = await axios.get(
//           'https://hn.algolia.com/api/v1/search?query=react'
//         );
//         // 2. Записываем данные в состояние
//         setArticles(respons.data.hits);
//       } catch (error) {
//         // Здесь будем обрабатывать ошибку
//         setError(true);
//       } finally {
//         // 2. Устанавливаем индикатор в false после запроса
//         setLoading(false);
//       }
//     }
//     fetchArticles();
//   }, []);

//   return (
//     <div>
//       <h1> Latest articles </h1>
//       {loading && <p> Loading data, please wait... </p>}
//       {error && (
//         <p>Whoops, something went wrong! Please try reloading this page!</p>
//       )}
//       {articles.length > 0 && <ArticlesList item={articles} />}
//     </div>
//   );
// };
//--------------------------------------------------------------------//
// import { fetchArticlesWithTopic } from '../articles-api.js';
// import { useEffect, useState } from 'react';
// import { SearchForm } from './SearchForm.jsx';

// const ArticlesList = ({ items }) => {
//   return (
//     <ul>
//       {items.map(({ objectID, url, title }) => (
//         <li key={objectID}>
//           <a href={url} target="_blank" rel="noreferrer noopener">
//             {title}
//           </a>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export const App = () => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   // useEffect(() => {
//   //   async function fetchArticles() {
//   //     try {
//   //       setLoading(true);
//   //       setError(false);
//   //       // 2. Використовуємо HTTP-функцію
//   //       const data = await fetchArticlesWithTopic('react');
//   //       setArticles(data);
//   //     } catch (error) {
//   //       setError(true);
//   //     } finally {
//   //       setLoading(false);
//   //     }
//   //   }

//   //   fetchArticles();
//   // }, []);
//   const handleSearch = async topic => {
//     try {
//       setArticles([]);
//       setError(false);
//       setLoading(true);
//       const data = await fetchArticlesWithTopic(topic);
//       setArticles(data);
//     } catch (error) {
//       setError(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <SearchForm onSearch={handleSearch} />
//       {loading && <p>Loading data, please wait...</p>}
//       {error && (
//         <p>Whoops, something went wrong! Please try reloading this page!</p>
//       )}
//       {articles.length > 0 && <ArticlesList items={articles} />}
//     </div>
//   );
// };
//------------------------------------------------------------//
// import { useState, useRef, useEffect } from 'react';

// export const App = () => {
//   const [value, setValue] = useState(0);
//   const btnRef = useRef();

//   // Буде undefined на першому рендері
//   // і посиланням на DOM-елемент всі наступні
//   console.log('App: ', btnRef.current);

//   useEffect(() => {
//     // Ефект виконується після монтування,
//     // тому завжди буде посиланням на DOM-елемент
//     console.log('useEffect: ', btnRef.current);
//   });

//   const handleClick = () => {
//     // Кліки будуть після монтування,
//     // тому завжди буде посиланням на DOM-елемент
//     console.log('handleClick: ', btnRef.current);
//   };

//   return (
//     <>
//       <button onClick={() => setValue(value + 1)}>
//         Update value to trigger re-render
//       </button>
//       <button ref={btnRef} onClick={handleClick}>
//         Button with ref
//       </button>
//     </>
//   );
// };

// import { useRef, useEffect, useState } from 'react';

// const Player = ({ source }) => {
//   const playerRef = useRef(); // Реф для видео
//   const [time, setTime] = useState(0); // Состояние для времени

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (playerRef.current) {
//         setTime(playerRef.current.currentTime); // Обновляем текущее время
//       }
//     }, 1000); // Каждую секунду

//     return () => clearInterval(interval); // Очищаем интервал при размонтировании
//   }, []);

//   const play = () => playerRef.current.play();
//   const pause = () => playerRef.current.pause();

//   return (
//     <div>
//       <video ref={playerRef} src={source} width="400" controls>
//         Sorry, your browser does not support embedded videos.
//       </video>
//       <p>Текущее время: {time.toFixed(0)} сек.</p> {/* Отображаем время */}
//       <div>
//         <button onClick={play}>Play</button>
//         <button onClick={pause}>Pause</button>
//       </div>
//     </div>
//   );
// };

// export const App = () => {
//   return <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4" />;
// };
//______________________________________context_________________________________//
import { UserMenu } from './UserMenu';

export const App = () => {
  return (
    <div>
      <h1> Context example </h1>
      <UserMenu />
    </div>
  );
};
