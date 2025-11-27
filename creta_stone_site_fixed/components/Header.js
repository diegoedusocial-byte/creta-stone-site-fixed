export default function Header(){
  return (
    <header className="header py-4">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="/logo1%20face.png" alt="Creta Stone" className="h-16" />
          <div className="text-sm text-creta-accent opacity-90">Creta Stone — New Orleans, LA</div>
        </div>
        <nav className="hidden md:flex gap-6 text-creta-accent">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#inventory">Inventory</a>
          <a href="#quote">Quote</a>
        </nav>
      </div>
    </header>
  )
}
