# Mao's website !

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Requirements

- NodeJS >= 16

> ❗ Due to how Webpack resolves imports, you **CANNOT** use Windows, or it will break `stitches.config.ts` import from `twin.macro` (at least, at the time of writing).
>
> ❗ Use WSL 2 ([Windows Subsystem for Linux](https://wikipedia.org/wiki/Windows_Subsystem_for_Linux)) if you need to start the app locally

## Getting Started

### `yarn dev`

- Run the development server.
- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

### `yarn build`

Build the app for production. It will erase any development build currently in the `.next` directory.

### `yarn start`

Serve a production build at [http://localhost:3000](http://localhost:3000).

You must have a production build in your `.next` directory (built by `yarn build`).

## Tech

It mainly uses :

- NextJS
- Typescript
- stitches, twin.macro & daisyui for the styles
