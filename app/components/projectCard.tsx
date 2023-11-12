import { member } from "@/types/chiSiamo-types";
import Image from "next/image";
import avatar from "../../public/avatar.png";
import { Progetto } from "@/types/progetto-types";
import { useLocale } from "next-intl";

export default function ProjectCard({ project }: { project: Progetto }) {
  const locale = useLocale();
  return (
    <div className="flex flex-col items-center gap-10 w-80">
      <div className="rounded-full">
        <Image
          width={200}
          height={200}
          alt="Member image"
          src={project?.image ? project.image : avatar}
        />
      </div>
      <div className="flex flex-col items-start gap-4">
        <h1 className="text-2xl">{project?.title?.[locale]}</h1>
        <p>{project?.intro?.[locale]}</p>
      </div>
    </div>
  );
}
