export interface PackagingVariant {
  id: string;
  name: string;
  color: string;
  imageUrl?: string;
}

export interface TextureProfile {
  id: string;
  name: string;
  description: string;
  icon?: string;
}

export interface Ingredient {
  id: string;
  name: string;
  description: string;
  benefit: string;
  percentage?: string;
}

export interface PainPointSolution {
  id: string;
  painPoint: string;
  solution: string;
  category: string;
}

export interface ProductData {
  id: string;
  name: string;
  description: string;
  packagingVariants: PackagingVariant[];
  textureProfiles: TextureProfile[];
  keyIngredients: Ingredient[];
  painPointSolutions: PainPointSolution[];
  claims: string[];
  imageUrl?: string;
}

