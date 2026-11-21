import React, { useState } from 'react';
import { CheckSquare, Square, FileText } from 'lucide-react';
import { documentChecklistCategories } from '../data/contentData';
import { useAppContext } from '../context/RouterContext';
import { CTAButton } from './CTAButton';

type PresetType = 'All' | 'Student File' | 'Tourist / Visit' | 'Work / PR';

const presetCategories: Record<PresetType, string[]> = {
  All: ['identity', 'financial', 'education', 'employment', 'travel', 'additional'],
  'Student File': ['identity', 'financial', 'education', 'additional'],
  'Tourist / Visit': ['identity', 'financial', 'employment', 'travel', 'additional'],
  'Work / PR': ['identity', 'education', 'employment', 'additional'],
};

export const DocumentChecklist: React.FC = () => {
  const { openConsultationModal } = useAppContext();
  const [preset, setPreset] = useState<PresetType>('All');
  const [activeId, setActiveId] = useState(documentChecklistCategories[0].id);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const visibleCategories = documentChecklistCategories.filter((c) =>
    presetCategories[preset].includes(c.id)
  );

  const activeCategory =
    visibleCategories.find((c) => c.id === activeId) || visibleCategories[0];

  const totalVisibleItems = visibleCategories.reduce((sum, cat) => sum + cat.items.length, 0);
  const completedCount = visibleCategories.reduce(
    (sum, cat) =>
      sum + cat.items.filter((it) => checkedItems[`${cat.id}:${it.name}`]).length,
    0
  );

  const toggleItem = (key: string) => {
    setCheckedItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handlePresetChange = (nextPreset: PresetType) => {
    setPreset(nextPreset);
    const allowed = presetCategories[nextPreset];
    if (!allowed.includes(activeId)) {
      setActiveId(allowed[0]);
    }
  };

  return (
    <section id="document-checklist" className="py-16 sm:py-20 bg-[#F6F8FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.16em] uppercase text-[#002D7A] mb-2">
              Document Readiness
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#001952] tracking-tight leading-tight">
              Prepare With Confidence.
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Filter by journey type and check off documents you have already gathered before
              your consultation.
            </p>
          </div>
          <CTAButton
            variant="primary"
            size="md"
            showArrow
            onClick={() =>
              openConsultationModal({
                visaCategory:
                  preset === 'Student File'
                    ? 'Student Visa'
                    : preset === 'Tourist / Visit'
                      ? 'Tourist Visa'
                      : preset === 'Work / PR'
                        ? 'Work Visa'
                        : '',
                source: 'Document Checklist',
              })
            }
          >
            Request Tailored Checklist
          </CTAButton>
        </div>

        {/* Journey Type Preset & Readiness Counter */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white rounded-xl border border-slate-200 p-3 sm:px-5">
          <div className="flex flex-wrap items-center gap-1.5">
            {(['All', 'Student File', 'Tourist / Visit', 'Work / PR'] as PresetType[]).map((p) => {
              const isSelected = preset === p;
              return (
                <button
                  key={p}
                  type="button"
                  onClick={() => handlePresetChange(p)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                    isSelected
                      ? 'bg-[#001952] text-[#F8D77A]'
                      : 'bg-[#F6F8FC] text-slate-600 hover:text-[#001952]'
                  }`}
                >
                  {p}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3 text-xs font-semibold text-[#001952] tabular-nums">
            <span>
              {completedCount} of {totalVisibleItems} sample items checked
            </span>
            <div className="w-24 h-1.5 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#F2BA49] transition-all duration-200"
                style={{
                  width: `${totalVisibleItems ? Math.round((completedCount / totalVisibleItems) * 100) : 0}%`,
                }}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Category Tabs */}
          <div
            className="lg:col-span-4 flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0"
            role="tablist"
            aria-label="Document checklist categories"
          >
            {visibleCategories.map((cat) => {
              const isActive = cat.id === activeCategory.id;
              const catChecked = cat.items.filter(
                (i) => checkedItems[`${cat.id}:${i.name}`]
              ).length;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveId(cat.id)}
                  className={`text-left px-4 py-3.5 rounded-xl border transition-all whitespace-nowrap lg:whitespace-normal shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#001952] text-white border-[#001952] shadow-sm'
                      : 'bg-white text-[#172033] border-slate-200 hover:border-[#002D7A]/40'
                  }`}
                >
                  <div className="text-sm font-bold flex items-center justify-between gap-2">
                    <span>{cat.label}</span>
                    <span
                      className={`text-[11px] tabular-nums ${
                        isActive ? 'text-[#F2BA49]' : 'text-slate-400'
                      }`}
                    >
                      {catChecked}/{cat.items.length}
                    </span>
                  </div>
                  <div
                    className={`hidden lg:block text-xs mt-1 leading-relaxed ${
                      isActive ? 'text-slate-300' : 'text-slate-500'
                    }`}
                  >
                    {cat.summary}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Items */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
            <div className="flex items-center gap-3 pb-5 border-b border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-[#F6F8FC] border border-slate-200 text-[#002D7A] flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-[#001952]">
                  {activeCategory.label} Documents
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">{activeCategory.summary}</p>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              {activeCategory.items.map((item) => {
                const key = `${activeCategory.id}:${item.name}`;
                const checked = !!checkedItems[key];
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => toggleItem(key)}
                    aria-pressed={checked}
                    className={`w-full text-left p-4 rounded-xl border transition-colors flex items-start gap-3.5 cursor-pointer ${
                      checked
                        ? 'bg-[#F6F8FC] border-[#002D7A]/40'
                        : 'bg-white border-slate-200 hover:bg-[#F6F8FC]/60'
                    }`}
                  >
                    <span className="mt-0.5 shrink-0">
                      {checked ? (
                        <CheckSquare className="w-5 h-5 text-[#F2BA49]" aria-hidden="true" />
                      ) : (
                        <Square className="w-5 h-5 text-slate-400" aria-hidden="true" />
                      )}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[#001952]">{item.name}</p>
                      <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                        {item.note}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            <p className="mt-6 pt-5 border-t border-slate-100 text-xs sm:text-sm font-medium text-slate-600">
              Requirements vary by destination, visa category and applicant profile.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
