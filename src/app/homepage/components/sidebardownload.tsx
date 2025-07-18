import { SinglePostPage } from "@/app/types/post";
import { PostSetting } from "@/app/types/post";

interface singlepost {
  data: SinglePostPage;
  settingData: PostSetting;
}

export default function SidebarAdDownload({ data, settingData }: singlepost) {
  const { downloadPdfButton, downloadPdfLink, downloadPdfContent } = data;

  const { advertisementScript, advertisementImage } = settingData;
  return (
    <div className="space-y-4">
      {/* Advertisement */}
      {!advertisementScript && advertisementImage?.node?.mediaItemUrl && (
        <img
          src={advertisementImage.node.mediaItemUrl}
          alt="Advertisement"
          width={300}
          className="mx-auto rounded-md"
          height={250}
        />
      )}

      {/* Download PDF */}
      <div className="rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm">
        <div className="p-4">
          <button
            className="inline-flex items-center justify-center gap-2 w-full h-8 px-4 py-2 text-xs font-medium text-white bg-gray-800 hover:bg-gray-700 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            onClick={() => window.open(downloadPdfLink, "_blank")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3 mr-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" x2="12" y1="15" y2="3" />
            </svg>
            {downloadPdfButton}
          </button>
          <p className="text-xs text-gray-500 text-center mt-2">
            {downloadPdfContent}
          </p>
        </div>
      </div>
    </div>
  );
}
