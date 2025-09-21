export function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="font-mono text-lg font-semibold text-primary">{"<dev />"}</div>

          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              © 2024 Backend Developer Portfolio. Built with Next.js & Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
