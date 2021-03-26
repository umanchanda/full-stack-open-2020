const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

const Blog = require('../models/blog')

const initialBlogPosts = [
  {
    title: 'My First Post',
    author: 'Uday Manchanda',
    url: 'https://umanchanda.github.io/blogs/My-First-Post',
    likes: 7
  }, 
  {
    title: 'My Second Post',
    author: 'Uday Manchanda',
    url: 'https://umanchanda.github.io/blogs/My-Second-Post',
    likes: 3
  }
]

beforeEach(async () => {
  await Blog.deleteMany({})
  let blogObject = new Blog(initialBlogPosts[0])
  await blogObject.save()
  blogObject = new Blog(initialBlogPosts[1])
  await blogObject.save()
})

test('verify correct number of blogs', async () => {
  const response = await api
    .get('/api/blogs/api/blogs')
    .expect(200)
    .expect('Content-Type',/application\/json/)
    
  expect(response.body).toHaveLength(initialBlogPosts.length)
})

afterAll(() => {
  mongoose.connection.close()
})