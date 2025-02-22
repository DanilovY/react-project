// import { createContext, use } from 'react';

// export const UserContext = createContext();

// export const useUser = () => use(UserContext);

import { createContext, useContext } from 'react';

export const UserContext = createContext(null);

export const useUser = () => useContext(UserContext);
