let inventory = [
  { id:1, supplier:'Supplier A', material:'Granite', quantity:45, size:'2cm slabs', notes:'' },
  { id:2, supplier:'Supplier B', material:'Marble', quantity:30, size:'3cm slabs', notes:'' },
  { id:3, supplier:'Supplier C', material:'Quartzite', quantity:20, size:'2cm slabs', notes:'' },
  { id:4, supplier:'Supplier D', material:'Quartz', quantity:60, size:'3cm slabs', notes:'' }
]
export default function handler(req, res){
  if(req.method === 'GET') return res.status(200).json(inventory)
  if(req.method === 'POST'){
    const item = req.body
    item.id = inventory.length + 1
    inventory.push(item)
    return res.status(201).json(item)
  }
  if(req.method === 'PUT'){
    const updated = req.body
    inventory = inventory.map(i => i.id === updated.id ? updated : i)
    return res.status(200).json(updated)
  }
  if(req.method === 'DELETE'){
    const { id } = req.query
    inventory = inventory.filter(i => i.id !== Number(id))
    return res.status(200).json({ deleted: id })
  }
  res.status(405).end()
}
