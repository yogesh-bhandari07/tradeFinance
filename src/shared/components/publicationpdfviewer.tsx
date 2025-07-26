import React, { useState } from "react";
import { Button } from "@/shared/components/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/shared/components/collapsible";
import {
  ChevronDown,
  ChevronUp,
  Download,
  Eye,
  ZoomIn,
  ZoomOut,
  RotateCw,
  Maximize2,
} from "lucide-react";

interface PublicationPDFViewerProps {
  title: string;
  downloadUrl: string;
  previewUrl?: string;
  coverImage: string;
}

export const PublicationPDFViewer = ({
  title,
  downloadUrl,
  coverImage,
}: PublicationPDFViewerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [zoom, setZoom] = useState(100);

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex flex-col gap-4">
          <CardTitle className="text-lg lg:text-xl">
            Publication Access
          </CardTitle>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button
              className="flex-1 bg-ttp-orange hover:bg-ttp-orange/90"
              onClick={() => window.open(downloadUrl, "_blank")}
            >
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
            <Collapsible open={isOpen} onOpenChange={setIsOpen}>
              <CollapsibleTrigger asChild>
                <Button variant="outline" className="flex-1">
                  <Eye className="w-4 h-4 mr-2" />
                  {isOpen ? "Hide Preview" : "Show Preview"}
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 ml-2" />
                  ) : (
                    <ChevronDown className="w-4 h-4 ml-2" />
                  )}
                </Button>
              </CollapsibleTrigger>
            </Collapsible>
          </div>
        </div>
      </CardHeader>

      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleContent>
          <CardContent>
            <div className="border rounded-lg overflow-hidden bg-gray-50">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border-b bg-white gap-4">
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setZoom(Math.max(50, zoom - 25))}
                  >
                    <ZoomOut className="w-4 h-4" />
                  </Button>
                  <span className="text-sm font-medium min-w-[3rem] text-center">
                    {zoom}%
                  </span>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setZoom(Math.min(200, zoom + 25))}
                  >
                    <ZoomIn className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <RotateCw className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Maximize2 className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-sm text-gray-600">Page 1 of 84</p>
              </div>

              <div className="min-h-[400px] lg:min-h-[600px] flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="mb-6 max-w-xs mx-auto">
                    <img
                      src={coverImage}
                      alt={title}
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <Eye className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                    <p className="font-medium text-gray-700">PDF Preview</p>
                    <p className="text-sm text-gray-500 max-w-md mx-auto">
                      Interactive PDF reader would be displayed here. Click
                      Download PDF to access the full document.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};
