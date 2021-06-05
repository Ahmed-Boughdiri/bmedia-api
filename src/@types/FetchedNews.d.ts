
export interface FetchedNews {
    source: {
        id: String | null,
        name: String | null
    },
    author: String | null,
    title: String | null,
    description: String | null,
    url: String | null,
    urlToImage: String | null,
    publishedAt: String | null,
    content: String | null
}
