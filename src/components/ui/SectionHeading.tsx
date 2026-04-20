interface SectionHeadingProps {
  tag?: string
  title: string
  description?: string
}

export function SectionHeading({ tag, title, description }: SectionHeadingProps) {
  return (
    <div className="text-center mb-16">
      {tag && (
        <span className="inline-block text-xs font-medium tracking-widest uppercase text-navy-600 mb-3">
          {tag}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-semibold text-warm-900 tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-warm-500 text-lg max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
