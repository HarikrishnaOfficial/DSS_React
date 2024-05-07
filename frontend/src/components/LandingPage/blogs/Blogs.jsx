import './blogs.css'
import Hanumanpic from "/BlogImages/hanumanblogpic.png"


const blogData = [
  {
    "blogId": 1,
    "blogImage": "",
    "BlogTitle": "Hanuman chalisa benifits of reading and chanting"
  },
  {
    "blogId": 2,
    "blogImage": "",
    "BlogTitle": "Hanuman chalisa benifits of reading and chanting"
  },
  {
    "blogId": 3,
    "blogImage": "",
    "BlogTitle": "Hanuman chalisa benifits of reading and chanting"
  },
  {
    "blogId": 4,
    "blogImage": "",
    "BlogTitle": "Hanuman chalisa benifits of reading and chanting"
  },

]

function Blogs() {

  const containerStyle = {
    backgroundImage: `url(${Hanumanpic})`,
  }
  return (
    <>
      <div>
        <h1 className='EventsHeading'>BLOGS</h1>
        <hr />
      </div>
      <div className='blogscontainer'>
        {blogData.map((blog) => {
          return (
            <div className='blogImage' key={blog.blogId} style={containerStyle}>
              <div className='Blogtitlecont'>
                <p className='text-uppercase text-center blogTitle'>{blog.BlogTitle}</p>
              </div>
            </div>
          )
        })}
      </div>
    </>
  );
}

export default Blogs;