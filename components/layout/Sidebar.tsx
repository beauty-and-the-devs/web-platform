"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navigationItems = [
  { name: "Dashboard", href: "/dashboard", icon: "📊" },
  { name: "Insight", href: "/insight", icon: "💡" },
  { name: "Product", href: "/product-atelier", icon: "🎨" },
  { name: "Studio", href: "/creative-studio", icon: "🎬" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-[280px] bg-primary-main flex flex-col">
      {/* Logo */}
      <div className="h-20 flex items-center px-6 border-b border-white/10">
        <h1 className="text-xl font-medium text-white">AMOREPACIFIC</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-1">
        {navigationItems.map((item) => {
          const isActive = pathname === item.href || pathname?.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-md transition-colors",
                isActive
                  ? "bg-primary-light text-white"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              )}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Settings */}
      <div className="px-4 py-4 border-t border-white/10">
        <Link
          href="/settings"
          className="flex items-center gap-3 px-4 py-3 rounded-md text-white/70 hover:text-white hover:bg-white/10 transition-colors"
        >
          <span className="text-lg">⚙️</span>
          <span className="text-sm font-medium">Settings</span>
        </Link>
      </div>
    </aside>
  );
}

