"use client";

interface ProductInformationCardProps {
  name: string;
  description: string;
  onNameChange?: (name: string) => void;
  onDescriptionChange?: (description: string) => void;
  editable?: boolean;
}

export default function ProductInformationCard({
  name,
  description,
  onNameChange,
  onDescriptionChange,
  editable = false,
}: ProductInformationCardProps) {
  return (
    <div className="bg-white rounded-[10px] border border-secondary-dark/20 p-8">
      <h3 className="text-lg font-semibold text-primary-main mb-6">
        제품 정보
      </h3>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-primary-main mb-2">
            제품명
          </label>
          {editable ? (
            <input
              type="text"
              value={name}
              onChange={(e) => onNameChange?.(e.target.value)}
              className="w-full px-4 py-3 border border-secondary-dark/20 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-transparent"
              placeholder="제품명을 입력하세요"
            />
          ) : (
            <p className="text-base font-semibold text-primary-main">{name}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-primary-main mb-2">
            설명
          </label>
          {editable ? (
            <textarea
              value={description}
              onChange={(e) => onDescriptionChange?.(e.target.value)}
              rows={4}
              className="w-full px-4 py-3 border border-secondary-dark/20 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-transparent resize-none"
              placeholder="제품 설명을 입력하세요"
            />
          ) : (
            <p className="text-sm text-secondary-dark leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

