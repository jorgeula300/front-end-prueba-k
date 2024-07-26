import { useNavigate } from 'react-router-dom'
import React, { useContext, useState } from 'react'
import axios from 'axios'

const userContext = React.createContext()
const authLoginContext = React.createContext()
const searchContext = React.createContext()
const searchDataContext = React.createContext()
const loadingContext = React.createContext()
const errorContext = React.createContext()
const dataContext = React.createContext()
const fetchDataContext = React.createContext()
const istLoginContext = React.createContext()
const logoutContext = React.createContext()
const registerFetch = React.createContext()
const filterContext = React.createContext()
const filterDataContext = React.createContext()
const modalAggEmployeeContext = React.createContext()
const setModalAggEmployeeContext = React.createContext()
const postDataContext = React.createContext()



export const useUser = () => useContext(userContext)
export const useSearch = () => useContext(searchContext)
export const useSearchData = () => useContext(searchDataContext)
export const useLoading = () => useContext(loadingContext)
export const useError = () => useContext(errorContext)
export const useData = () => useContext(dataContext)
export const useFetchData = () => useContext(fetchDataContext)
export const useAuthLogin = () => useContext(authLoginContext)
export const useIstLogin = () => useContext(istLoginContext)
export const useLogout = () => useContext(logoutContext)
export const useRegisterAuth = () => useContext(registerFetch)
export const useFilter = () => useContext(filterContext)
export const useSetFilterData = () => useContext(filterDataContext)
export const useModalAggEmployee = () => useContext(modalAggEmployeeContext)
export const useSetModalAggEmployee = () => useContext(setModalAggEmployeeContext)
export const usePostData = () => useContext(postDataContext)

export function UseProvider({ children }) {
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)
  const [istLogin, setIstLoged] = useState(false)
  const [filter, setFilter] = useState(false)
  const [modal, setModal] = useState(false)
  const token = localStorage.getItem('tokenUser')
  const navigate = useNavigate()


  const loginAuth = async (url, data) => {
    try {
      const response = await axios.post(url, data)
      localStorage.setItem('tokenUser', response.data.token)
      localStorage.setItem('userPageUsers', JSON.stringify(response.data.user))
      setIstLoged(true)
      navigate('/')

    } catch (error) {
      setError(error)
    }
  }

  const registerAuth = async (url, data) => {
    try {
      const response = await axios.post(url, data, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      navigate('/login')
      console.log(response)
    } catch (error) {
      setError(error)
    }
  }

  const fetchData = async (url) => {
    try {
      const response = await axios.get(url, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      setData(response.data)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }


  const postData = async (url, data) => {
    try {
      const response = await axios.post(url, data, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      console.log(response)
      setData([...data, response.data])
    } catch (error) {
      setError(error)
    }
  }



  const searchHandler = (dataInput) => {
    setSearch(dataInput)
  }





  const logout = () => {
    localStorage.removeItem('tokenUser')
    localStorage.removeItem('userPageUsers')
    setIstLoged(false)
  }



  return (
    <authLoginContext.Provider value={loginAuth}>
      <registerFetch.Provider value={registerAuth}>
        <istLoginContext.Provider value={istLogin}>
          <logoutContext.Provider value={logout}>
            <fetchDataContext.Provider value={fetchData}>
              <postDataContext.Provider value={postData}>
                <searchContext.Provider value={searchHandler}>
                  <searchDataContext.Provider value={search}>
                    <loadingContext.Provider value={loading}>
                      <errorContext.Provider value={error}>
                        <filterDataContext.Provider value={setFilter}>
                          <filterContext.Provider value={filter}>
                            <dataContext.Provider value={data}>
                              <setModalAggEmployeeContext.Provider value={setModal}>
                                <modalAggEmployeeContext.Provider value={modal}>
                                  {children}
                                </modalAggEmployeeContext.Provider>
                              </setModalAggEmployeeContext.Provider>
                            </dataContext.Provider>
                          </filterContext.Provider>
                        </filterDataContext.Provider>
                      </errorContext.Provider>
                    </loadingContext.Provider>
                  </searchDataContext.Provider>
                </searchContext.Provider>
              </postDataContext.Provider>
            </fetchDataContext.Provider>
          </logoutContext.Provider>
        </istLoginContext.Provider>
      </registerFetch.Provider>
    </authLoginContext.Provider>
  )
}

