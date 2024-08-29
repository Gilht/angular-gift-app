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
    images: Image
}

export interface Image { 
    downsized_medium: DownSizedMedium
}

export interface DownSizedMedium {
    url: string
    width: string
    size: string
    height: string
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