// import { BookmarkType } from '@/types';
import { BookmarksResponse } from '@/types';
import React from 'react';
import Bookmark from './Bookmark';

type Props = {
    // bookmarks: BookmarkType[]
    bookmarks: BookmarksResponse
}

const Bookmarks: React.FC<Props> = ({bookmarks}) => {
    return (
        <div>
            <h1>Welcome to Bookmarker</h1>
            {/* {
            bookmarks.map(bookmark => {
                return (
                    <h2 key={bookmark.id}>{bookmark.title}</h2>
                )
            })
            }             */}
            {
            // bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark} />)
            bookmarks.data.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark} />)
            }  
        </div>
    );
};

export default Bookmarks;