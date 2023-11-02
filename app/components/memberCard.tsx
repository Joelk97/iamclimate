import { member } from "@/types/chiSiamo-types";
import Image from "next/image";
import avatar from "../../public/avatar.png";

export default function MemberCard({ member }: { member: member }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="rounded-full">
        <Image
          width={200}
          height={200}
          alt="Member image"
          src={member?.memberImage ? member.memberImage : avatar}
        />
      </div>

      <h1 className="text-2xl">{member?.name}</h1>
      <p>{member?.text?.it}</p>
    </div>
  );
}
