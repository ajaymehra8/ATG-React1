import { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const StateProvider = ({ children }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
const [show,setShow]=useState(false);
const [showUsers,setShowUsers]=useState(false);
  return (
    <StateContext.Provider value={{ showLogin, setShowLogin, showSignup, setShowSignup,show,setShow,showUsers,setShowUsers }}>
      {children}
    </StateContext.Provider>
  );
};

export const usePageState = () => {
  return useContext(StateContext);
};

export default StateProvider;
