import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Upload } from "lucide-react";

interface FileUploadProps {
  onFileSelect: (file: File, category: string) => void;
  className?: string;
}

export default function FileUpload({ onFileSelect, className }: FileUploadProps) {
  const [file, setFile] = useState<File | null>(null);
  const [category, setCategory] = useState<string>("image");
  const [dragActive, setDragActive] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const newFile = e.dataTransfer.files[0];
      setFile(newFile);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const newFile = e.target.files[0];
      setFile(newFile);
    }
  };

  const handleSubmit = () => {
    if (file && category) {
      onFileSelect(file, category);
    }
  };

  const fileTypes = {
    image: ["image/jpeg", "image/png", "image/gif", "image/webp"],
    audio: ["audio/mp3", "audio/wav", "audio/ogg", "audio/mpeg"],
    video: ["video/mp4", "video/webm", "video/ogg"]
  };

  const getAcceptedFileTypes = () => {
    if (category === "all") return "";
    return fileTypes[category as keyof typeof fileTypes].join(",");
  };

  return (
    <div className={cn("space-y-4", className)}>
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-stegoshield-light mb-2">Upload File for Scanning</h2>
        <p className="text-sm text-stegoshield-light/70">
          Select a file to scan for hidden malware or steganography
        </p>
      </div>
      
      <div
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
        className={cn(
          "border-2 border-dashed rounded-lg p-8 transition-all text-center",
          dragActive ? "border-stegoshield-accent bg-stegoshield-accent/10" : "border-stegoshield-light/20",
          file ? "bg-green-500/10 border-green-500/30" : "hover:bg-stegoshield-light/5"
        )}
      >
        <input
          ref={inputRef}
          type="file"
          className="hidden"
          onChange={handleFileChange}
          accept={getAcceptedFileTypes()}
        />
        
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="rounded-full bg-stegoshield-accent/20 p-3">
            <Upload className="h-6 w-6 text-stegoshield-accent" />
          </div>
          
          {file ? (
            <div>
              <p className="text-stegoshield-light font-medium">{file.name}</p>
              <p className="text-stegoshield-light/70 text-sm">
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
          ) : (
            <div>
              <p className="text-stegoshield-light font-medium">
                Drag and drop or click to upload
              </p>
              <p className="text-stegoshield-light/70 text-sm">
                JPG, PNG, MP3, MP4, WAV & more
              </p>
            </div>
          )}
          
          {!file && (
            <Button
              variant="outline" 
              onClick={() => inputRef.current?.click()}
              className="border-stegoshield-accent text-stegoshield-accent hover:bg-stegoshield-accent/20 hover:text-stegoshield-accent"
            >
              Select File
            </Button>
          )}
        </div>
      </div>
      
      <div className="mt-4 space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-stegoshield-light">
            File Category
          </label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="bg-stegoshield-dark/50 border-stegoshield-accent/20 text-stegoshield-light hover:border-stegoshield-accent/40">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent className="bg-stegoshield-dark border-stegoshield-accent/20">
              <SelectItem value="image" className="text-stegoshield-light hover:bg-stegoshield-accent/20">Image</SelectItem>
              <SelectItem value="audio" className="text-stegoshield-light hover:bg-stegoshield-accent/20">Audio</SelectItem>
              <SelectItem value="video" className="text-stegoshield-light hover:bg-stegoshield-accent/20">Video</SelectItem>
              <SelectItem value="all" className="text-stegoshield-light hover:bg-stegoshield-accent/20">All Types</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <Button 
          onClick={handleSubmit}
          disabled={!file}
          className="w-full bg-stegoshield-accent text-stegoshield-dark hover:bg-stegoshield-accent/90"
        >
          Scan File
        </Button>
      </div>
    </div>
  );
}
