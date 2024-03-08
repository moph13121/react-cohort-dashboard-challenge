import React, { useContext, useState } from 'react'
import './Post.css'
import UserIconComponent from '../../../assets/user-icon'
import { userContext } from '../Posts'
import CommentsComponent from './Post/Comments'
import CreateCommentComponent from './Post/CreateComment'

export default function PostComponent({ post }) {
    const { users } = useContext(userContext)

    const author = users.get.find(user => user.id == post.contactId)

    const [getComments, setComments] = useState([])
    const comments = {get:getComments, set:setComments}

    if (!author){
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <li className='item'>
            <div className='card'>
                <header className='header'>
                    <UserIconComponent user={author} />
                    <div className='author-title'>
                        <div className='author'>{`${author.firstName} ${author.lastName}`}</div>
                        <div className='title' >{post.title}</div>
                    </div>
                </header>
                <div className='content'>
                    {post.content}
                </div>
                <CommentsComponent postId={post.id} comments={comments}/>
                <CreateCommentComponent postId={post.id} comments={comments}/>

            </div>
        </li>
    )
}
