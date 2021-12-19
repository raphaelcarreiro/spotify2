import { NextApiRequest } from 'next';
import { getToken } from 'next-auth/jwt';

export async function middleware(request: NextApiRequest) {
  const token = await getToken({ req: request, secret: process.env.JWT_SECRET });
}
