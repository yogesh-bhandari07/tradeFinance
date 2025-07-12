export default function Contributors() {
  return (
    <div className="rounded-lg border border-gray-200 text-gray-900 bg-white shadow-sm">
      <div className="p-4">
        <h3 className="font-semibold text-sm mb-3 text-gray-900">Contributors</h3>

        {/* Author */}
        <div className="mb-4">
          <div className="flex items-center gap-1 mb-2">
            <span className="inline-flex items-center rounded-full border bg-purple-100 text-purple-700 border-purple-200 text-xs font-semibold px-2 py-0.5">
              Author
            </span>
          </div>
          <div className="flex items-start gap-2">
            <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                alt="Author"
                className="w-full h-full object-cover"
              />
            </span>
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-xs text-gray-900 truncate">Deepesh Patel</h4>
              <p className="text-xs text-orange-600 font-medium">TTP Editorial</p>
              <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                Senior correspondent covering global trade finance and regulatory affairs.
              </p>
            </div>
          </div>
        </div>

        {/* Interviews */}
        <div className="mb-4">
          <div className="flex items-center gap-1 mb-2">
            <span className="inline-flex items-center rounded-full border bg-green-100 text-green-700 border-green-200 text-xs font-semibold px-2 py-0.5">
              Interviews
            </span>
          </div>
          <div className="space-y-2 text-xs">
            <div>
              <div className="font-medium text-gray-900 truncate">Wayne Mills</div>
              <div className="text-orange-600 truncate">Atom Advisory</div>
              <div className="text-gray-600 truncate">Market Analysis</div>
            </div>
            <div>
              <div className="font-medium text-gray-900 truncate">Alexia Somolet</div>
              <div className="text-orange-600 truncate">Marsh</div>
              <div className="text-gray-600 truncate">Risk Assessment</div>
            </div>
          </div>
        </div>

        {/* Featuring */}
        <div className="mb-4">
          <div className="flex items-center gap-1 mb-2">
            <span className="inline-flex items-center rounded-full border bg-teal-100 text-teal-700 border-teal-200 text-xs font-semibold px-2 py-0.5">
              Featuring
            </span>
          </div>
          <div className="text-xs">
            <div className="font-medium text-gray-900 truncate">Carter Hoffman</div>
            <div className="text-orange-600 truncate">Independent Consultant</div>
            <div className="text-gray-600 truncate">Regulatory Expert</div>
          </div>
        </div>

        {/* Edited by */}
        <div>
          <div className="flex items-center gap-1 mb-2">
            <span className="inline-flex items-center rounded-full border bg-gray-200 text-gray-900 border-gray-300 text-xs font-semibold px-2 py-0.5">
              Edited by
            </span>
          </div>
          <div className="text-xs">
            <div className="font-medium text-gray-900 truncate">Sarah Chen</div>
            <div className="text-orange-600 truncate">TTP Editorial</div>
            <div className="text-gray-600 truncate">Managing Editor</div>
          </div>
        </div>
      </div>
    </div>
  );
}
