import Head from 'next/head'
import Header from '../components/Header'
import Slider from '../components/Slider'
import { useEffect, useState } from 'react'

const IMAGES = [
  '/images/img1.jpg', '/images/img2.jpg', '/images/img3.jpg', '/images/img4.jpg', '/images/img5.jpg',
  '/images/img6.jpg', '/images/img7.jpg', '/images/img8.jpg', '/images/img9.jpg', '/images/img10.jpg'
]

export default function Home(){
  const [inventory, setInventory] = useState([])
  useEffect(()=>{ fetch('/api/inventory').then(r=>r.json()).then(setInventory) },[])

  return (
    <div>
      <Head>
        <title>Creta Stone — Luxury Countertops & Stonework</title>
      </Head>
      <Header />

      <main className="py-12">
        <section className="container text-center mt-8">
          <h1 className="text-4xl font-bold">Luxury Stonework & Custom Countertops</h1>
          <p className="mt-3 text-lg text-creta-accent/90">Waterfall islands, full-slab backsplashes, marble fireplaces — handcrafted in the New Orleans region.</p>
        </section>

        <Slider images={IMAGES} />

        <section id="about" className="container mt-12">
          <div className="card">
            <h2 className="text-2xl font-bold">About Creta Stone</h2>
            <p className="mt-3 text-creta-accent/90">Creta Stone is a family-owned stone fabricator located in New Orleans, Louisiana. We specialize in high-end custom countertops, full-slab backsplashes, waterfall islands, and marble fireplaces. Our team works with granite, marble, soapstone, travertine, quartzite, and engineered quartz.</p>
          </div>
        </section>

        <section id="inventory" className="container mt-12">
          <h3 className="text-xl font-semibold">Current Inventory</h3>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {inventory.map(item => (
              <div key={item.id} className="card flex justify-between items-center">
                <div>
                  <div className="font-bold text-lg">{item.material}</div>
                  <div className="text-sm text-creta-accent/80">Supplier: {item.supplier} — Size: {item.size}</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-semibold">{item.quantity}</div>
                  <div className="text-sm text-creta-accent/80">slabs</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="quote" className="container mt-12 mb-20">
          <div className="card">
            <h3 className="text-2xl font-bold">Request a Quote</h3>
            <form className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={async e => {
              e.preventDefault();
              const fd = new FormData(e.target);
              const body = Object.fromEntries(fd.entries());
              const res = await fetch('/api/quote',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});
              const json = await res.json();
              alert('Quote submitted — ID: '+json.id)
            }}>
              <input name="name" placeholder="Full name" className="p-3 rounded-lg bg-black/30" required />
              <input name="email" type="email" placeholder="Email" className="p-3 rounded-lg bg-black/30" required />
              <input name="address" placeholder="Project address" className="p-3 rounded-lg bg-black/30" />
              <select name="material" className="p-3 rounded-lg bg-black/30">
                <option>Granite</option>
                <option>Marble</option>
                <option>Quartzite</option>
                <option>Quartz</option>
                <option>Soapstone</option>
                <option>Travertine</option>
              </select>
              <textarea name="details" placeholder="Project details" className="p-3 rounded-lg bg-black/30 md:col-span-2"></textarea>
              <button type="submit" className="btn-primary md:col-span-2">Submit Quote</button>
            </form>
          </div>
        </section>

      </main>

      <footer className="bg-black/80 py-8">
        <div className="container text-center text-creta-accent/90">Creta Stone — New Orleans, Louisiana • © {new Date().getFullYear()}</div>
      </footer>
    </div>
  )
}
