# Bitrader React Conversion

This project is a React conversion of the Bitrader WordPress theme. The conversion preserves the exact styling, functionality, and DOM structure of the original WordPress site.

## Conversion Process

The conversion process followed these key principles:

1. **Exact Styling Preservation**
   - All original CSS files were imported into the React project
   - Class names, IDs, and DOM hierarchy were preserved exactly as in the original
   - No CSS was recreated or rewritten

2. **Asset Collection**
   - All external resources (images, fonts, icons) were collected and imported
   - Original image paths were maintained where possible
   - Fonts and icons from CDNs were linked or installed locally

3. **JSX Syntax Rules**
   - HTML attributes were converted to their JSX equivalents (class → className, for → htmlFor, etc.)
   - Void elements were properly self-closed
   - Inline styles were converted to JSX objects

4. **React Setup**
   - Clean, reusable React functional components were created
   - Props support was added where needed
   - Semantic wrappers were maintained

## Project Structure

- `/src/components/MainSection/HeroBanner.jsx` - The main hero banner component
- `/src/assets/css/` - Contains all the CSS files from the original WordPress theme
- `/public/assets/img/` - Contains all the image assets from the original WordPress theme

## Running the Project

1. Install dependencies:
   ```
   npm install
   ```

2. Copy assets from the original WordPress theme:
   ```
   npm run copy-assets
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Build for production:
   ```
   npm run build
   ```

## Notes on Implementation

- The `copy-assets.js` script is responsible for copying image assets from the original WordPress theme to the React project
- AOS (Animate On Scroll) library is used for animations, just like in the original theme
- Font Awesome is used for icons
- The component structure mirrors the original WordPress theme's structure
- Image paths use `process.env.PUBLIC_URL` to ensure they work correctly in both development and production builds

## Troubleshooting

If you encounter compilation errors related to missing CSS files, make sure:

1. All required dependencies are installed:
   ```
   npm install bootstrap @fortawesome/fontawesome-free swiper aos
   ```

2. CSS imports in components are using the correct paths:
   - Use node_modules imports for libraries: `import 'bootstrap/dist/css/bootstrap.min.css'`
   - Use relative paths for local CSS files: `import '../../assets/css/global-styles.css'`

3. Image paths are using `process.env.PUBLIC_URL`:
   ```jsx
   <img src={process.env.PUBLIC_URL + "/assets/img/uploads/2023/10/image.png"} alt="Description" />
   ```

## Additional Resources

- Original WordPress theme: `PROJECT BITRADER/bitrader.thetork.com/`
- React documentation: [https://reactjs.org/](https://reactjs.org/)