import path from 'path'
import process from 'process'
import fs from 'fs'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')
export const getAllPostsIds = () => {
    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.mdx$/, '')
            }
        }
    })
}

export const getPostData = (id) => {
    const fullPath = path.join(postsDirectory, `${id}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data: frontMatter, content } = matter(fileContents)
    return {
      id,
      frontMatter, 
      content
    }
}

export const getSortedPostsData = () => {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
      const id = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data: frontMatter } = matter(fileContents);
      return {
        id,
        frontMatter
      }
    })
    return allPostsData.sort((a, b) => {
      a = a.frontMatter.date
      b = b.frontMatter.date
      if (a < b) {
        return 1
      } else if (a > b) {
        return -1
      } else {
        return 0
      }
    })
}

