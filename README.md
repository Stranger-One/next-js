This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Why Next.js

- **Routing**
- **API Routes**
- **Rendering (SSR, CSR)**
- **Data fetching**
- **Styling**
- **Optimization**
- **Dev and Prod build system**

## Start - Create a Next.js App

```bash
npx create-next-app@latest
```

- Project name: `hello-world`
- Typescript: `yes`
- ESLint: `yes`
- Tailwind CSS: `yes`
- src/ directory: `yes`
- App Router: `yes`
- Turbopack: `yes`
- Import alias: `yes`

## React Server Components and Routing

### Server Component

- Next.js by default treats all components as Server Components.
- These components can perform server-side tasks like reading files or fetching data directly from a database.
- The trade-off is that they can't use React hooks or handle user interactions.

### Client Component

- To create a Client component, use the `"use client"` directive at the top of the component file.
- It can't perform server-side tasks like reading files, but it can use hooks and handle user interactions.

### Create Route

- `src/app/about/page.tsx` => `/about`
- `src/app/profile/page.tsx` => `/profile`

***If the route is not valid, Next.js provides a 404 not found page.***

### Nested Routes

- `src/app/blog/first/page.tsx` => `/blog/first`
- `src/app/blog/second/page.tsx` => `/blog/second`

### Dynamic Routes

- `src/app/products/page.tsx` => `/products`
- `src/app/products/[productId]/page.tsx` => `/products/:productid`

```typescript
export default async function ProductDetails({ params }: { params: Promise<{ productId: string }> }) {
	const productId = (await params).productId;
	return <h1>Details about product {productId}</h1>;
}
```

### Nested Dynamic Routes

- `src/app/products/[productId]/reviews/[reviewId]/page.tsx` => `/products/:productid/reviews/:reviewId`

```typescript
export default async function ProductDetails({ params }: { params: Promise<{ productId: string; reviewId: string }> }) {
	const { productId, reviewId } = await params;
	return <h1>Review {reviewId} for product {productId}</h1>;
}
```

### Catch All Segments

- `src/app/docs/[...slug]/page.tsx` => `/docs/{all route}....`

```typescript
export default async function ProductDetails({ params }: { params: Promise<{ slug: string[] }> }) {
	const { slug } = await params;
	return <h1>Review {reviewId} for product {productId}</h1>;
}
```

***To bypass the slug, use `src/app/docs/[[...slug]]/page.tsx` => `/docs/{all route}....`***

### Custom Page Not Found Page

- Create a `not-found.tsx` / `not-found.jsx` inside the app folder for a global not found page.
- Create `not-found.tsx` / `not-found.jsx` files for separate routes inside their respective routes and call `notFound()` imported from `next/navigation`.

***The `notFound` component doesn't accept props.***

- For dynamic values in the notFound page, use the `usePathname` hook in the client component.

### File Colocation

Next.js only renders the file named `page.tsx` / `page.jsx` with a default export function.

### Private Folders

To make a folder for only internal stuff and not include it in the routing system, add an underscore at the start of the folder name (e.g., `_folder-name`).

### Route Groups

Group related routes like auth-related routes (register, login, forgot-password) by using a parent folder wrapped with `()`.

- `src/app/(auth)/register` => `/register`
- `src/app/(auth)/login` => `/login`

### Metadata

Set metadata for every page for better SEO.

```typescript
export const metadata = {
	title: "",
	description: "",
};
```

In layout:

```typescript
export const metadata: Metadata = {
	title: {
		default: "Next app",
		template: "%s | Next app",
	},
	description: "",
};
```

In page:

```typescript
export const metadata: Metadata = {
	title: "register", // "register | next app"
	description: "",
};
```

```typescript
export const metadata: Metadata = {
	title: {
		absolute: "login", // "login"
	},
	description: "",
};
```

### Link

```typescript
import Link from "next/link";

<Link href={"/products/1"}>Product 01</Link>;
```

### Params and Search Params

- `app/article/[articleId]/page.tsx` => `/article/123?lan=eng`

```typescript
// 123 => params.articleId
// en => searchParams.lan

// In server component => async await
// In client component => use()

// page.tsx => params, searchParams
// layout.tsx => params
```

### Programmatically Redirecting

```typescript
"use client";
import { useRouter, redirect } from "next/navigation";

const router = useRouter();

router.push("/");
redirect("/");
```

### Template

`template.tsx` => alternative of `layout.tsx` but the shared components also rerender, states are initialized.

### Loading

- `app/article/page.tsx`
- `app/article/loading.tsx` => server component

### Error.tsx

- `app/article/page.tsx`
- `app/article/Error.tsx`

### Parallel Routes

Parallel routes allow you to render multiple pages in parallel within the same layout. This is useful for complex layouts where different sections of the page need to be rendered independently.

#### Example

Consider a scenario where you have a dashboard with a sidebar and a main content area. You can use parallel routes to render the sidebar and the main content area independently.

```typescript
// src/app/dashboard/layout.tsx
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<Sidebar />
			<main>{children}</main>
		</div>
	);
}

// src/app/dashboard/sidebar.tsx
export default function Sidebar() {
	return <nav>Sidebar content</nav>;
}

// src/app/dashboard/[...main]/page.tsx
export default function MainContent({ params }: { params: { main: string[] } }) {
	return <div>Main content for {params.main.join('/')}</div>;
}
```

In this example, the `Sidebar` component and the `MainContent` component are rendered in parallel within the `DashboardLayout`.

#### Usage

- Define a layout component that includes the parallel routes.
- Create separate components for each parallel route.
- Use the `children` prop to render the main content area.

Parallel routes can help improve the performance and user experience of your application by allowing different parts of the page to load independently.


 ### Unmatched Routes
 


 ### Conditional Routes



 ### Intercepting Routes - (.) folder02