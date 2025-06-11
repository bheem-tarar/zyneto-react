import React from "react";
import Blog1 from '../components/Blog1';
import Blog2 from '../components/Blog2';

const cards = [
    {
        title: "Whiteboard Templates By Industry Leaders",
        date: "08 Nov 2023",
        avatar: "../src/assets/avatar/1.png",
        cover: "../src/assets/cover-1.webp",
        comments: "7.98k",
        views: "8.83k",
        shares: "8.56k",
    },
    {
        title: "Whiteboard Templates By Industry Leaders",
        date: "08 Nov 2023",
        avatar: "../src/assets/avatar/1.png",
        cover: "../src/assets/cover-1.webp",
        comments: "7.98k",
        views: "8.83k",
        shares: "8.56k",
    },
    {
        title: "Brainstorming Strategies for Creatives",
        date: "10 Nov 2023",
        avatar: "../src/assets/avatar-2.webp",
        cover: "../src/assets/cover-2.webp",
        comments: "6.12k",
        views: "7.45k",
        shares: "5.34k",
    },
    // {
    //     title: "Ultimate Productivity Frameworks",
    //     date: "15 Nov 2023",
    //     avatar: "../src/assets/avatar-2.webp",
    //     cover: "../src/assets/cover-2.webp",
    //     comments: "9.21k",
    //     views: "12.34k",
    //     shares: "6.78k",
    // },
    // {
    //     title: "Ultimate Productivity Frameworks",
    //     date: "15 Nov 2023",
    //     avatar: "../src/assets/avatar-2.webp",
    //     cover: "../src/assets/cover-2.webp",
    //     comments: "9.21k",
    //     views: "12.34k",
    //     shares: "6.78k",
    // },
    // {
    //     title: "Brainstorming Strategies for Creatives",
    //     date: "9 Nov 2023",
    //     avatar: "../src/assets/avatar-2.webp",
    //     cover: "../src/assets/cover-2.webp",
    //     comments: "6.12k",
    //     views: "7.45k",
    //     shares: "5.34k",
    // },
    {
        title: "akjdc akjncdac akjncdac",
        date: "15 Nov 2023",
        avatar: "../src/assets/avatar-2.webp",
        cover: "../src/assets/cover-2.webp",
        comments: "9.21k",
        views: "12.34k",
        shares: "6.78k",
    },
];
const Blog = () => {
    return (
        <div className="overflow-auto h-640">
            <Blog1 cards={cards} />
            <Blog2 cards={cards} />
        </div>
    )
}
export default Blog;