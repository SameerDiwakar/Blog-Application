import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode,sign,verify } from 'hono/jwt';

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string
        JWT_SECRET: string
    }
}>();

// blogRouter.use("/*",(c,next) => {
//     console.log('middleware')
//     next()
// })

blogRouter.post('/',async (c) => {
    const body = await c.req.json()
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate())
    await prisma.blog.create({
		data:{
			title: body.title,
			content: body.content,
			authorId: body.authorId
		}
	})
    return c.text('signin route')
})

blogRouter.get('/:id', (c) => {
	const id = c.req.param('id')
	console.log(id);
	return c.text('get blog route')
})


blogRouter.put('/', (c) => {
	return c.text('signin route')
})

