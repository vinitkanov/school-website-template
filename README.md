# Ipsum School Landing Page

This is a landing page for Ipsum School, a modern educational institution in Indonesia. This project is built with Next.js and showcases the school's vision, programs, and contact information.

## Running Locally

To get this project running on your local machine, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/ipsum-sch.git
   cd ipsum-sch
   ```

2. **Install dependencies:**
   Using npm:
   ```bash
   npm install
   ```
   Or using yarn:
   ```bash
   yarn install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   The application will be available at [http://localhost:3000](http://localhost:3000).

## Technologies Used

*   **[Next.js](https://nextjs.org/)**: A React framework for building server-side rendered and static web applications.
*   **[React](https://reactjs.org/)**: A JavaScript library for building user interfaces.
*   **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapid UI development.
*   **[Lucide React](https://lucide.dev/)**: A library of simply designed, beautiful icons.

## Project Structure

The project follows the standard Next.js `app` directory structure:

```
.
├── app/
│   ├── layout.js           # Main layout of the application
│   ├── page.js             # The main page of the application
│   ├── globals.css         # Global styles for the application
│   └── favicon.ico         # Favicon for the application
├── components/
│   ├── navbar.js           # The navigation bar component
│   ├── hero.js             # The hero section component
│   ├── partner.js          # The partner section component
│   ├── review.js           # The testimonial/review section component
│   ├── jenjang.js          # The school level/grade section component
│   ├── about.js            # The about us section component
│   ├── bottomCTA.js        # The call-to-action section at the bottom
│   └── footer.js           # The footer component
├── public/
│   ├── IpsumSCH.svg        # The school's logo
│   ├── hero-img.png        # The image for the hero section
│   ├── about-us.png        # The image for the about us section
│   ├── kurikulum-1.png     # Image for the curriculum section
│   ├── partner-1.svg       # Partner logo
│   ├── partner-2.svg       # Partner logo
│   ├── partner-3.svg       # Partner logo
│   ├── partner-4.svg       # Partner logo
│   ├── partner-5.svg       # Partner logo
│   └── review-profile-01.png # Profile image for a review
└── ...
```

## Screenshots

Here's a screenshot of the landing page:

![Ipsum School Landing Page](./public/screenshots/screenshot.png)
