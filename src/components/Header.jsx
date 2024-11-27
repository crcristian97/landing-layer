export default function Header() {
  return (
    <header className="bg-[#899B95] text-black p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-2xl font-semibold mb-4 md:mb-0">Ferreiro Barbeito</div>
        <nav className="w-full md:w-auto">
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center">
            <li><a href="/" className="relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-black hover:after:w-full after:transition-all after:duration-300">ESTUDIO</a></li>
            <li><a href="/despidos/"  className="relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-black hover:after:w-full after:transition-all after:duration-300">DESPIDOS</a></li>
            <li><a href="/art/" className="relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-black hover:after:w-full after:transition-all after:duration-300">ART</a></li>
            <li><a href="/contacto/" className="relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-black hover:after:w-full after:transition-all after:duration-300">CONTACTO</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}