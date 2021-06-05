
export interface FetchedPodcats {
    kind: String,
    etag: String,
    id: {
        kind: String,
        videoId: String
    },
    snippet: {
        publishedAt: String,
        channelId: String,
        title: String,
        description: String,
        thumbnails: {
        default: {
            url: String,
            width: Number,
            height: Number
        },
        medium: {
            url: String,
            width: Number,
            height: Number
        },
        high: {
            url: String,
            width: Number,
            height: Number
        }
        },
        channelTitle: String,
        liveBroadcastContent: String,
        publishTime: String
    }
}
