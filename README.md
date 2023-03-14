### The purpose of this challenge is to build a beer e-commerce.

There is a file with all the products details (products.js), and the images we want to show for each product (one image per product). Also, there is a separate file with the stock and price value, which is in a different one because that data gets updated more frequently.

We want to build a Next.js app with two pages:

- Product Listing Page (PLP) that displays the brand and image of all the products (this page should be the Home Page)
- Product Detail Page (PDP) that displays all the information for a single product.

Technical requirements:

- Build an API endpoint that returns stock and price information for a given product SKU code
- The PDP must update the stock and price information every 5 seconds using the API endpoint
- The products.js file should not be modified
- The stock-price.js file should only be modified to test the update every 5 seconds requirement.
- The PLP should be the Home Page
- The PDP should be accessible through the URL /productId-productBrand (i.e. for a product with id 5 and brand "Modelo Especial", the URL should be /5-modelo- especial)
- The API endpoint to get the stock and price information should be GET /api/stock- price/code (i.e. for a product SKU with code 123, the URL should be /api/stock- price/123)

Keep in mind that the prices are stored in cents, but should be displayed in dollars with 2 digits cents (e.g. if a product's price is 4350, then it should be shown as $43.50).

### Demo link:

Access my site at [BeerShop](https://challenge-react-gules.vercel.app/)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
