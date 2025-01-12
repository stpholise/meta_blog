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
                // console.log('data', data)
                setComments(data)
                // console.log(data)
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


// ======================== FETCH USERS ARTICLES ======================================================================================
// ========================================================================================================================================
// ========================================================================================================================================
// ========================================================================================================================================
// ========================================================================================================================================
// ========================================================================================================================================

export const useFetchUserArticles = ({username}) => {
    const [articles, setArticle ] = useState([])
    const [ isLoading, setIsLoading] = useState(true)
    const [ error, setError ] = useState(null) 
    
    useEffect(()=> {
        const settings ={
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        }

        const getUsersArticle = async() =>{
            setIsLoading(true)
            setError(null)
            try{
                const response = await fetch(`https://dev.to/api/articles?username=${username}`,  settings)
          
                if(!response.ok) {
                    if (response.status === 404) {
                        setError(`User ${username} not found.`);
                      } else {
                        setError(`Something went wrong: ${response.statusText}`);
                      }
                }
                const data = await response.json()
                // console.log('data', data.length)
                // console.log(data)
                setArticle(data)
                setIsLoading(false)                
            }
            catch(error) {
                setError(error)
                setIsLoading(false)
            }
        }
        if(username) {
            getUsersArticle()
        }
    }, [username])

    return {
        articles, 
        isLoading,
        error
    }
}


//  ======================== FETCH USERS PROFILE ======================================================================================
// ========================================================================================================================================
// ========================================================================================================================================
// ========================================================================================================================================
// ========================================================================================================================================
// ========================================================================================================================================

export const useFetchUserProfile = ({username}) => {
    const [ profile, setProfile ] = useState([])
    const [ isLoading, setIsLoading ] = useState(true)
    const [ error, setError ] = useState(null)

    useEffect(() => {
        const settings  = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            }
        }

        const getUsersProfile = async() => {
            setIsLoading(true)
            try{
                const response = await fetch(`https://dev.to/api/users/by_username?url=${username}`,settings)
                if(!response.ok){
                    setError(response.message)
                }
                const data = await response.json() 
                setProfile(data)
                setIsLoading(false)
            }
            catch(error) {
                setError(error)
                setIsLoading(false)
            }
        }
        if(username) {
            getUsersProfile()
        }
    }, [username])
    return {
        profile,
        isLoading,
        error
    }
}




//  ======================== FETCH CURRENT USER ======================================================================================
// ========================================================================================================================================
// ========================================================================================================================================
// ========================================================================================================================================
// ========================================================================================================================================
// ========================================================================================================================================

 
//  ======================== CREATE A BLOG ======================================================================================
// ========================================================================================================================================
// ========================================================================================================================================
// ========================================================================================================================================
// ========================================================================================================================================
// ========================================================================================================================================

export const useCreateBlog = (blogValues) => {
    const [ errror, setError] = useState(null)
    const [ isLoading, setIsLoading ] = useState(false)
    const [ responseData, setResponseData ] = useState()
 

    useEffect(() => {
        const settings = {
            method: 'POST',
            headers:  {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(blogValues)
        }

        setIsLoading(true)
        const  createBlog = async () => {
            try{
                const response = await fetch(`https://dev.to/api/articles`, settings)
                if(!response.ok) {
                    setError(response)
                }
                const data = await response.json() 
                setResponseData(data)
                setIsLoading(false)
            }
            catch (error){
                setError(error)
                setIsLoading(false)
            }
        }
        if(blogValues) {
            createBlog()
        }
    }, [blogValues])

    return{
        responseData,
        isLoading,
        errror
    }

}