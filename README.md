**personal-bookshelf**

This React application with TypeScript and Vite allows you to manage your virtual bookshelf. Search for books using the OpenLibrary API and add them to your personal collection, which is stored in localStorage.

**Features:**

- **Book Search:** Utilize the OpenLibrary API to find books by title or author.
- **Book Details:** View information about each book, including title, authors, and publication date.
- **Bookshelf Management:** Add books to your personal bookshelf, persisting them in localStorage for a seamless user experience.
- **Built with Modern Technologies:** Leverages the speed and efficiency of React, Redux Toolkit, TypeScript for type safety, and Vite for a smooth development experience.

**Getting Started**

1. **Prerequisites:**
   - Node.js (version 14 or later): [https://nodejs.org/en/download/package-manager](https://nodejs.org/en/download/package-manager)
   - npm (or yarn): [https://www.npmjs.com/](https://www.npmjs.com/)

2. **Clone the Repository:**

   ```bash
   git clone https://github.com/akshaymalik1995/personal-bookshelf.git
   ```

3. **Install Dependencies:**

   ```bash
   cd personal-bookshelf
   npm install
   ``` (or `yarn install`)

4. **Run the Development Server:**

   ```bash
   npm run dev
   ``` (or `yarn dev`)

   This will start the development server at `http://localhost:5173` by default.

**Using the Application**

1. **Search for Books:** Enter a title, author search bar. Results will be displayed below.
2. **Add Books to Bookshelf:** Click the "Add to Bookshelf" button next to a book to add it to your personal collection. Added books are stored in localStorage and persist across sessions.

**Tech Stack**

- React: [https://react.dev/](https://react.dev/)
- Redux Toolkit: [https://redux-toolkit.js.org/](https://redux-toolkit.js.org/)
- TypeScript: [https://www.typescriptlang.org/](https://www.typescriptlang.org/)
- Vite: [https://vitejs.dev/](https://vitejs.dev/)
- OpenLibrary API: [https://openlibrary.org/help/faq](https://openlibrary.org/help/faq)

**Local Storage Persistence**

The application utilizes localStorage to store your bookshelf data. This enables the app to retain your added books even after refreshing the page or closing the browser window.

**Future Considerations**

- Implement user authentication to allow for a more personalized bookshelf experience.
- Enhance the UI with book filtering and sorting options.
- Integrate with external services to retrieve detailed book reviews or recommendations.

**Contributing**

We welcome contributions to this project! Please feel free to fork the repository, create a pull request, and share your improvements.

