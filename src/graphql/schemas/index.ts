import { buildSchema } from "graphql";
import podcastSchema from "./Podcast";
import newsSchema from "./News";

export default buildSchema(`
    type Query {
        podcast: [Podcast!]!
        news(category: String): [News!]!
    }
    ${podcastSchema}
    ${newsSchema}
`);

