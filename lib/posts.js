const REVIEWDIR = 'classes'


import path from 'path'
import process from 'process'
import fs from 'fs'
import matter from 'gray-matter'

const notesDirectory = path.join(process.cwd(), 'notes')
const postsDirectory = path.join(process.cwd(), 'posts')
const reviewDirectory = path.join(process.cwd(), 'reviews')

export const getAllIds = (directory) => {
  const fileNames = fs.readdirSync(directory)
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.mdx$/, '')
      }
    }
  })
}

// POSTS 

export const getAllPostsIds = () => {
  return getAllIds(postsDirectory)
}

export const getAllReviewsIds = () => {
  return getAllIds(reviewDirectory)
}

export const getAllNotesIds = () => {
  return getAllIds(notesDirectory)
}

export const getReviewsData = (id) => {
  return getData(id, reviewDirectory)
}

export const getNotesData = (id) => {
  const fullPath = path.join(notesDirectory, `${id}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data: frontMatter, excerpt, content } = matter(fileContents, { excerpt_separator: '<!-- end -->' });
  return {
    id,
    frontMatter,
    content
  }
}

export const getPostData = (id) => {
  return getData(id, postsDirectory)
}

export const getData = (id, directory) => {
  const fullPath = path.join(directory, `${id}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data: frontMatter, content } = matter(fileContents)
  return {
    id,
    frontMatter,
    content
  }
}

export const getSortedReviewsData = () => {
  return getSortedData(reviewDirectory)
}

export const getSortedPostsData = () => {
  return getSortedData(postsDirectory)
}

export const getSortedNotesData = () => {
  const fileNames = fs.readdirSync(notesDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.mdx$/, '')
    const fullPath = path.join(notesDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data: frontMatter, content } = matter(fileContents);
    return {
      id,
      frontMatter,
      content
    }
  })
  return allPostsData.sort((a, b) => {
    a = new Date(a.frontMatter.date)
    b = new Date(b.frontMatter.date)
    if (a < b) {
      return 1
    } else if (a > b) {
      return -1
    } else {
      return 0
    }
  })
}

export const getSortedData = (directory) => {
  const fileNames = fs.readdirSync(directory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.mdx$/, '')
    const fullPath = path.join(directory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data: frontMatter } = matter(fileContents);
    return {
      id,
      frontMatter
    }
  })
  return allPostsData.sort((a, b) => {
    a = new Date(a.frontMatter.date)
    b = new Date(b.frontMatter.date)
    if (a < b) {
      return 1
    } else if (a > b) {
      return -1
    } else {
      return 0
    }
  })
}

