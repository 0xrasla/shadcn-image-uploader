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
import { Code, Github } from "lucide-react";

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
