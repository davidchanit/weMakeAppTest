import React, {useEffect, useState} from 'react'
import type {NextPage} from 'next'
import styles from '../styles/Home.module.css'
import gql from "graphql-tag";
import {client} from "./api/graphQL";
import Posts from "../components/posts";
import {TopicNode} from "../types/type";

const Home: NextPage = () => {
    const [topics, setTopics] = useState<[]>([]);
    const [myTopic, setMyTopic] = useState<string>('');
    useEffect(() => {
        client
            .query({
                query: gql(`
                {
                  topics {
                    edges {
                      node {
                        id
                        name
                      }
                    }
                  }
                }
    `)
            })
            .then(result => {
                    console.log(result);
                    if (!result.loading) {
                        setTopics(result.data.topics.edges)
                    }
                }
            )
            .catch((err) => console.log('err', err));
    }, []);


    return (
        <div className={styles.container}>
                <h1 className="flex justify-center mb-3 text-3xl font-bold underline">
                    Post List
                </h1>
                <select value={myTopic} onChange={(e) => setMyTopic(e.target.value)} className="flex mx-auto my-3"
                        name="cars" id="cars">
                    <option value="">All</option>
                    {topics?.length && (
                        topics.map((topic: TopicNode) =>
                            <option key={topic.node.id} value={topic.node.id}>{topic.node.name}</option>
                        )
                    )
                    }
                </select>
                <Posts myTopic={myTopic}/>
        </div>
    )
}

export default Home
