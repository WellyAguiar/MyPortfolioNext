export default function Footer() {
  return (
    <footer className="p-4 text-center bg-color-surface text-color-text-muted border-t border-color-border">
      <p>
        © {new Date().getFullYear()} Welly Aguiar. Todos os direitos reservados.
      </p>
    </footer>
  );
}
