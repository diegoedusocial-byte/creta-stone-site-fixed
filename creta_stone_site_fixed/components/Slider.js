import { useState, useEffect } from 'react'
export default function Slider({images=[]}){
  const [i, setI] = useState(0)
  useEffect(()=>{ if(!images.length) return; const t = setInterval(()=> setI(v => (v+1)%images.length), 4500); return ()=>clearInterval(t) }, [images.length])
  if(!images?.length) return null
  return (
    <div className="container mt-8 relative">
      <div className="rounded-2xl overflow-hidden shadow-soft">
        <img src={images[i]} className="w-full h-[540px] object-cover" alt={`project-${i}`} />
      </div>
      <div className="absolute left-6 top-1/2 -translate-y-1/2">
        <button onClick={()=>setI((i-1+images.length)%images.length)} className="bg-black/50 text-creta-accent p-3 rounded-full">‹</button>
      </div>
      <div className="absolute right-6 top-1/2 -translate-y-1/2">
        <button onClick={()=>setI((i+1)%images.length)} className="bg-black/50 text-creta-accent p-3 rounded-full">›</button>
      </div>
      <div className="flex gap-2 justify-center mt-4">
        {images.map((_, idx) => (
          <button key={idx} onClick={()=>setI(idx)} className={`w-12 h-8 rounded-lg overflow-hidden ${idx===i? 'ring-2 ring-creta-accent':'opacity-60'}`}>
            <img src={images[idx]} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}
