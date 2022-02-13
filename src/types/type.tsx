export interface PostsDetails {
    id: number
    name: string
    url: string
    votesCount: number
}

export interface PostNode {
    node: PostsDetails
}

export interface PostsProps {
    posts: PostNode[];
}

export interface TopicsDetails {
    id: number
    name: string
}

export interface TopicNode {
    node: TopicsDetails
}

export interface TopicsProps {
    posts: TopicNode[];
}
