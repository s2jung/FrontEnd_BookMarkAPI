import { getAllBookmarks } from "@/lib/bookmarkApi";
import { /*BookmarkType, */BookmarksResponse } from "@/types";
import Bookmarks from "@/app/components/Bookmarks";

type Props = {
  searchParams: { page: string }
}

export default async function BookmarkPage(props: Props)  {
  const { page = 1 } = props.searchParams
  // const bookmarksData: Promise<BookmarksResponse> = getAllBookmarks()
  const bookmarksData: Promise<BookmarksResponse> = getAllBookmarks(parseInt(String(page)))
  // const { data } = await bookmarksData
  // const bookmarks: BookmarkType[] = data
  const bookmarksRes = await bookmarksData

  return (
    <div>
        <h1>Welcome to Bookmarker</h1>
        {/* {
          bookmarks.map(bookmark => {
            return (
                <h2 key={bookmark.id}>{bookmark.title}</h2>
            )
          })
        } */}

        {/* <Bookmarks bookmarks={bookmarks} /> */}

        <Bookmarks bookmarks={bookmarksRes} />
    </div>
  );
}