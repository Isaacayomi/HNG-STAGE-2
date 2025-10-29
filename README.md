# TicketFlow: A Modern Ticket Management App 🎫

A versatile and responsive ticket management web application built to showcase proficiency in both React and Vue. This project features a complete suite of functionalities including user authentication, CRUD operations for tickets, and an interactive data dashboard, all managed through client-side state and local storage.

## ✨ Features

- **Dual Framework Implementation**: Full-featured versions available in both **React** and **Vue.js**, demonstrating proficiency across modern frontend ecosystems.
- **User Authentication**: Secure client-side authentication flow (Register, Login, Logout) with persistent sessions using local storage.
- **Complete Ticket Management**: Full CRUD (Create, Read, Update, Delete) functionality for support tickets.
- **Interactive Dashboard**: A dynamic dashboard visualizing ticket data with charts for status distribution and summaries.
- **Responsive Design**: A mobile-first, professional UI built with Tailwind CSS, ensuring a seamless experience on all devices.
- **Modern State Management**: Utilizes React Context API for the React version and Pinia for the Vue version for efficient and predictable state handling.
- **Client-Side Routing**: Smooth navigation between pages using React Router and Vue Router.

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v18.x or later)
- npm, yarn, or pnpm

### Installation

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/Isaacayomi/HNG-STAGE-2.git
    cd HNG-STAGE-2
    ```
2.  This repository contains two separate applications. Follow the steps for the version you wish to run.

---

#### ⚛️ To run the React version:

1.  Navigate to the React project directory:
    ```bash
    cd "Ticket management web app/React-version"
    ```
2.  Install the necessary dependencies:
    ```bash
    npm install
    ```
3.  Start the local development server:
    ```bash
    npm run dev
    ```
4.  Open your browser and navigate to `http://localhost:5173` (or the port specified in your terminal).

---

#### 💚 To run the Vue version:

1.  Navigate to the Vue project directory:
    ```bash
    cd "Ticket management web app/Vue-version/vue-project"
    ```
2.  Install the necessary dependencies:
    ```bash
    npm install
    ```
3.  Start the local development server:
    ```bash
    npm run dev
    ```
4.  Open your browser and navigate to `http://localhost:5173` (or the port specified in your terminal).

## 🖥️ Usage

Once the application is running, you can perform the following actions:

1.  **Register a New Account**: On the landing page, click "Get Started Free" to navigate to the registration page. Fill in your name, email, and password to create an account.
2.  **Login**: Use your newly created credentials to sign in. You will be redirected to the dashboard.
3.  **Manage Tickets**:
    - On the dashboard, click "Create Ticket" to open a modal.
    - Fill in the ticket title, description, and status.
    - View all existing tickets on the dashboard or the dedicated "Tickets" page.
    - Edit or delete tickets using the controls on each ticket card.
4.  **View Dashboard Analytics**: The dashboard provides an overview of your tickets, with charts showing the total number of open vs. resolved issues.

## 🛠️ Technologies Used

This project leverages a modern and robust tech stack for both its React and Vue implementations.

| Technology             | React Version Stack                                        | Vue Version Stack                        |
| ---------------------- | ---------------------------------------------------------- | ---------------------------------------- |
| **Core Framework**     | [React.js](https://reactjs.org/)                           | [Vue.js](https://vuejs.org/)             |
| **Build Tool**         | [Vite](https://vitejs.dev/)                                | [Vite](https://vitejs.dev/)              |
| **Styling**            | [Tailwind CSS](https://tailwindcss.com/)                   | [Tailwind CSS](https://tailwindcss.com/) |
| **Routing**            | [React Router](https://reactrouter.com/)                   | [Vue Router](https://router.vuejs.org/)  |
| **State Management**   | [React Context API](https://reactjs.org/docs/context.html) | [Pinia](https://pinia.vuejs.org/)        |
| **Data Visualization** | [Recharts](https://recharts.org/)                          | [ApexCharts](https://apexcharts.com/)    |
| **Icons**              | [Lucide React](https://lucide.dev/)                        | [Lucide Vue Next](https://lucide.dev/)   |
