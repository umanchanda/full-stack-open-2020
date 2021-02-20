const listHelper = require('../utils/list_helper')

test('dummy returns one', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  expect(result).toBe(1)
})

describe('total likes', () => {
  const listWithOneBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    }
  ]

  test('when list has only one blog, equals the likes of that', () => {
    const result = listHelper.totalLikes(listWithOneBlog)
    expect(result).toBe(5)
  })
})

describe('favorite blog', () => {
  const listWithMultipleBlogs = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676244d17sd6',
      title: 'Canonical string reduction',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Canonical_string_reduction.html',
      likes: 12,
      __v: 0
    }
  ]

  test('when list has multiple blogs, equals object with the most likes', () => {
    const result = listHelper.favoriteBlog(listWithMultipleBlogs)
    expect(result).toEqual({
      title: 'Canonical string reduction',
      author: 'Edsger W. Dijkstra',
      likes: 12
    })
  })
})

describe('most blogs', () => {
  const listWithMultipleAuthors = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676244d17sd6',
      title: 'Canonical string reduction',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Canonical_string_reduction.html',
      likes: 12,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d19kd',
      title: 'Test Post Please Ignore',
      author: 'Robert C Martin',
      url: 'http://www.u.mit.edu/~rubinson/copyright_violations/Test_Post_Please_Ignore.html',
      likes: 3,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d13jd',
      title: 'My First Blog Post',
      author: 'Robert C Martin',
      url: 'http://www.u.mit.edu/~rubinson/copyright_violations/My_First_Blog_Post.html',
      likes: 16,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d13mc',
      title: 'I Don\'t Want To Blog Anymore',
      author: 'Robert C Martin',
      url: 'http://www.u.mit.edu/~rubinson/copyright_violations/I_m_Not_Blogging_Anymore.html',
      likes: 1,
      __v: 0
    }
  ]

  test('when list has multiple authors, equals object with the most blogs', () => {
    const result = listHelper.mostBlogs(listWithMultipleAuthors)
    expect(result).toEqual({
      author: 'Robert C Martin',
      blogs: 3
    })
  })
})

// describe('most likes', () => {
//   const listWithMultipleBlogs = [
//     {
//       _id: '5a422aa71b54a676234d17f8',
//       title: 'Go To Statement Considered Harmful',
//       author: 'Edsger W. Dijkstra',
//       url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
//       likes: 5,
//       __v: 0
//     },
//     {
//       _id: '5a422aa71b54a676244d17sd6',
//       title: 'Canonical string reduction',
//       author: 'Edsger W. Dijkstra',
//       url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Canonical_string_reduction.html',
//       likes: 12,
//       __v: 0
//     }
//   ]

//   test('find author that has the most likes across all blogs', () => {
//     const result = listHelper.mostLikes(listWithMultipleBlogs)
//     expect(result).toEqual({
//       author: 'Edsger W. Dijkstra',
//       likes: 17
//     })
//   })
// })