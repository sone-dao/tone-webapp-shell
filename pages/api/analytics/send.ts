/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  /* const token = req.headers['authorization']?.split(' ')[1]

  if (!token)
    return res.status(400).json({ ok: false, message: 'MISSING_TOKEN' })*/

  const analytic = { ...req.body, service: 'tone-app' }

  if (req.method == 'POST') {
    const data: any = await fetch('https://analytics.sone.works/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(analytic),
    })
      .then((response) => response.json())
      .catch((error) => ({ ok: false, error }))

    res.json(data)
  }
}
