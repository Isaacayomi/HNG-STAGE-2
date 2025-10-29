# Modern Ticket Management App 🎫

A sleek and efficient Ticket Management application built with modern web technologies. This repository showcases two distinct frontend implementations—one using **React** and the other **Vue.js**—both demonstrating best practices in component-based architecture, state management, and responsive design.

## Description

This project provides a complete solution for tracking and managing support tickets. Users can register, log in, and access a dashboard to create, view, update, and delete tickets. The application features an intuitive user interface, data visualizations for ticket analytics, and a seamless user experience, all powered by local storage for persistent data without a backend.

The dual-framework approach makes this an excellent project for comparing and contrasting React (with Context API) and Vue.js (with Pinia) for state management and application structure.

## ✨ Features

-   **Dual Frameworks**: Full implementations in both **React** and **Vue.js**.
-   **User Authentication**: Secure user registration and login functionality (simulated with local storage).
-   **CRUD Operations**: Full Create, Read, Update, and Delete capabilities for tickets.
-   **Interactive Dashboard**: A comprehensive overview of ticket statistics with beautiful charts and graphs.
-   **State Management**: Utilizes React Context API and Vue's Pinia for robust and scalable state management.
-   **Responsive Design**: A mobile-first, fully responsive UI built with Tailwind CSS.
-   **Component-Based Architecture**: Well-structured, reusable, and maintainable components.

## 🛠️ Technologies Used

| Category      | Technology                                                                                                                              |
| :------------ | :-------------------------------------------------------------------------------------------------------------------------------------- |
| **Frameworks**  | [React.js](https://react.dev/), [Vue.js](https://vuejs.org/)                                                                             |
| **Styling**     | [Tailwind CSS](https://tailwindcss.com/)                                                                                                |
| **Routing**     | [React Router](https://reactrouter.com/), [Vue Router](https://router.vuejs.org/)                                                        |
| **State**       | [React Context API](https://react.dev/learn/passing-data-deeply-with-context), [Pinia](https://pinia.vuejs.org/)                          |
| **Charting**    | [Recharts](https://recharts.org/) (React), [ApexCharts](https://apexcharts.com/) (Vue)                                                    |
| **Build Tool**  | [Vite](https://vitejs.dev/)                                                                                                             |
| **Linting**     | [ESLint](https://eslint.org/)                                                                                                           |

## 🚀 Getting Started

Follow these instructions to set up and run the project locally. You can choose to run either the React or the Vue version.

### Installation

First, clone the repository to your local machine:

```bash
git clone https://github.com/Isaacayomi/HNG-STAGE-2.git
cd HNG-STAGE-2/Ticket management web app
```

---

### Running the React Version

1.  **Navigate to the React directory**:
    ```bash
    cd React-version
    ```
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Start the development server**:
    ```bash
    npm run dev
    ```
4.  Open your browser and go to `http://localhost:5173` (or the port specified in your terminal).

---

### Running the Vue Version

1.  **Navigate to the Vue directory**:
    ```bash
    cd Vue-version/vue-project
    ```
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Start the development server**:
    ```bash
    npm run dev
    ```
4.  Open your browser and go to `http://localhost:5173` (or the port specified in your terminal).

## 📋 Usage

Once the application is running, you can perform the following actions:

1.  **Register a New Account**: Navigate to the `/register` page to create a new user profile.
2.  **Sign In**: Use your credentials on the `/login` page to access the application.
3.  **Dashboard Overview**: After logging in, you will be redirected to the dashboard, which displays key metrics like total tickets, open tickets, and resolved tickets through interactive charts.
4.  **Create a Ticket**: Click the "Create Ticket" button on the dashboard. A modal will appear where you can enter the ticket title, description, and set its initial status.
5.  **View and Manage Tickets**: All existing tickets are listed on the dashboard and the dedicated `/tickets` page. You can edit a ticket's details or delete it using the provided controls on each ticket card.

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Ayomide Isaac**

-   **LinkedIn**: [YourLinkedInUsername](https://linkedin.com/in/your-linkedin-username)
-   **Twitter**: [@YourTwitterHandle](https://twitter.com/your-twitter-handle)

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D" alt="Vue.js">
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite">
</p>

[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)