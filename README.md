# AI Developer Portfolio & Research Blog

A modern, responsive personal website for AI developers and researchers to showcase their work and paper reviews. Designed to be hosted on GitHub Pages.

![Website Preview](https://via.placeholder.com/1200x630)

## Features

- Clean, modern design with responsive layout
- Portfolio section with support for GIFs and videos to showcase AI projects
- Detailed paper review system with support for:
  - Mathematical equations (MathJax)
  - Code snippets with syntax highlighting
  - Interactive elements
  - Tables and figures
- Simple and lightweight architecture
- Easy to customize and extend
- Mobile-friendly

## Live Demo

Visit the live site: [https://yourusername.github.io](https://yourusername.github.io)

## Setup Instructions

### 1. Fork or Clone this Repository

```bash
git clone https://github.com/yourusername/yourusername.github.io.git
cd yourusername.github.io
```

### 2. Customize the Website

- **Personal Information**: Edit `index.html` to update your name, bio, skills, and contact information
- **Profile Image**: Replace the placeholder image in the About section with your own
- **Projects**: Add your own projects to the Projects section, including GIFs or videos of your work
- **Paper Reviews**: Create new paper review pages based on the template provided

### 3. Deploy to GitHub Pages

1. Create a GitHub repository named `yourusername.github.io`
2. Push your customized code to this repository:

```bash
git add .
git commit -m "Initial website setup"
git remote set-url origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main
```

3. Go to your repository settings on GitHub
4. Navigate to the "Pages" section
5. Select the branch you want to deploy (usually `main`)
6. Click "Save"

Your website will be live at `https://yourusername.github.io` within a few minutes.

## Adding New Paper Reviews

1. Duplicate the `paper-review-template.html` file
2. Rename it to something relevant to the paper (e.g., `transformer-attention-review.html`)
3. Edit the content to add your review
4. Add a link to this review in the Papers section of the main page

## Customization

### Colors and Styling

You can customize the color scheme and styling by editing the CSS variables in `css/styles.css`:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #3b82f6;
    /* ...other variables... */
}
```

### Adding New Sections

To add a new section to the website:

1. Add a new section to `index.html` following the existing pattern
2. Create any necessary CSS styles in `css/styles.css`
3. Update the navigation menu in the header

## Technologies Used

- HTML5
- CSS3 (with CSS variables for theming)
- JavaScript (vanilla)
- MathJax (for mathematical equations)
- Highlight.js (for code syntax highlighting)
- Font Awesome (for icons)
- Google Fonts

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- [Font Awesome](https://fontawesome.com/) for icons
- [Google Fonts](https://fonts.google.com/) for typography
- [MathJax](https://www.mathjax.org/) for mathematical equations
- [Highlight.js](https://highlightjs.org/) for code syntax highlighting
