import Header from "@/components/Header";
import { ImageUploader } from "@/components/ImageUploader";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { createFileRoute } from "@tanstack/react-router";
import { Code, Copy, Github } from "lucide-react";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const handleImageCropped = (blob: Blob) => {
    console.log("Cropped image blob:", blob);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Header />

      <main className="mt-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Shadcn Image Uploader</h1>
          <p className="text-xl text-muted-foreground">
            A reusable React component for uploading, previewing, and cropping
            images
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Button asChild>
              <a
                href="https://github.com/0xRasla/shadcn-image-uploader"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button variant="outline">
              <Code className="mr-2 h-4 w-4" />
              Copy Component
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Live Demo</h2>
            <ImageUploader
              onImageCropped={handleImageCropped}
              aspectRatio={1}
            />
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Features</h2>
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-2 list-disc pl-5">
                  <li>Drag & drop or file selection</li>
                  <li>File type validation</li>
                  <li>File size validation</li>
                  <li>Image preview</li>
                  <li>Interactive crop with zoom and pan</li>
                  <li>Aspect ratio control</li>
                  <li>Generates Blob or File output</li>
                  <li>Built with Shadcn UI components</li>
                  <li>Fully customizable</li>
                  <li>TypeScript support</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">Full Component Source</h2>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>ImageUploader.tsx</span>
                <Button
                  variant="outline"
                  onClick={() => {
                    navigator.clipboard
                      .writeText(`import { cn } from \"@/lib/utils\";
import { Check, Copy, Trash2, Upload, ZoomIn, ZoomOut } from \"lucide-react\";
import { useCallback, useRef, useState } from \"react\";
import Cropper from \"react-easy-crop\";
import { Button } from \"./ui/button\";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from \"./ui/card\";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from \"./ui/dialog\";
import { Slider } from \"./ui/slider\";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from \"./ui/tooltip\";
\ninterface Point { x: number; y: number; }\ninterface Area { x: number; y: number; width: number; height: number; }\n\n/**\n * Props for the ImageUploader component\n */\ninterface ImageUploaderProps {\n  aspectRatio?: number;\n  maxSize?: number;\n  acceptedFileTypes?: string[];\n  className?: string;\n  onImageCropped?: (blob: Blob) => void;\n}\n\nexport function ImageUploader({\n  aspectRatio = 1,\n  maxSize = 5 * 1024 * 1024,\n  acceptedFileTypes = [\"image/jpeg\", \"image/png\", \"image/webp\"],\n  className,\n  onImageCropped,\n}: ImageUploaderProps) {\n  const [image, setImage] = useState<string | null>(null);\n  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);\n  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });\n  const [zoom, setZoom] = useState(1);\n  const [error, setError] = useState<string | null>(null);\n  const [previewImage, setPreviewImage] = useState<string | null>(null);\n  const [isCropDialogOpen, setIsCropDialogOpen] = useState(false);\n  const [isCopied, setIsCopied] = useState(false);\n  const inputRef = useRef<HTMLInputElement>(null);\n  // ...rest of the implementation\n}`);
                  }}
                >
                  <Copy className="mr-2 h-4 w-4" /> Copy
                </Button>
              </CardTitle>
              <CardDescription>
                <a
                  href="https://github.com/0xrasla/shadcn-image-uploader/blob/master/src/components/ImageUploader.tsx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  View on GitHub
                </a>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <details className="bg-muted p-4 rounded-md overflow-x-auto" open>
                <summary className="cursor-pointer font-mono text-sm mb-2">
                  Show/Hide Code
                </summary>
                <pre className="text-xs whitespace-pre-wrap">
                  <code>{`
import { cn } from "@/lib/utils";
import { Check, Copy, Trash2, Upload, ZoomIn, ZoomOut } from "lucide-react";
import { useCallback, useRef, useState } from "react";
import Cropper from "react-easy-crop";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Slider } from "./ui/slider";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

interface Point { x: number; y: number; }
interface Area { x: number; y: number; width: number; height: number; }

/**
 * Props for the ImageUploader component
 */
interface ImageUploaderProps {
  aspectRatio?: number;
  maxSize?: number;
  acceptedFileTypes?: string[];
  className?: string;
  onImageCropped?: (blob: Blob) => void;
}

export function ImageUploader({
  aspectRatio = 1,
  maxSize = 5 * 1024 * 1024,
  acceptedFileTypes = ["image/jpeg", "image/png", "image/webp"],
  className,
  onImageCropped,
}: ImageUploaderProps) {
  const [image, setImage] = useState<string | null>(null);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isCropDialogOpen, setIsCropDialogOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  // ...rest of the implementation
}`}</code>
                </pre>
              </details>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">Usage</h2>
          <Tabs defaultValue="basic">
            <TabsList>
              <TabsTrigger value="basic">Basic Usage</TabsTrigger>
              <TabsTrigger value="advanced">Advanced Options</TabsTrigger>
              <TabsTrigger value="props">Props</TabsTrigger>
            </TabsList>
            <TabsContent value="basic">
              <Card>
                <CardHeader>
                  <CardTitle>Basic Usage</CardTitle>
                  <CardDescription>
                    Simple implementation with default settings
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code>{`import { ImageUploader } from "@/components/ImageUploader";

function MyComponent() {
  const handleImageCropped = (blob) => {
    console.log("Cropped image blob:", blob);
  };

  return <ImageUploader onImageCropped={handleImageCropped} />;
}`}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="advanced">
              <Card>
                <CardHeader>
                  <CardTitle>Advanced Usage</CardTitle>
                  <CardDescription>
                    Customizing aspect ratio, file size, and accepted file types
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code>{`import { ImageUploader } from "@/components/ImageUploader";

function MyAdvancedComponent() {
  const handleImageCropped = (blob) => {
    // Create a file from the blob
    const file = new File([blob], "cropped-image.jpg", { type: "image/jpeg" });
    
    // Upload to server
    const formData = new FormData();
    formData.append("image", file);
    
    fetch("/api/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => console.log("Upload success:", data))
      .catch((error) => console.error("Upload error:", error));
  };

  return (
    <ImageUploader 
      aspectRatio={16/9}
      maxSize={10 * 1024 * 1024} // 10MB
      acceptedFileTypes={['image/jpeg', 'image/png', 'image/webp']}
      onImageCropped={handleImageCropped} 
      className="max-w-lg mx-auto"
    />
  );
}`}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="props">
              <Card>
                <CardHeader>
                  <CardTitle>Props Reference</CardTitle>
                  <CardDescription>
                    Available props and their descriptions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2 px-4">Prop</th>
                          <th className="text-left py-2 px-4">Type</th>
                          <th className="text-left py-2 px-4">Default</th>
                          <th className="text-left py-2 px-4">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-2 px-4">aspectRatio</td>
                          <td className="py-2 px-4">number</td>
                          <td className="py-2 px-4">1</td>
                          <td className="py-2 px-4">
                            The aspect ratio of the cropped image (width /
                            height)
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-4">maxSize</td>
                          <td className="py-2 px-4">number</td>
                          <td className="py-2 px-4">5242880 (5MB)</td>
                          <td className="py-2 px-4">
                            Maximum file size in bytes
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-4">acceptedFileTypes</td>
                          <td className="py-2 px-4">string[]</td>
                          <td className="py-2 px-4">
                            ['image/jpeg', 'image/png', 'image/webp']
                          </td>
                          <td className="py-2 px-4">Allowed file MIME types</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-4">className</td>
                          <td className="py-2 px-4">string</td>
                          <td className="py-2 px-4">undefined</td>
                          <td className="py-2 px-4">
                            CSS class name for the container
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4">onImageCropped</td>
                          <td className="py-2 px-4">
                            {"(blob: Blob) => void"}
                          </td>
                          <td className="py-2 px-4">undefined</td>
                          <td className="py-2 px-4">
                            Callback function that receives the cropped image as
                            a blob
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <footer className="mt-20 border-t pt-8 pb-16 text-center text-muted-foreground">
        <p>
          Built with{" "}
          <a
            href="https://ui.shadcn.com"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            shadcn/ui
          </a>{" "}
          and React
        </p>
      </footer>
    </div>
  );
}
