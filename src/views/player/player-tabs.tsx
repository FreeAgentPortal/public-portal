import { useRouter } from "next/navigation";
import { useMemo } from "react";
type Props = {
  tabs: readonly { name: string; slug: string }[];
  currentTabSlug: string;
  searchParams: URLSearchParams;
};
export default function ProfileTabs({
  tabs,
  currentTabSlug,
  searchParams,
}: Props) {
  const router = useRouter();

  const activeTab = useMemo(() => {
    const index = tabs.findIndex((t) => t.slug === currentTabSlug);
    return index >= 0 ? index : 0;
  }, [currentTabSlug]);

  const setActiveTab = (index: number) => {
    const slug = tabs[index].slug;
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("tab", slug);
    router.replace(`?${newParams.toString()}`);
  };

  return (
    <div className='mt-6 border-b border-white/20 flex gap-6 text-sm'>
      {tabs.map((tab, i) => (
        <span
          key={i}
          className={`pb-2 cursor-pointer ${
            i === activeTab
              ? "border-b-2 border-blue-400 text-white"
              : "text-white/60 hover:text-white"
          }`}
          onClick={() => {
            setActiveTab(i);
          }}
        >
          {tab.name}
        </span>
      ))}
    </div>
  );
}
