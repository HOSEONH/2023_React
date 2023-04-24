import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

export default function StoryList() {
  return (
    <div>
        <h1>StoryList</h1>
        <Link to='/storylist/apple'>appleStory</Link>
        <Link to='/storylist/orange'>orangeStory</Link>
        <Link to='/storylist/peach'>peachStory</Link>

        <Outlet />
    </div>
  )
}