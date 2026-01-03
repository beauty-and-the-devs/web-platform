"use client";

import { PlotSection } from "@/types/video";

interface PlotStructureEditorProps {
  sections: PlotSection[];
  onSectionsChange: (sections: PlotSection[]) => void;
}

const sectionConfig = {
  HOOK: { icon: "⚡️", label: "HOOK" },
  PROBLEM: { icon: "⚠️", label: "PROBLEM" },
  DEMO: { icon: "💧", label: "DEMO" },
  CTA: { icon: "🛒", label: "CTA" },
};

export default function PlotStructureEditor({
  sections,
  onSectionsChange,
}: PlotStructureEditorProps) {
  const handleContentChange = (id: string, content: string) => {
    const updatedSections = sections.map((section) =>
      section.id === id ? { ...section, content } : section
    );
    onSectionsChange(updatedSections);
  };

  return (
    <div className="bg-white rounded-[10px] border border-secondary-dark/20 p-6">
      <div className="mb-4">
        <h2 className="text-xl font-medium text-primary-main mb-1">
          Plot Structure
        </h2>
        <p className="text-xs text-secondary-dark">(Agent Output)</p>
      </div>

      <div className="space-y-4 relative">
        {sections.map((section, index) => {
          const config = sectionConfig[section.type];
          const isLast = index === sections.length - 1;
          const contentType = section.contentType || 
            (section.content.toLowerCase().includes("visual") || 
             section.content.toLowerCase().includes("close-up") ||
             section.content.toLowerCase().includes("test") ||
             section.content.toLowerCase().includes("absorption")
              ? "Visual" : "Text");

          return (
            <div key={section.id} className="relative">
              <div className="bg-white border border-secondary-dark/20 rounded-[10px] p-[17px] pb-1">
                <div className="flex gap-3">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-secondary-main rounded-[10px] flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">{config.icon}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-semibold text-primary-dark">
                        {config.label}
                      </span>
                      <span className="px-2 py-0.5 bg-secondary-main rounded text-xs text-secondary-dark">
                        {section.duration}
                      </span>
                    </div>
                    <div className="text-xs text-secondary-dark mb-1">
                      {contentType === "Visual" ? "Visual:" : "Text:"}
                    </div>
                    <div className="text-xs text-primary-dark leading-4">
                      {section.content || `Enter ${contentType.toLowerCase()} description...`}
                    </div>
                  </div>
                </div>
              </div>

              {/* Connector Line */}
              {!isLast && (
                <div className="absolute left-6 top-[64px] w-0.5 h-16 bg-secondary-dark/30" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
