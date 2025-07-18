import { PostSetting } from "@/app/types/post";

interface singlepost {
  data: PostSetting;
}
export function SubscribeCard({ data }: singlepost) {
  const { heading, description, subscribeFreeButton, subscribeFreeButtonLink } =
    data;
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-6 border shadow-sm ">
      <h4 className="font-bold text-base text-blue-900 mb-2">
        {heading ?? ""}
      </h4>
      <p className="text-sm text-blue-700 mb-4">{description ?? ""}</p>
      <a
        href={subscribeFreeButtonLink ?? "#"}
        className="inline-flex items-center justify-center gap-2 w-full h-9 rounded-md px-3 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white transition-all"
      >
        {subscribeFreeButton ?? ""}
      </a>
    </div>
  );
}
