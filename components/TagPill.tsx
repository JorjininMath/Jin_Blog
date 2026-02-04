import Link from "next/link";

type TagPillProps = {
  tag: string;
};

export const TagPill = ({ tag }: TagPillProps) => {
  return (
    <Link
      href={`/tags/${encodeURIComponent(tag)}`}
      className="rounded-full border border-white/10 px-3 py-1 text-xs text-mist transition hover:border-glow hover:text-white"
    >
      {tag}
    </Link>
  );
};
