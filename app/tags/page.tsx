import { getAllTags } from "@/lib/content";
import { TagPill } from "@/components/TagPill";

export default function TagsPage() {
  const tags = getAllTags();

  return (
    <div className="space-y-8">
      <div>
        <p className="section-title">Tags</p>
        <h2 className="mt-2 text-2xl font-semibold">标签归档</h2>
        <p className="mt-3 text-sm text-mist">
          所有文章与周记的标签集合，便于筛选与检索。
        </p>
      </div>

      <div className="glass-card flex flex-wrap gap-3 p-6">
        {tags.map((tag) => (
          <TagPill key={tag} tag={tag} />
        ))}
      </div>
    </div>
  );
}
