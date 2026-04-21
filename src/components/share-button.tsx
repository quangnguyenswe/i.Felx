"use client";

import { Check, Copy, LinkIcon, Share2 } from "lucide-react";
import { useState } from "react";
import { useCopyText } from "@/hooks/use-copy-text";
import * as icon from "@icons-pack/react-simple-icons";
import { LinkedInIcon } from "@/icons/LinkedinIcon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

type ShareButtonProps = {
  description: string;
};

export function ShareButton(props: ShareButtonProps) {
  const { description } = props;
  const pathname = usePathname();
  // Full URL requires client-side access to window.location
  const url =
    typeof window !== "undefined" ? `${window.location.origin}${pathname}` : "";

  const { isCopied, copyText } = useCopyText();

  //TODO: fix the url encoding for description and url
  const twitterUrl = `https://twitter.com/intent/tweet?text=${description}&url=${url}`;
  const fbUrl = `https://www.facebook.com/sharer/sharer.php?quote=${description}&u=${url}`;
  const redditUrl = `https://www.reddit.com/submit?title=${description}&url=${url}`;
  const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${description}`;

  const shareUrls = [
    { name: "Twitter", url: twitterUrl, icon: icon.SiX },
    { name: "Facebook", url: fbUrl, icon: icon.SiFacebook },
    { name: "Reddit", url: redditUrl, icon: icon.SiReddit },
    { name: "LinkedIn", url: linkedinUrl, icon: LinkedInIcon },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button type="button" className={"cursor-pointer"}>
            {!isCopied && (
              <>
                <Share2 size="15px" />
                <span className="ml-2 hidden sm:inline">Share</span>
              </>
            )}
            {isCopied && (
              <>
                <Check size="15px" />
                <span className="ml-2 hidden sm:inline">Copied</span>
              </>
            )}
          </Button>
        }
      >
        Open
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem
            className={"cursor-pointer"}
            onClick={() => {
              copyText(url);
            }}
          >
            <Copy />
            Copy Link
          </DropdownMenuItem>
          {shareUrls.map((item) => (
            <Link
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <DropdownMenuItem className={"cursor-pointer"}>
                <item.icon size={16} />
                {item.name}
              </DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
