export default function BentoArticle({
  title,
  mdColStart,
  mdColSpan,
  lgColStart,
  lgColSpan,
  xlColStart,
  xlColSpan,

  mdRowStart,
  mdRowSpan,
  lgRowStart,
  lgRowSpan,
  xlRowStart,
  xlRowSpan,

  className,
  children,
}: {
  title?: any;
  className?: string;

  mdColStart?: string;
  mdColSpan?: string;
  lgColStart?: string;
  lgColSpan?: string;
  xlColStart?: string;
  xlColSpan?: string;

  mdRowStart?: string;
  mdRowSpan?: string;
  lgRowStart?: string;
  lgRowSpan?: string;
  xlRowStart?: string;
  xlRowSpan?: string;

  children?: any;
}) {
  let someClass = "";
  if (mdColStart && mdColSpan)
    someClass += `md:col-[${mdColStart}/span_${mdColSpan}] `;
  if (lgColStart && lgColSpan)
    someClass += `lg:col-[${lgColStart}/span_${lgColSpan}] `;
  if (xlColStart && xlColSpan)
    someClass += `xl:col-[${xlColStart}/span_${xlColSpan}] `;
  if (mdRowStart && mdRowSpan)
    someClass += `md:row-[${mdRowStart}/span_${mdRowSpan}] `;
  if (lgRowStart && lgRowSpan)
    someClass += `lg:row-[${lgRowStart}/span_${lgRowSpan}] `;
  if (xlRowStart && xlRowSpan)
    someClass += `xl:row-[${xlRowStart}/span_${xlRowSpan}] `;
  if (className) someClass += className;

  return (
    // prettier-ignore
    <article
      className={`flex flex-col gap-1 p-[16px]
        rounded-[var(--border-radius-8)]
        bg-[var(--bg-secondary)] dark:bg-transparent
         border-[1px] border-[var(--bg-secondary)]
        _dark:bg-gradient-to-tr _dark:from-[var(--bg-primary-dark)] _dark:to-[var(--bg-secondary)]
        col-span-full row-span-2
        overflow-hidden
        ${someClass}`}
    >
      {title && (
        <h2 className="text-[calc(var(--h3-low))] text-[var(--color-accent-light)] dark:text-[var(--color-accent-dark)]">
          {title}
        </h2>
      )}
      {children}
    </article>
  );
}
