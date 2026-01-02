"use client";

import { Facebook, Linkedin, Copy, Instagram } from "lucide-react";
import { useState } from "react";

export default function SocialShare({ url }) {
  const [copied, setCopied] = useState(false);

  const copyLink = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center justify-center gap-4 mt-10">
      {/* Facebook */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          url
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full border hover:bg-gray-100 transition"
      >
        <Facebook className="w-5 h-5 text-[#1877F2]" /> {/* Facebook Blue */}
      </a>

      {/* LinkedIn */}
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          url
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full border hover:bg-gray-100 transition"
      >
        <Linkedin className="w-5 h-5 text-[#0A66C2]" /> {/* LinkedIn Blue */}
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full border hover:bg-gray-100 transition"
      >
        <Instagram className="w-5 h-5 text-[#E4405F]" /> {/* Instagram Pink/Red */}
      </a>

      {/* Copy Link */}
      <button
        onClick={copyLink}
        className="p-2 rounded-full border hover:bg-gray-100 transition"
      >
        <Copy className="w-5 h-5 text-gray-600" />
        <span className="sr-only">Copy Link</span>
      </button>

      {/* Copied Message */}
      {copied && (
        <span className="text-sm text-green-600 ml-2">Link copied!</span>
      )}
    </div>
  );
}
