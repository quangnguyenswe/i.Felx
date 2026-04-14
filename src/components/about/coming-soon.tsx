import { PlusSeparator } from "@/components/ui/plus-separator";
import { LightRays } from "../ui/light-rays";

type ComingSoonSectionProps = {
  title?: string;
  description?: string;
};

export default function ComingSoonSection(props: ComingSoonSectionProps) {
  const { title = "idk what to put in here yet...", description } = props;
  return (
    <main className="w-full border-separator/10 border-y">
      <div className="inner relative flex flex-col items-center border-separator/10 border-x px-2 py-28">
        <LightRays />
        <p className="text-center font-medium text-2xl">{title}</p>
        <p className="mx-2 mt-1 max-w-2xl text-center text-muted-foreground text-xs sm:text-sm">
          {description ||
            "maybe an photo of myself? or a timeline of my life? who knows! stay tuned :D"}
        </p>
        <PlusSeparator
          main={{
            className: "-top-[4px]",
          }}
          position={["top-left", "top-right"]}
        />
        <PlusSeparator
          main={{
            className: "-bottom-[4px]",
          }}
          position={["bottom-left", "bottom-right"]}
        />
      </div>
    </main>
  );
}
