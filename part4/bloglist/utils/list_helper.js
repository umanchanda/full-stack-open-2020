const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  return blogs.map(blog => blog.likes)
              .reduce((accumulator, currentValue) => accumulator + currentValue)
}

const favoriteBlog = (blogs) => {
  const blogWithMostLikes = blogs.reduce((max, blog) => max.likes > blog.likes ? max : blog)
  return { title: blogWithMostLikes.title, author: blogWithMostLikes.author, likes: blogWithMostLikes.likes }
}

const mostBlogs = (blogs) => {
 const authorCounts = blogs.map(blog => blog.author)
                            .reduce((author, index) => {
                              author[index] = (author[index] || 0) + 1
                              return author
                            }, {})
  const maxCount = Math.max(...Object.values(authorCounts));
  const mostFrequent = Object.keys(authorCounts).filter(k => authorCounts[k] === maxCount);
  return { author: mostFrequent[0], blogs: maxCount }
}

// const mostLikes = (blogs) => {
  
// }

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  // mostLikes
}