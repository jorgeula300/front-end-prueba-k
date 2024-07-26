import axios from "axios";
import { useState } from "react";



const useFetch = () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchData = async (url) => {
        try {
            const response = await axios.get(url)
            setData(response.data)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }


    return { data, loading, error, fetchData }
}


export default useFetch