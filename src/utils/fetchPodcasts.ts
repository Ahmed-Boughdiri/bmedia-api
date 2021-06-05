import axios from "axios";
import { FetchedPodcats } from "../@types/FetchedPodcast";

const API_KEY = "AIzaSyCmaCht2uMN54pjlvmzzjq065HAz4gP0io";

export default async function():Promise<FetchedPodcats[]> {
    try {
        const req = await axios.get(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&q=podcast&key=${API_KEY}`
        );
        const res = await req.data;
        return res.items;
    } catch(err) {
        throw err;
    }
}
