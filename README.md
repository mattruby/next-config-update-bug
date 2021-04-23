This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the publicRuntimeConfig.

Open a tab and hit: [http://localhost:3000/api/updateConfig](http://localhost:3000/api/updateConfig). This will update the runtime next.js config.

Refresh [http://localhost:3000](http://localhost:3000) and open your console to see:

```
...
Warning: Text content did not match. Server: "{
  "publicRuntimeConfig": {
    "test": "This has been updated! 1619187877202"
  }
}" Client: "{
  "publicRuntimeConfig": {
    "test": "This is test value's value."
  }
}"
...
```

The update will show server side. But it seems that the `__NEXT_DATA__.runtimeConfig` is cached and refuses to update client side.
