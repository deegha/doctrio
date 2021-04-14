import React,{ useState, createContext } from 'react'

export const AppContext = createContext()

const AppContextProvider = (props) => {
  const [ page, setPage ] = useState(0)
  const [ nextPage, setNextPage ] = useState("")
  
  return (
    <AppContext.Provider value={{ page, setPage, nextPage, setNextPage }}>
      {props.children}
    </AppContext.Provider>

  )
}

export default AppContextProvider
