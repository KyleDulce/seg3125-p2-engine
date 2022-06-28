import { Button, Container, Row } from 'react-bootstrap';
import { itemsContainer } from '../util/CommonCss';
import { Link } from 'react-router-dom';

import pfp1 from '../resources/profilepics/63457-1-1.png';
import pfp2 from '../resources/profilepics/63457-1-3.png';
import pfp3 from '../resources/profilepics/63457-1-5.png';
import pfp4 from '../resources/profilepics/63457-3-1.png';
import pfp5 from '../resources/profilepics/63457-3-3.png';
import pfp6 from '../resources/profilepics/63457-3-5.png';

import help from  '../resources/question.jpg';
import discussion from  '../resources/discussion.jpg';
import tools from  '../resources/tools.jpg';

export default function ForumHome() {

    const featuredPosts = [
        {
            type: "Trending Posts",
            posts: [
                {
                    title: "Question Regarding Vectors",
                    author: "Zep",
                    tag: "Question",
                    profilePic: pfp4,
                    replies: "8",
                    lastReply: "2 minutes",
                    tagPic: help,
                    shortForm: "Wondering how to get the magnitude of a vector. I have...."
                },
                {
                    title: "Something isn't working!!",
                    author: "Roni",
                    tag: "Tools",
                    profilePic: pfp6,
                    replies: "25",
                    lastReply: "8 minutes",
                    tagPic: tools,
                    shortForm: "I was using the multiplayer engine and..."
                },
                {
                    title: "Features I want in the next version",
                    author: "Kevin",
                    tag: "Discussion",
                    profilePic: pfp3,
                    replies: "62",
                    lastReply: "32 minutes",
                    tagPic: discussion,
                    shortForm: "I was coding earlier and I was wondering what if...."
                },
            ]
        },
        {
            type: "Latest Posts",
            posts: [
                {
                    title: "Looking for partners for a project",
                    author: "Kyle",
                    tag: "Discussion",
                    profilePic: pfp1,
                    replies: "0",
                    lastReply: "A Moment",
                    tagPic: discussion,
                    shortForm: "I had a question about..."
                },
                {
                    title: "Rigidbody goes flying",
                    author: "Hanna",
                    tag: "Question",
                    profilePic: pfp5,
                    replies: "1",
                    lastReply: "2 minutes",
                    tagPic: help,
                    shortForm: "I was wondering why did this strange bug occur..."
                },
                {
                    title: "Webgl Library",
                    author: "John",
                    tag: "Tools",
                    profilePic: pfp2,
                    replies: "1",
                    lastReply: "5 minutes",
                    tagPic: tools,
                    shortForm: "I was wondering if any webgl libraries exist..."
                },
            ]
        }
    ];

    return (
        <>
            <div className='mt-3' style={Object.assign({display: "flex", flexWrap: "wrap"}, itemsContainer)}>
                <div>
                    <h2 className='title'>For-Real Community</h2>
                </div>
                <div className='ms-auto'>
                    <Link to="./post">
                        <Button className='accentSolidButton'>Create Post</Button>
                    </Link>
                </div>
            </div>

            {featuredPosts.map((postSection) => (
                <>
                    <Container className='my-3' style={Object.assign({width: "fit-content"}, sectionCard, itemsContainer)}>
                        <Row>
                            <h5 className='my-3 title ms-5 whiteColor'>{postSection.type}</h5>
                        </Row>

                        <Row>
                            {postSection.posts.map((post) => (
                                <div className='childrenNormalText' style={Object.assign({display: "flex", flexWrap: "wrap"}, rowCard)}>
                                    <img className='my-auto mx-1' style={{width: '120px', height: '120px', objectFit: "cover"}} src={post.tagPic} alt="Post" />
                                    <div className='py-3 ms-3' style={{width: "80%", flexGrow: "1"}}>
                                        <Link to="$post"><h4 className='title'><b>{post.title}</b></h4></Link>
                                        <div style={Object.assign({display: "flex", flexWrap: "wrap", width: "100%"})}>
                                            <div className='ms-5' style={{width: "10%"}}>
                                                <p>{`${post.author} - ${post.tag}`}</p>
                                            </div>
                                            <div className='ms-5 my-auto' style={{wordWrap: "normal"}}>
                                                <p>{post.shortForm}</p>
                                            </div>
                                            <div className='ms-auto my-auto' style={Object.assign({display: "flex", flexWrap: "wrap", width: "40%"})}>
                                                <div className='ms-auto'>
                                                    <p>{`Replies - ${post.replies}`}</p>
                                                </div>
                                                <div className='ms-auto'>
                                                    <p>Last Reply:</p>
                                                    <p>{`${post.lastReply} ago`}</p>
                                                </div>
                                                <div className='ms-auto my-auto' style={{width: "20%"}}>
                                                    <img style={{width: "100%"}} src={post.profilePic}  alt="Post"/>   
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Row>

                        <Row>
                            <Button className='ms-auto me-5 my-3 accentSolidButton' style={{width: "120px"}}>View More</Button>
                        </Row>
                    </Container>
                </>
            ))}
        </>
    )
};

const sectionCard = {
    border: "2px solid black",
    borderRadius: "50px",
    backgroundColor: "black"
}

const rowCard = {
    border: "2px solid black",
    backgroundColor: 'white'
}