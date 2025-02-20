## Development

To run the development server:

```bash
npm run dev
```

## Build

Before deploying, build the project to check for errors:

```bash
npm run build
```

## Deployment

To deploy on Vercel:

1. Set the root directory as `Frontend`.
2. Choose `Vite` as the framework.
3. Customize the deployment with Vercel CLI and `vercel.json` file.

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy using Vercel CLI
vercel
```

Ensure you have a `vercel.json` file in your project for custom configurations.

