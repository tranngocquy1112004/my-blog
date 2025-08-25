# CSS Structure

This folder contains all the CSS files for the my-blog application. The CSS has been separated from inline styles in JSX components to improve maintainability and reusability.

## File Structure

### Global Styles
- `index.css` - Global styles, utility classes, and common components

### Component-specific Styles
- `Header.css` - Navigation header styles
- `Footer.css` - Footer styles
- `Home.css` - Home page styles
- `Blog.css` - Blog page styles
- `PostList.css` - Post list container styles
- `PostItem.css` - Individual post item styles
- `PostDetail.css` - Post detail page styles
- `Pagination.css` - Pagination component styles
- `About.css` - About page styles
- `NotFound.css` - 404 page styles
- `Loading.css` - Loading component styles

## Usage

Each component imports its corresponding CSS file:

```jsx
import '../style/ComponentName.css';
```

## Benefits of This Structure

1. **Separation of Concerns** - CSS is separated from JavaScript logic
2. **Maintainability** - Easier to find and modify styles
3. **Reusability** - CSS classes can be reused across components
4. **Performance** - Better caching and loading of styles
5. **Readability** - Cleaner JSX code without inline styles

## CSS Classes Naming Convention

- Use kebab-case for class names
- Prefix component-specific classes with component name (e.g., `post-item`, `blog-title`)
- Use semantic class names that describe the purpose
- Keep class names short but descriptive

## Global Utility Classes

The `index.css` file includes utility classes for common styling needs:
- `.container` - Centered container with max-width
- `.text-center` - Center-aligned text
- `.btn` - Basic button styles
- `.btn-primary` - Primary button variant
- `.link` - Basic link styles
