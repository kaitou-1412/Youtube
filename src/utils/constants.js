const SECTION_DATA = [
  {
    heading: "",
    tabs: ["Home", "Shorts", "Videos", "Live"],
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

const { GOOGLE_API_KEY, OAUTH_CLIENT_ID, OAUTH_CLIENT_SECRET } = process.env;

const YOUTUBE_API = {
  VideoCategoriesList: `https://youtube.googleapis.com/youtube/v3/videoCategories?key=${GOOGLE_API_KEY}`,
  VideosList: `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=60&regionCode=IN&key=${GOOGLE_API_KEY}`,
};

export {
  SECTION_DATA,
  YOUTUBE_API,
  GOOGLE_API_KEY,
  OAUTH_CLIENT_ID,
  OAUTH_CLIENT_SECRET,
};
