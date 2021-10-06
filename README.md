# Alpine.js

Go to the Alpine docs for most things: [Alpine Docs](https://alpinejs.dev)

You are welcome to submit updates to the docs by submitting a PR to this repo. Docs are located in the [`/packages/docs`](/packages/docs) directory.

Stay here for contribution-related information.

> Looking for V2 docs? [here they are](https://github.com/alpinejs/alpine/tree/v2.8.2)

<p align="center"><a href="https://alpinejs.dev/patterns"><img src="/hero.jpg" alt="Alpine Compoenent Patterns"></a></p>

## Contribution Guide:

### Quickstart

-   clone this repo locally
-   run `npm install` & `npm run build`
-   Include the `/packages/alpinejs/dist/cdn.js` file from a `<script>` tag on a webpage and you're good to go!

### Brief Tour

You can get everything installed with: `npm install` in the root directory of this repo after cloning it locally.

This repo is a "mono-repo" using npm workspaces for managing the packages. Each package has its own folder in the `/packages` directory.

Rather than having to run separate builds for each package, all package bundles are handled with the same command: `npm run build`

Here's a brief look at each package in this repo:

| Package                         | Description                                    |
| ------------------------------- | ---------------------------------------------- |
| [weisshorn](packages/weisshorn) | A repo to provide reusable component of alpine |

The compiled JS files (as a result of running `npm run [build/watch]`) to be included as a `<script>` tag for example are stored in each package's `packages/[package]/dist` directory.

Each package should at least have: a "cdn" build that is self-initializing and can be included using the `src` attribute in a `<script defer>` tag, and a `module.[esm/cjs].js` file that is used for importing as a JS module (cjs for node, esm for everything else).

The bundling for Alpine V3 is handled exclusively by ESBuild. All of the configuration for these builds is stored in the `scripts/build.js` file.
