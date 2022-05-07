import { articles } from '../../data'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Article[]>,
) {
  res.status(200).json(articles)
}
