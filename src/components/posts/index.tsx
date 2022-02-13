import React, {useEffect, useState} from 'react'
import type {NextPage} from 'next'
import {PostNode, PostsProps} from "../../types/type";
import {client} from "../../pages/api/graphQL";
import gql from "graphql-tag";

interface MyPostsProps {
    myTopic: string
}

const Posts: NextPage<MyPostsProps> = (props: MyPostsProps) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        let postsLimit = 30
        setLoading(true)
        client
            .query({
                query: gql(`
           query todayPosts($first: Int, $topic: String) {
                        posts(first:$first, topic:$topic) {
                            edges {
                                node {
                                    id
                                    name
                                    url
                                    votesCount
                                }
                            }
                        }
                    }
        `), variables: {
                    first: postsLimit,
                    topic: props.myTopic.toString()
                }
            })
            .then(result => {
                    console.log(result.data.posts.edges);
                    if (!result.loading) {
                        setPosts(result.data.posts.edges)
                        setLoading(false)
                    }
                }
            )
            .catch((err) => console.log('err', err));
    }, [props.myTopic]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-4">
            {loading ? <div>loading...</div>
                : <>
                    {!!posts?.length ? (
                        posts.map((post: PostNode) =>
                            <div className="border border-solid rounded-lg border-orange-500 p-3" key={post.node.id}>
                                <div className="font-bold truncate">{post.node.name}</div>
                            </div>
                        )
                    ) : <div>No Result</div>
                    }
                </>}
        </div>
    )
}

export default Posts
