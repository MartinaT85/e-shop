import { PropsWithChildren, createContext, useEffect, useReducer } from "react";
import { User } from "firebase/auth";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase";

type userInitialState = {
  currentUser: null | User
}

export const INITIAL_STATE: userInitialState = {
  currentUser: null,
};


export type UserContextType = {
  currentUser: null | User
  setCurrentUser: (user: User) => void
}
 


export const UserContext = createContext<UserContextType>({
  currentUser: null,
  setCurrentUser: () => {}
});

const userReducer = (state = INITIAL_STATE, action: {type: string, payload: User}) => {
  console.log("dispached");
  console.log("STATE", state);
  console.log("ACTION", action);
  const { type, payload } = action;
  
  if(type === "SET_CURRENT_USER") {
    return {
      ...state,
      currentUser: payload
    }
  }
      
  return state
};



export const UserProvider = ({ children }: PropsWithChildren) => {
  // const [currentUser, setCurrentUser] = useState(null);
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
  console.log("CURRENT STATE", state);
  const { currentUser } = state;
  const setCurrentUser = (user: User | null) => {
    dispatch({ type: "SET_CURRENT_USER", payload: user! });
  };

  const value = { currentUser, setCurrentUser };
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
