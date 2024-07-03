 This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


```javascript\n//Develop by Vijay Dabhi\nimport React from 'react';\nimport { Avatar, Card, CardHeader, CardBody, CardFooter, Button, Text, Link } from '@nextui-org/react';\n\nexport default function App() {\n  return (\n    <div className=\"bg-black flex justify-center items-center h-screen\">\n      <Card className=\"max-w-md shadow-lg rounded-xl bg-gray-800 border border-gray-700\">\n        <CardHeader className=\"flex flex-col items-center px-4 py-6\">\n          <Avatar\n            src=\"https://i.pravatar.cc/300?u=a042581f4e29026709d\"\n            bordered\n            radius=\"full\"\n            size=\"xl\"\n          />\n          <Text h4 className=\"mt-2 text-white font-bold\">\n            Jane Doe\n          </Text>\n          <Text className=\"text-gray-400 mt-1\">\n            Web Developer\n          </Text>\n        </CardHeader>\n        <CardBody className=\"px-4 py-5\">\n          <Text className=\"text-gray-400\">\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna.\n          </Text>\n        </CardBody>\n        <CardFooter className=\"flex justify-between items-center px-4 py-3\">\n          <Link href=\"#\" className=\"text-white font-bold\">\n            View Profile\n          </Link>\n          <Button color=\"primary\" variant=\"flat\" className=\"text-white\">\n            Follow\n          </Button>\n        </CardFooter>\n      </Card>\n    </div>\n  );\n}\n\n
