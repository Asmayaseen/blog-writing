import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Information about me",
};

export default async function AboutPage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col gap-4 md:flex-row md:gap-8 md:justify-between items-start">
        <div className="flex-1 space-x-4">
          <h1 className="text-4xl lg:text-5xl font-black inline-block">
            About Me
          </h1>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col gap-8 md:flex-row md:items-start items-center">
        <div className="flex flex-col min-w-48 max-w-48 gap-2">
          <Avatar className="size-48">
            <AvatarImage src="/avater.png" alt={siteConfig.author} />
            <AvatarFallback>AK</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold text-center break-words">
            {siteConfig.author}
          </h2>
          <p className="text-center break-words text-muted-foreground">
            Software Developer
          </p>
        </div>
        <p className="py-4 text-lg text-muted-foreground">
          As an enthusiastic software developer, my focus has always been on
          providing innovative and efficient solutions. I specialize in various
          programming languages and technologies, particularly JavaScript,
          TypeScript, and front-end development. Solving new challenges and
          working on exciting projects is my passion. I constantly strive to
          improve my work by learning new tools and frameworks. My goal is to
          enhance my knowledge and develop systems that are not only functional
          but also improve the user experience.
        </p>
      </div>
    </div>
  );
}
