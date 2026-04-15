import { cn } from "@/lib/utils";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import type { ProjectItem } from "@/constants/projects";

export function ProjectCard({
  project,
  classNames,
}: {
  project: ProjectItem;
  classNames?: {
    container?: string;
    imageWrapper?: string;
    image?: string;
    content?: string;
    title?: string;
    description?: string;
    links?: string;
    buttons?: {
      combined?: string;
      github?: string;
      live?: string;
    };
  };
}) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xs border border-separator/10 bg-background transition-all hover:border-foreground/20",
        classNames?.container,
      )}
    >
      {/* Image Section */}
      <div
        className={cn(
          "relative h-64 w-full overflow-hidden",
          classNames?.imageWrapper,
        )}
      >
        <img
          src={project.imageId}
          alt={project.title}
          height={628}
          width={1024}
          className={cn(
            "absolute top-0 right-0 bottom-0 left-0 aspect-auto h-full w-full object-cover transition-transform duration-300 group-hover:scale-105",
            classNames?.image,
          )}
        />
      </div>

      {/* Content Section */}
      <div className={cn("flex flex-col gap-4 p-6", classNames?.content)}>
        {/* Badges */}
        {project.badge && project.badge.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {project.badge.map((badge) => badge)}
          </div>
        )}

        {/* Title */}
        <h2
          className={cn(
            "font-semibold text-lg leading-tight md:text-xl",
            project.title.includes("-") && "font-mono",
            classNames?.title,
          )}
        >
          {project.title}
        </h2>

        {/* Description */}
        <p
          className={cn(
            "max-w-lg text-muted-foreground text-sm leading-relaxed",
            classNames?.description,
          )}
        >
          {project.description}
        </p>

        {/* Links */}
        <div className={cn("flex gap-4 pt-2 font-mono", classNames?.links)}>
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              className={cn(
                "font-medium text-blue-600 text-sm transition-all hover:underline dark:text-blue-400",
                classNames?.buttons?.combined,
                classNames?.buttons?.github,
              )}
            >
              [github]
            </a>
          )}
          {project.link &&
            (project.unmaintained ? (
              <AlertDialog>
                <AlertDialogTrigger>
                  <button
                    type="button"
                    className={cn(
                      "font-medium text-blue-600 text-sm transition-all hover:underline dark:text-blue-400",
                      classNames?.buttons?.combined,
                      classNames?.buttons?.live,
                    )}
                  >
                    [live demo]
                  </button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Unmaintained project</AlertDialogTitle>
                    <AlertDialogDescription>
                      The project <b>{project.title}</b> is no longer maintained
                      and the live demo may be <b>outdated or non-functional</b>
                      . Are you sure you want to continue?
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>
                      <a href={project.link} target="_blank">
                        Continue
                      </a>
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            ) : (
              <a
                href={project.link}
                target="_blank"
                className="font-medium text-blue-600 text-sm transition-all hover:underline dark:text-blue-400"
              >
                [live demo]
              </a>
            ))}
        </div>
      </div>
    </div>
  );
}
