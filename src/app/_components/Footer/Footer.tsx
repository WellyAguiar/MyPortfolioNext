export default function Footer() {
  return (
    <footer className="py-12 px-8 text-center bg-color-surface text-color-text-muted">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
        <div className="w-10 h-1 bg-gradient-to-r from-color-brand to-purple-400 rounded-full mb-4"></div>
        <p className="text-sm font-medium">
          © {new Date().getFullYear()} Welly Aguiar. 
          <span className="block sm:inline sm:ml-2">Desenvolvido com foco em performance e estética.</span>
        </p>
        <p className="text-xs opacity-60">
          Built with Next.js, Tailwind CSS & Lucide Icons.
        </p>
      </div>
    </footer>
  );
}
