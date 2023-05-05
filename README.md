# my-sevelte-template

A template for quickly starting Svelte hobby projects (in Typescript):

The main frameworks used are:
- [Svelte](https://svelte.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Skeleton UI Toolkit](https://www.skeleton.dev/)

## Developing

### Environment

The required node and npm versions are defined in the `package.json`.

The supported environment variables can be defined in a `.env` file. You can copy and configure the template [`.env.example`](.env.example) to `.env` to get started.

The easiest way to set up the project is to install [Node Version Manager](https://github.com/nvm-sh/nvm) and [direnv](https://github.com/direnv/direnv) to load and unload environment depending on the current directory.

This project contains a [`.envrc`](.envrc) file to automatically set the correct node and environment. 

```bash
direnv allow
```

You can then start developing with:
```bash
npm install
npm run dev
```

_Note that before running `npm run dev` you will see various TS Compiler errors relating to missing `.svelte-kit/tsconfig.json`. This directory is created when running `npm run dev` and should resolve these errors._

## Building

To create a production version of the app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## Theme

Skeleton provides a [theme generator](https://www.skeleton.dev/docs/generator), which cab´n be used to add a theme to [src/theme.postcss](/src/theme.postcss).

## Deploying