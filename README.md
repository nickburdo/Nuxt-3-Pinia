# Nuxt 3 + Pinia

This project based on Nirmal Kuram's article 
[State Management with Pinia in Nuxt.js 3: A Practical Guide](https://medium.com/@nirmalkumar30/state-management-with-pinia-in-nuxt-js-3-a-practical-guide-6ca94cac04cc).

## Install Project Modules

### Install Next.js
```npm
npx nuxi@latest init <project-name>
```

### Install Pinia 

```npm
npm i @pinia/nuxt
```
Then add module to `nuxt.config.ts`
```ts
export default defineNuxtConfig({
  // ...
  modules: ['@pinia/nuxt'],
  alias: {
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
  },
})
```

### Install Tailwind

```npm
npx nuxi@latest module add tailwindcss
```

This command install module and add them to nuxt config.

### Install daisyUI

```npm
npm i -D daisyui@latest
```
Then add module to `tailwind.config.js`
```js
module.exports = {
  plugins: [require("daisyui")],
}
```

### Install NuxtIcon

```npm
npm install --save-dev nuxt-icon
```
Then add module to `nuxt.config.ts`
```ts
export default defineNuxtConfig({
  // ...
  modules: [
    // ...
    'nuxt-icon',
  ],
  // ...
})
```

### Install Faker.js for generating random values
```npm
npm install @faker-js/faker --save-dev
```

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build
```

Locally preview production build:

```bash
# npm
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
