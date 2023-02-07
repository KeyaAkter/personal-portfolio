const data = [
  { id: 1, title: "GitHub", url: "https://github.com/KeyaAkter" },
  {
    id: 2,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/keya-akter-8770911a8/",
  },
  { id: 3, title: "LeetCode", url: "https://www.google.com" },
  {
    id: 4,
    title: "Facebook",
    url: "https://www.facebook.com/tanisha.tanvin99/",
  },
  { id: 5, title: "Twitter", url: "https://www.google.com" },
];

const Socials = () => {
  return (
    <div className="socials flex gap-5 uppercase text-sm fixed left-10 top-[75%] -rotate-90 origin-left text-white/30 bg-black/30 p-5 backdrop-blur-xl z-50">
      {data.map((social) => (
        <a
          href={social.url}
          target="_blank"
          rel="noreferrer"
          key={social.id}
          className="hover:text-cyan-400 duration-500"
        >
          {social.title}{" "}
        </a>
      ))}
    </div>
  );
};

export default Socials;
