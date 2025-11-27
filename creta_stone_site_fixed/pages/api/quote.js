let quotes = []
export default function handler(req, res){
  if(req.method === 'POST'){
    const q = { id: quotes.length+1, ...req.body, createdAt: new Date().toISOString() }
    quotes.push(q)
    return res.status(201).json({ status:'received', id:q.id })
  }
  if(req.method === 'GET') return res.status(200).json(quotes)
  res.status(405).end()
}
