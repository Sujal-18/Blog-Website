// import React, { useEffect, useState } from 'react'
// import {Container, PostCard, PostForm} from '../components/index'
// import appwriteService from '../appwrite/config'

// function Home() {
//     const [posts, setPosts] = useState([])

//     useEffect(()=>{
//         appwriteService.getAllPosts().then((posts) =>{
//             if(posts){
//                 setPosts(posts.documents)
//             }
//         })
//     },[])
//     if(posts.length === 0){
//         return (
//             <div className='w-full py-8 mt-4 text-center'>
//                 <Container>
//                     <div className='flex flex-wrap'>
//                         <div className='p-2 w-full'>
//                             <h1 className='text-2xl font-bold hover: text-gray-500'>No posts present yet!!</h1>
//                         </div>
//                     </div>
//                 </Container>
//             </div>      
//         )
//     }
//     return (
//         <div className='w-full py-8'>
//             <Container>
//                 <div className='flex flex-wrap'>
//                     {posts.map((post)=>(
//                         <div key={post.$id} className='p-2 w-1/4'>
//                             <PostCard {...post} />
//                         </div>
//                     ))}
//                 </div>
//             </Container>
//         </div>
//     )  
// }

// export default Home
//2.
import React, { useEffect, useState } from 'react'
import { Container, PostCard } from '../components/index'
import appwriteService from '../appwrite/config'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getAllPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    if (posts.length === 0) {
        return (
            <div className="w-full py-16 flex justify-center items-center">
                <Container>
                    <div className="text-center">
                        <h1 className="text-3xl font-semibold text-gray-700 mb-2">
                            No posts yet 📭
                        </h1>
                        <p className="text-gray-500">
                            Be the first one to create a post!
                        </p>
                    </div>
                </Container>
            </div>
        )
    }

    return (
        <div className="w-full py-10">
            <Container>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Latest Posts</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {posts.map((post) => (
                        <div
                            key={post.$id}
                            className="transform hover:scale-105 transition duration-200"
                        >
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home
