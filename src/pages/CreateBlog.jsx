
import { Formik, Form, Field }  from 'formik'
import { useCreateBlog } from '../hooks/useFechBlogs'

const CreateBlog = () => {
    const blogPost = {
        "article": {
          "title": "Hello, World!",
          "published": true,
          "body_markdown": "Hello DEV, this is my first post",
          "tags": [
            "discuss",
            "help"
          ],
          "series": "Hello series"
        }
      }


      const { createBlog, isLoading } = useCreateBlog(blogPost)

      const onSubmit = async (values) => { 
        console.log(values)
        createBlog(values)
      }

  return (
    <div >
      <Formik
        initalValues={blogPost}
        onSubmit={onSubmit}
      >
        {
        () => (
          <Form>
            <div className="fieldWrapper">
              <Field />
            </div>
          </Form>
        )
      }
      </Formik>
    </div>
  )
}

export default CreateBlog