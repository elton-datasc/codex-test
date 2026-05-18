import type { ReactNode } from 'react';

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 py-10 md:py-14">
      <div className="container-base">
        <h2 className="mb-6 text-2xl font-semibold text-slate-900 dark:text-slate-100 md:text-3xl">{title}</h2>
        {children}
      </div>
    </section>
  );
}
