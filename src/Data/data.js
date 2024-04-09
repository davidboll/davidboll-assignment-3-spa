import terminatorImage from "../assets/images/cover-terminator.jpg";
import dumbAndDumberImage from "../assets/images/cover-dumb-and-dumber.jpg";
import matrixImage from "../assets/images/cover-the-matrix.jpg";
import strangerThingsImage from "../assets/images/cover-stranger-things.jpg";
import crownImage from "../assets/images/cover-the-crown.jpg";
import breakingBadImage from "../assets/images/cover-breaking-bad.jpg";

const movies = [
  {
    id: 1,
    title: "Terminator",
    description:
      "A cyborg assassin is sent back in time to kill the mother of the leader of the future human resistance.",
    imageUrl: terminatorImage,
  },
  {
    id: 2,
    title: "Dumb and Dumber",
    description:
      "The cross-country adventures of two good-hearted but incredibly stupid friends.",
    imageUrl: dumbAndDumberImage,
  },
  {
    id: 3,
    title: "The Matrix",
    description:
      "A computer hacker learns about the true nature of reality and his role in the war against its controllers.",
    imageUrl: matrixImage,
  },
];

const shows = [
  {
    id: 1,
    title: "Stranger Things",
    description:
      "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.",
    imageUrl: strangerThingsImage,
  },
  {
    id: 2,
    title: "The Crown",
    description:
      "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the 20th century.",
    imageUrl: crownImage,
  },
  {
    id: 3,
    title: "Breaking Bad",
    description:
      "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
    imageUrl: breakingBadImage,
  },
];

export { movies, shows };
