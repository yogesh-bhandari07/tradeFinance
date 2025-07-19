import { PostSetting } from "@/app/types/post";

interface SubscribeCardProps {
  data: PostSetting;
}

export function SubscribeCard({ data }: SubscribeCardProps) {
  const {
    heading,
    description,
    subscribeFreeButton,
    subscribeFreeButtonLink,
  } = data;

  // Provide fallback values if any field is missing
  const finalHeading = heading || "Stay Informed with Weekly Trade Finance Brief";
  const finalDescription = description || "Subscribe to our weekly newsletter to stay updated with the latest market insights.";
  const finalButtonText = subscribeFreeButton || "Subscribe Free";
  const finalButtonLink = subscribeFreeButtonLink || "/subscribe";

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-6 border shadow-sm">
      <h4 className="font-bold text-base text-blue-900 mb-2">
        {finalHeading}
      </h4>
      <p className="text-sm text-blue-700 mb-4">
        {finalDescription}
      </p>
      <button
        className="inline-flex items-center justify-center gap-2 w-full h-9 rounded-md px-3 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white transition-all"
        onClick={() => window.location.href = finalButtonLink}
      >
        {finalButtonText}
      </button>
    </div>
  );
}
