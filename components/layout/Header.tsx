"use client";

export default function Header() {
  return (
    <header className="fixed top-0 right-0 left-[280px] h-16 bg-white border-b border-secondary-dark/20 flex items-center justify-end px-6 z-10">
      <div className="flex items-center gap-4">
        {/* Date Filter */}
        <button className="flex items-center gap-2 px-4 py-2 border border-secondary-dark/20 rounded-md text-sm text-secondary-dark hover:bg-secondary-main transition-colors">
          <span>📅</span>
          <span>Last 30 Days</span>
          <span>▼</span>
        </button>

        {/* User Profile */}
        <button className="w-9 h-9 rounded-full bg-primary-light flex items-center justify-center text-white text-sm font-medium">
          U
        </button>
      </div>
    </header>
  );
}

