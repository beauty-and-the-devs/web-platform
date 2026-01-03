"use client";

export default function FileUploadCard() {
  return (
    <div className="bg-white rounded-md border border-secondary-dark/20 p-[42px]">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="w-14 h-14 bg-secondary-main rounded-2xl flex items-center justify-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-secondary-dark"
          >
            <path
              d="M3 15H21M3 15V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V15M3 15L7 11M21 15L17 11M7 11L12 6M7 11H12M17 11L12 6M17 11H12M12 6V15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="text-center space-y-1">
          <p className="text-sm text-black">
            Drag and drop PDF files here, or click to browse
          </p>
          <p className="text-xs text-secondary-dark">
            CustomFileRAG - Upload brand guidelines, research papers, or trend reports
          </p>
        </div>
        <button className="px-5 py-2 bg-background-paper border border-secondary-dark/20 rounded-[18px] text-sm text-black hover:bg-secondary-main transition-colors">
          Browse Files
        </button>
      </div>
    </div>
  );
}

