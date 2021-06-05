import { getPodcasts, fetchPodcasts } from "../../utils";

export default async function() {
    const podcasts = await fetchPodcasts();
    const result = getPodcasts(podcasts);
    return result;
}
