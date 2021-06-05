import { FetchedPodcats } from "../@types/FetchedPodcast";
import { Podcast } from "../@types/Podcast";

export default function(podcasts: FetchedPodcats[]):Podcast[] {
    return podcasts.map((podcast) =>({
        title: podcast.snippet.title,
        description: podcast.snippet.description,
        thumbnail: podcast.snippet.thumbnails.medium.url,
        releaseTime: podcast.snippet.publishTime
    }));
}
