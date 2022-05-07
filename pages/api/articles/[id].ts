import { articles } from '../../../data'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Article | { message: string }>,
) {
  const { id } = req.query
  const filtered = articles.filter((articles) => articles.id === req.query.id)
  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res
      .status(400)
      .json({ message: `Article with the id of ${id} is not found.` })
  }
}
