export type heroCard = {
  title: string;
  description: string;
  image: string;
};

export const heroCardsData: heroCard[] = [
  {
    title: "Introducing tags",
    description:
      "Easily categorize and find your notes by adding tags. Keep your workspace clutter-free and efficient.",
    image: "/hero-card-images/1.svg",
  },
  {
    title: "Share Notes Instantly",
    description:
      "Effortlessly share your notes with others via email or link. Enhance collaboration with quick sharing options.",
    image: "/hero-card-images/2.svg",
  },
  {
    title: "Access Anywhere",
    description:
      "Sync your notes across all devices. Stay productive whether you're on your phone, tablet, or computer.",
    image: "/hero-card-images/3.svg",
  },
];
