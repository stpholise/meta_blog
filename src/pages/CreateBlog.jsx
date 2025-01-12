
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


      const { createBlog,   } = useCreateBlog(blogPost)

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
              <div className="fieldBlock">
                <label htmlFor="title">Title</label>
                <Field  id="title" name="article.title" />
              </div>
              <div className="fieldBlock">
                <label htmlFor="published">Published</label>
                <Field  id="published" name="article.published" />
                </div>
              <div className="fieldBlock">
                <label htmlFor="body_markdown">Body Markdown</label>
                <Field as='textarea'  id="body_markdown" name="article.body_markdown" />
              </div>
              <div className="fieldBlock">
                <label htmlFor="tags">Tags</label>
                <Field  id="tags" name="article.tags" />
              </div>
              <div className="fieldBlock">
                <label htmlFor="series">Series</label>
                <Field  id="series" name="article.series" />
              </div>
              <div className="fieldBlock">
                <label htmlFor="main_image">Main Image</label>
                <Field  id="main_image" name="article.main_image" />
              </div>
              <div className="fieldBlock">
                <label htmlFor="description">Description</label>
                <Field  id="description" name="article.description" />
              </div>
              <div className="fieldBlock">
                <button type="submit">Create Blog</button>
              </div>
            </div>
          </Form>
        )
      }
      </Formik>
    </div>
  )
}

export default CreateBlog