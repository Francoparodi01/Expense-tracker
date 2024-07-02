import axios from 'axios'

const BASE_URL = "http://localhost:5000/api/v1"

const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) =>{
    return(
        <GlobalContext.Provider>
            {children}
        </GlobalContext.Provider>
    )
}