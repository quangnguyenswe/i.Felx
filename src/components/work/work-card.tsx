"use client";

import { WorkHistoryType } from "@/constants/work";
import { Fragment, useState } from "react";
import {
  WorkHistory,
  WorkHistoryDescription,
  WorkHistoryTitle,
} from "./work-history";

type WorkCardProps = {
  work: WorkHistoryType;
};

export default function WorkCard(props: WorkCardProps) {
  const { work } = props;
  const [showContributions, setShowContributions] = useState(false);
  return (
    <WorkHistory
      startDate={work.startDate}
      endDate={work.endDate}
      badges={work.tags}
      location={work.location}
    >
      <WorkHistoryTitle>
        {work.role} <span className="text-muted-foreground">at</span>{" "}
        {work.company}
      </WorkHistoryTitle>
      {/* prettier-ignore */}
      <WorkHistoryDescription>
        {work.description.map((desc, index) => (
          <Fragment key={index}>
            <p className="leading-6 tracking-tight mb-4 text-muted-foreground" dangerouslySetInnerHTML={{ __html: desc }} />
          </Fragment>
        ))}
        {work.contributions.length > 0 && !showContributions && (
          <button
            className="text-blue-600 text-foreground-text cursor-pointer text-sm transition-all *:hover:underline dark:text-blue-400"
            onClick={() => setShowContributions(true)}
          >
            [ Show Contributions ]
          </button>
        )}
        {showContributions && (
          <>
            <h3 className="text-lg font-semibold mt-4">Key Contributions:</h3>
            <ul className="list-disc list-inside mt-2 space-y-1">
              {work.contributions.map((contribution, index) => (
                <li key={index} className="text-sm leading-6 tracking-tight text-muted-foreground" dangerouslySetInnerHTML={{ __html: contribution }} />
              ))}
            </ul>
          </>)}
      </WorkHistoryDescription>
    </WorkHistory>
  );
}
