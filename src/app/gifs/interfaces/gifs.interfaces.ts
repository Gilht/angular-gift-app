export interface SearchResponse {
    data: Gif[];
    pagination: Pagination
}

export interface Gif {
    id: string
    url: string
    slug: string
    source: string
    title: string
    bitly_gif_url: string
    bitly_url: string
}

export interface Pagination {
    total_count: number
    count: number
    offset: number
}

export interface User {
    avatar_url: string
    banner_image: string
    banner_url: string
    profile_url: string
}