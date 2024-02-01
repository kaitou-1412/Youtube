import homeOutlined from "../assets/homeOutlined.svg";
import shortsOutlined from "../assets/shortsOutlined.svg";
import subscriptionsOutlined from "../assets/subscriptionsOutlined.svg";
import library from "../assets/library.svg";
import yourChannel from "../assets/yourChannel.svg";
import history from "../assets/history.svg";
import yourVideos from "../assets/yourVideos.svg";
import watchLater from "../assets/watchLater.svg";
import trending from "../assets/trending.svg";
import shopping from "../assets/shopping.svg";
import music from "../assets/music.svg";
import movies from "../assets/movies.svg";
import live from "../assets/live.svg";
import gaming from "../assets/gaming.svg";
import news from "../assets/news.svg";
import sports from "../assets/sports.svg";
import learning from "../assets/learning.svg";
import fashion from "../assets/fashion.svg";
import podcasts from "../assets/podcasts.svg";

const SECTION_DATA = [
  {
    heading: "",
    tabs: [
      { id: 1, title: "Home", icon: homeOutlined, link: "/" },
      { id: 2, title: "Shorts", icon: shortsOutlined },
      { id: 3, title: "Subscriptions", icon: subscriptionsOutlined },
      { id: 4, title: "Library", icon: library },
    ],
  },
  {
    heading: "",
    tabs: [
      { id: 5, title: "Your channel", icon: yourChannel },
      { id: 6, title: "History", icon: history },
      { id: 7, title: "Your videos", icon: yourVideos },
      { id: 8, title: "Watch later", icon: watchLater },
    ],
  },
  {
    heading: "Explore",
    tabs: [
      { id: 9, title: "Trending", icon: trending },
      { id: 10, title: "Shopping", icon: shopping },
      { id: 11, title: "Music", icon: music },
      { id: 12, title: "Movies", icon: movies },
      { id: 13, title: "Live", icon: live },
      { id: 14, title: "Gaming", icon: gaming },
      { id: 15, title: "News", icon: news },
      { id: 16, title: "Sports", icon: sports },
      { id: 17, title: "Learning", icon: learning },
      { id: 18, title: "Fashion & Beauty", icon: fashion },
      { id: 19, title: "Podcasts", icon: podcasts },
    ],
  },
];

const MAX_LABELS = 7;

const { REACT_APP_GOOGLE_API_KEY } = process.env;

const YOUTUBE_API = {
  VideoCategoriesList: `https://youtube.googleapis.com/youtube/v3/videoCategories?regionCode=US&key=${REACT_APP_GOOGLE_API_KEY}`,
  VideosList: `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${REACT_APP_GOOGLE_API_KEY}`,
  VideoDetail: `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2Cplayer&key=${REACT_APP_GOOGLE_API_KEY}`,
  Search:
    "http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&q=",
  SearchVideosList: `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${REACT_APP_GOOGLE_API_KEY}`,
  Comments: `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&key=${REACT_APP_GOOGLE_API_KEY}`,
};

const CHAT_POLL_INTERVAL = 2000;
const OFFSET_LIVE_CHAT = 20;

export {
  SECTION_DATA,
  MAX_LABELS,
  YOUTUBE_API,
  REACT_APP_GOOGLE_API_KEY,
  CHAT_POLL_INTERVAL,
  OFFSET_LIVE_CHAT,
};
