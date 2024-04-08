import React from 'react'


const AppConext= React.createContext()
export const useAppContext=()=> React.useContext(AppConext)

export const AppContextProvier=({children})=> {
    const[appState, setAppState]= React.useState({
        data:[],
        addtocart:[]
       
    })
    const updateState=(newState)=>{
        setAppState((prevState)=>({
                ...prevState,
                ...newState,
            }))
        }
    
    
return(
    <AppConext.Provider value={{appState,updateState}}>
    {children}
    </AppConext.Provider>
)
}
  

