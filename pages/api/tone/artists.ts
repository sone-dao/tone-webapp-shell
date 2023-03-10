/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  /* const token = req.headers['authorization']?.split(' ')[1]

  if (!token)
    return res.status(400).json({ ok: false, message: 'MISSING_TOKEN' })*/

  if (req.method == 'GET') {
    const term = req.query.q

    const data: any = await fetch(`https://api.tone.audio/artists?q=${term}`)
      .then((response) => response.json())
      .catch((error) => ({ ok: false, error }))

    res.json(data)
  }
}
