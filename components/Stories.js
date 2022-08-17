import StoryCard from "./StoryCard";

const stories = [
  { name: "Davi", src: "/images/davi-story.jpg", profile: "/images/davi.jpeg" },
  { name: "Salomão", src: "/images/salomao-story.jpg", profile: "/images/salomao.jpg" },
  { name: "Jesus", src: "/images/jesus-story.jpg", profile: "/images/jesus.jpeg" },
  { name: "Salomão", src: "/images/salomao-feed-1.jpg", profile: "/images/salomao.jpg" },
  { name: "Davi", src: "/images/davi-feed-2.jpeg", profile: "/images/davi.jpeg" },

//   { name: "Golias", src: "/images/golias-story.jpg", profile: "/images/golias.jpg" },
//   { name: "Salomão", src: "/images/salomao-feed-2.jpeg", profile: "/images/salomao.jpg" },
//   { name: "Jesus", src: "/images/jesus-feed-2.jpg", profile: "/images/jesus.jpeg" },

];

export default function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map(({ name, src, profile }, i) => (
        <StoryCard key={i} name={name} src={src} profile={profile} />
      ))}
    </div>
  );
}
