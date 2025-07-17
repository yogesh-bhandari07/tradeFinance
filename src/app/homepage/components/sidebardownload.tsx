import { SinglePostPage } from "@/app/types/post";

interface singlepost{
  data:SinglePostPage
}

export default function SidebarAdDownload({data}:singlepost) {
  const {downloadPdfButton,downloadPdfLink,downloadPdfContent}=data;
  return (
    <div className="space-y-4">
      {/* Advertisement */}
      <div className="rounded-lg text-gray-900 bg-gray-50 shadow-sm border-2 border-dashed border-gray-200">
        <div className="p-6 text-center">
          <div className="text-gray-400 mb-2">
            <div className="w-10 h-10 bg-gray-200 rounded-lg mx-auto mb-2" />
            <h4 className="font-medium text-xs text-gray-500">Advertisement</h4>
            <p className="text-xs text-gray-400">300x250 Banner</p>
          </div>
        </div>
      </div>

      {/* Download PDF */}
      <div className="rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm">
        <div className="p-4">
          <button className="inline-flex items-center justify-center gap-2 w-full h-8 px-4 py-2 text-xs font-medium text-white bg-gray-800 hover:bg-gray-700 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500" onClick={() => window.open(downloadPdfLink, "_blank")}>
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
