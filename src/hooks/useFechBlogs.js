  import { useEffect, useState } from 'react'
  import { PropTypes } from 'prop-types'

const useFetchBlogs = ({pageNumber = 1}) => {
 
    const [blogs, setBlogs] = useState([])
    const [isLoading, setIsLoading ] = useState(true)
    const [ error, setError ] = useState(null)

    useEffect(() => {
        setIsLoading(true)
        const getBlogs = async () => {
            const settings = {
                method: 'GET', 
                headers:{
                    Accept: 'application/json',
                },
            }
            try{
                const response = await fetch(`https://dev.to/api/articles/latest?page=${pageNumber}`, settings)
                if(!response.ok) {
                    setError(response.message)
                    throw new Error(`Failed to fetch blogs: ${response}`)
                }
                const data = await response.json()
                setBlogs(data) 
                setIsLoading(false)
            }
            catch (error) {
                setError(error)
                setIsLoading(false)
            } 
        }

        getBlogs()
    },[pageNumber])

    return{
            blogs,
            isLoading,
            error
        } 

} 
useFetchBlogs.propTypes = {
    page: PropTypes.number.isRequired
}

export default useFetchBlogs


// ======================= FETCH A SINGLE BLOG=============================================================================================
// ========================================================================================================================================
// ========================================================================================================================================
// ========================================================================================================================================

export const useFetchSingleBlog = ({id}) =>{
    const [blog, setBlog] = useState();
    const [ isLoading, setIsLoading ] = useState(true)
    const [ error, setError ] = useState(null)
    useEffect(() => {
        setIsLoading(true)    
        const getBlog = async () => {
            const settings = { 
                method: 'GET',
                headers:{
                    Accept: 'application/json',
                },
            }
            try{
                const response = await fetch(`https://dev.to/api/articles/${id}`, settings)
                if(!response.ok) {
                    throw new Error(`Failed to fetch blogs ${response}`)
                }
                const data = await response.json()
                setBlog(data)   
                setIsLoading(false)    
                console.log( 'blog', data)
            }
            catch(error) {
                setError(error)
                setIsLoading(false);
            }
             
        }
        if (id) {
            getBlog();
        }
    }, [id])

    return{ 
        blog,
        isLoading,
        error
    }

}



// ======================== FETCH AN ARTICLES COMMENT====================================================================================== 
// ========================================================================================================================================
// ========================================================================================================================================
// ========================================================================================================================================
// ========================================================================================================================================

export const useFetchComments = ({id}) => {
    const [ comments, setComments ] = useState([])
    const [ isLoading, setIsLoading ] = useState(true) 
    const [ error, setError ] = useState(null) 
    useEffect(() => {
        setIsLoading(true)
        const settings = {
            method: 'GET', 
            headers:{
                Accept: 'application/json',
            }
        }
        const getComments = async () => {
            try{
                const response = await fetch(` https://dev.to/api/comments?a_id=${id}`, settings)
                const data = await response.json()
                console.log('data', data)
                setComments(data)
                console.log(data)
            }
            catch(error) {
                setError(error) 
                setIsLoading(false)
            }
        }
        getComments()
    }, [id])

    return{
        comments,
        isLoading,
        error
    }
}