  import { useEffect, useState } from 'react'
  

const useFetchLatestBlogs = () => {
    const [blogs, setBlogs] = useState([])
    const [isLoading, setIsLoading ] = useState(true)
    const [error, setError ] = useState(null)

    useEffect(() => {
        const getBlogs = async () => {
            setIsLoading(true)
            const settings = {
                method: 'GET', 
                headers:{
                    Accept: 'application/json',
                },
            }
            try{
                const response = await fetch('https://dev.to/api/articles/latest ', settings)
                if(!response.ok) {
                    setError(response.message)
                    console.log(response)
                    throw new Error(`Failed to fetch blogs: ${response}`)
                }
                const data = await response.json()
                // console.log(data)
                setBlogs(data)
                setIsLoading(false)
            }
            catch (error) {
                console.log(error)
                setError(error)
                setIsLoading(false)
            }
           


        }

        getBlogs()
    },[])

    return{
            blogs,
            error,
            isLoading
        } 

}



export default useFetchLatestBlogs