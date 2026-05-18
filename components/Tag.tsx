type TagProps = {
  label: string;
};

export function Tag({ label }: TagProps) {
  return (
    <span className="inline-flex rounded-sm border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700 transition-colors duration-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
      {label}
    </span>
  );
}
