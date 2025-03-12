import { createContext,useContext } from "react";

 const DarkModeContext=createContext();
 export const useTheme=()=>useContext(DarkModeContext);
 export default DarkModeContext;