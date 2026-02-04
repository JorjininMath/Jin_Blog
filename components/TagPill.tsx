import Link from "next/link";

type TagPillProps = {
  tag: string;
};

export const TagPill = ({ tag }: TagPillProps) => {
  return (
    <Link
      href={`/tags/${encodeURIComponent(tag)}`}
      className="rounded-full bg-white px-3 py-1 text-xs font-medium text-mist ring-1 ring-black/[0.08] transition hover:bg-graphite hover:text-ink hover:ring-black/[0.12]"
    >
      {tag}
    </Link>
  );
};
