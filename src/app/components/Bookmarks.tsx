// import { BookmarkType } from '@/types';
import { BookmarksResponse } from '@/types';
import React from 'react';
import Bookmark from '@/app/components/Bookmark';
import Pagination from '@/app/components/Pagination';

type Props = {
    // bookmarks: BookmarkType[]
    bookmarks: BookmarksResponse,
    query?: string
}

const Bookmarks: React.FC<Props> = ({bookmarks, query}) => {
    return (
        <div>
            {/* <h1>Welcome to Bookmarker</h1> */}
            <Pagination bookmarks={bookmarks} query={query} />
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