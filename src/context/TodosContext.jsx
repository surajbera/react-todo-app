import { createContext } from 'react'

export const TodosContext = createContext()

export const TodosProvider = ({ children }) => {
  return <TodosContext.Provider value={5}>{children}</TodosContext.Provider>
}
