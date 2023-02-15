/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  /* const token = req.headers['authorization']?.split(' ')[1]

  if (!token)
    return res.status(400).json({ ok: false, message: 'MISSING_TOKEN' })*/

  const sessionData = {
    ...req.body,
    ip: req.headers['X-Real-IP'],
  }

  switch (req.method) {
    case 'POST':
      return fetch('https://analytics.sone.works/establish', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sessionData),
      })
        .then((response) => response.json())
        .then((data) => data)
        .catch((error) => ({ ok: false, error }))
  }
}
