export interface PlotSection {
  id: string;
  type: "HOOK" | "PROBLEM" | "DEMO" | "CTA";
  title: string;
  duration: string; // "0-3s", "3-6s" 등
  content: string;
  order: number;
}

export interface VideoVariation {
  id: string;
  style: string; // "Review Style", "ASMR Style", "Drama Style"
  thumbnailUrl?: string;
  videoUrl?: string;
  duration: number; // seconds
  isSelected?: boolean;
}

export interface GenerationReport {
  fidelityScore: number; // 0-100
  targetAudience: string;
  estimatedEngagement: {
    views: string;
    likes: string;
    shares: string;
  };
  generationTime: string;
  model: string;
}

export interface VideoGenerationData {
  id: string;
  plotStructure: PlotSection[];
  variations: VideoVariation[];
  report: GenerationReport;
  currentVariationId?: string;
}

