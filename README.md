```
npm install
npm run dev
```

```
npm run deploy
```
Everytime Schema is Modified
```
npx prisma migrate dev --name init_schema
```
```
npx prisma generate --no-engine
```

#Tech Stack
React in the frontend
Cloudflare workers in the backend
zod as the validation library, type inference for the frontend types
Typescript as the language
Prisma as the ORM, with connection pooling
Postgres as the database
jwt for authentication
 