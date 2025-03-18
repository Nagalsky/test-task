import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";

type Props = {
  className?: string;
};

const SOCIAL_NETWORKS_LIST = [
  {
    title: "google",
    image: "/icon-google.png",
  },
  {
    title: "apple",
    image: "/icon-apple.png",
  },
  {
    title: "facebook",
    image: "/icon-facebook.png",
  },
  {
    title: "discord",
    image: "/icon-discord.png",
  },
  {
    title: "telegram",
    image: "/icon-telegram.png",
  },
];

export const SocialNetworks: FC<Props> = ({ className }) => {
  return (
    <div className={cn("space-y-5 text-center", className)}>
      <p>Use social networks</p>
      <div className="flex flex-wrap justify-center gap-2">
        {SOCIAL_NETWORKS_LIST.map((social) => (
          <Image
            key={social.title}
            src={social.image}
            width={32}
            height={32}
            alt={social.title}
          />
        ))}
      </div>
    </div>
  );
};
