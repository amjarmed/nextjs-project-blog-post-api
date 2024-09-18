# nextjs project (1) : blog post

## what i used and practiced on it

- css: tailwind and css grid& flex (responsive desing )
- html5 semantic tags.

 for next and react practicing :

- react,nextjs...
- Routes
-

### resources and languages used in this project

- html5
- css3
- js6
- reactjs
- nextjs
- typescript
- fontawesome

### Folder Structure Example for a Blog

app/
│
├── layout.js             # Global layout file (applies to all pages)
├── page.js               # Home page for your blog (maps to '/')
├── about/
│   └── page.js           # About page (maps to '/about')
├── blog/
│   ├── layout.js         # Layout for blog posts (applies to all blog pages)
│   ├── page.js           # Blog index page (maps to '/blog')
│   ├── [slug]/
│   │   └── page.js       # Dynamic blog post pages (maps to '/blog/:slug')
│   └── new/
│       └── page.js       # New post page (maps to '/blog/new')
├── components/           # Reusable components directory
│   ├── Navbar.js         # Navigation bar component
│   ├── Footer.js         # Footer component
├── styles/               # Global CSS or Tailwind styles
│   └── globals.css       # Global styles for the app
└── api/                  # API routes
    └── posts.js          # API route to fetch blog posts
