"use client";

import { useState } from "react";
import { PlotSection } from "@/types/video";

interface PlotStructureEditorProps {
  sections: PlotSection[];
  onSectionsChange: (sections: PlotSection[]) => void;
}

const sectionTypes = [
  { type: "HOOK", label: "HOOK", color: "bg-accent-success" },
  { type: "PROBLEM", label: "PROBLEM", color: "bg-accent-warning" },
  { type: "DEMO", label: "DEMO", color: "bg-primary-light" },
  { type: "CTA", label: "CTA", color: "bg-accent-error" },
];

export default function PlotStructureEditor({
  sections,
  onSectionsChange,
}: PlotStructureEditorProps) {
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (draggedIndex === null) return;

    const newSections = [...sections];
    const draggedSection = newSections[draggedIndex];
    newSections.splice(draggedIndex, 1);
    newSections.splice(index, 0, draggedSection);
    
    // 순서 업데이트
    const updatedSections = newSections.map((section, idx) => ({
      ...section,
      order: idx,
    }));

    onSectionsChange(updatedSections);
    setDraggedIndex(index);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  const handleSectionEdit = (id: string, field: keyof PlotSection, value: string) => {
    const updatedSections = sections.map((section) =>
      section.id === id ? { ...section, [field]: value } : section
    );
    onSectionsChange(updatedSections);
  };

  const getSectionTypeConfig = (type: PlotSection["type"]) => {
    return sectionTypes.find((st) => st.type === type) || sectionTypes[0];
  };

  return (
    <div className="bg-white rounded-[10px] border border-secondary-dark/20 p-6">
      <h2 className="text-xl font-semibold text-primary-main mb-4">
        Plot Structure
      </h2>
      <p className="text-sm text-secondary-dark mb-6">
        비디오 구조를 편집하고 순서를 조정하세요
      </p>

      <div className="space-y-3">
        {sections.map((section, index) => {
          const typeConfig = getSectionTypeConfig(section.type);
          return (
            <div
              key={section.id}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={(e) => handleDragOver(e, index)}
              onDragEnd={handleDragEnd}
              className={`flex items-center gap-4 p-4 rounded-md border-2 border-transparent hover:border-primary-light/30 cursor-move transition-all ${
                draggedIndex === index ? "opacity-50" : ""
              }`}
            >
              {/* Drag Handle */}
              <div className="flex flex-col gap-1 cursor-grab active:cursor-grabbing">
                <div className="w-1 h-1 rounded-full bg-secondary-dark/40"></div>
                <div className="w-1 h-1 rounded-full bg-secondary-dark/40"></div>
                <div className="w-1 h-1 rounded-full bg-secondary-dark/40"></div>
              </div>

              {/* Section Type Badge */}
              <div
                className={`${typeConfig.color} text-white px-3 py-1 rounded text-xs font-semibold min-w-[80px] text-center`}
              >
                {typeConfig.label}
              </div>

              {/* Duration */}
              <div className="text-sm text-secondary-dark min-w-[60px]">
                {section.duration}
              </div>

              {/* Title Input */}
              <input
                type="text"
                value={section.title}
                onChange={(e) => handleSectionEdit(section.id, "title", e.target.value)}
                className="flex-1 px-3 py-2 border border-secondary-dark/20 rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary-light"
                placeholder="섹션 제목"
              />

              {/* Content Input */}
              <input
                type="text"
                value={section.content}
                onChange={(e) => handleSectionEdit(section.id, "content", e.target.value)}
                className="flex-1 px-3 py-2 border border-secondary-dark/20 rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary-light"
                placeholder="섹션 내용"
              />
            </div>
          );
        })}
      </div>

      {/* Add Section Button */}
      <button
        onClick={() => {
          const newSection: PlotSection = {
            id: `section-${Date.now()}`,
            type: "HOOK",
            title: "",
            duration: "0-3s",
            content: "",
            order: sections.length,
          };
          onSectionsChange([...sections, newSection]);
        }}
        className="mt-4 w-full py-2 border-2 border-dashed border-secondary-dark/30 rounded text-sm text-secondary-dark hover:border-primary-light hover:text-primary-light transition-colors"
      >
        + 섹션 추가
      </button>
    </div>
  );
}

