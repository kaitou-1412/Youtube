import { Link } from "react-router-dom";

const SECTION_DATA = [
  {
    heading: "",
    tabs: [<Link to="/">Home</Link>, "Shorts", "Videos", "Live"],
  },
  {
    heading: "Subscriptions",
    tabs: ["Music", "Sports", "Gaming", "Movies"],
  },
  {
    heading: "Watch Later",
    tabs: ["Music", "Sports", "Gaming", "Movies"],
  },
];

const MAX_LABELS = 7;

const {
  REACT_APP_GOOGLE_API_KEY,
  REACT_APP_OAUTH_CLIENT_ID,
  REACT_APP_OAUTH_CLIENT_SECRET,
} = process.env;

const YOUTUBE_API = {
  VideoCategoriesList: `https://youtube.googleapis.com/youtube/v3/videoCategories?regionCode=US&key=${REACT_APP_GOOGLE_API_KEY}`,
  VideosList: `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${REACT_APP_GOOGLE_API_KEY}`,
  VideoDetail: `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2Cplayer&key=${REACT_APP_GOOGLE_API_KEY}`,
  Search:
    "http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&q=",
  SearchVideosList: `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${REACT_APP_GOOGLE_API_KEY}`,
};

export {
  SECTION_DATA,
  MAX_LABELS,
  YOUTUBE_API,
  REACT_APP_GOOGLE_API_KEY,
  REACT_APP_OAUTH_CLIENT_ID,
  REACT_APP_OAUTH_CLIENT_SECRET,
};
