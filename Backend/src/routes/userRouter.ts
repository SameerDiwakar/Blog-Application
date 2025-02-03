import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt';
import { signupInput,signinInput } from "medium-zodify";

export const userRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string
		JWT_SECRET: string
	}
}>();

userRouter.post('/signup',async (c) => {
	const body = await c.req.json()
    const { success, error } = signupInput.safeParse(body);
    if (!success) {
        c.status(411);
        return c.json({ message: 'Validation Error', error: error.errors });
    }
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate())
	try {
		const user = await prisma.user.create({
			data: {
				username: body.username,
				password: body.password
			}
		})
		const jwt = await sign({
			id: user.id
		},c.env.JWT_SECRET);
		return c.text(jwt)
	} catch (error) {
		c.status(411);
		return c.text('Inavlid username or password')
	}
})

userRouter.post('/signin',async (c) => {
	const body = await c.req.json()
	  const { success, error } = signupInput.safeParse(body);
    if (!success) {
        c.status(411);
        return c.json({ message: 'Validation Error', error: error.errors });
    }
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate())
	try {
		const user = await prisma.user.findFirst({
			where: {
				username: body.username,
				password: body.password
			}
		})
		if(!user) {
			c.status(403); 
			return c.text('Inavlid username or password')
		}
		const jwt = await sign({
			id: user.id
		},c.env.JWT_SECRET);
		return c.text(jwt)
	} catch (error) {
		c.status(411);
		return c.text('Inavlid Request')
	}
})
