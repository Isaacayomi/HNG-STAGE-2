# Ticket Management Web Application

A comprehensive **Ticket Management Web Application** built using **React** and **Vue**.  
This application allows users to create, manage, and track tickets with features such as ticket creation, editing, status updates, and statistics.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Setup and Execution](#setup-and-execution)
  - [React Version](#react-version)
  - [Vue Version](#vue-version)
  - [Switching Between Versions](#switching-between-versions)
- [UI Components & State Structure](#ui-components--state-structure)
- [Accessibility & Known Issues](#accessibility--known-issues)
- [Example Test User Credentials](#example-test-user-credentials)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview

This application is designed to help teams manage tasks and tickets efficiently.  
Users can:

- Create new tickets with title, description, and status.
- Edit or delete existing tickets.
- Filter tickets by status (open, in progress, closed).
- View statistics about tickets in a visual way.

Two versions of the project are included:

1. **React Version** – Modern, component-based approach using `React Context` for state management.
2. **Vue Version** – Reactive front-end with Vue 3 using Composition API and charts via `ApexCharts`.

---

## Features

- **Ticket CRUD**: Create, Read, Update, Delete tickets.
- **Status Management**: Open, In Progress, Closed.
- **Statistics Dashboard**: Visual representation of ticket counts per status.
- **Responsive Design**: Mobile-first design, works on all devices.
- **State Management**: React Context API / Vue reactive state.
- **Charts**: `Recharts` (React) / `ApexCharts` (Vue).

---

## Tech Stack

- **Frontend**: React, Vue 3
- **Routing**: React Router DOM (React), Vue Router (Vue)
- **Styling**: CSS / SCSS
- **Charts**: Recharts (React), ApexCharts via `vue3-apexcharts` (Vue)
- **State Management**: React Context API / Vue reactive `ref` & `reactive`

---

## Folder Structure

### React Version

```
react-app/
├── public/
│   └── index.html
├── src/
│   ├── components/        # UI components
│   ├── context/           # TicketContext.js for global state
│   ├── pages/             # Main page components
│   ├── App.js
│   ├── index.js
│   └── styles/
├── package.json
└── README.md
```

### Vue Version

```
vue-app/
├── public/
│   └── index.html
├── src/
│   ├── components/        # UI components
│   ├── views/             # Main page views
│   ├── router/            # Vue Router
│   ├── App.vue
│   ├── main.js
│   ├── assets/
│   └── charts/            # ApexCharts components
├── package.json
└── README.md
```

---

## Setup and Execution

### React Version

1. Clone the repository:

```bash
git clone <your-repo-url>
cd react-app
```

2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm start
```

- Opens at `http://localhost:3000`

4. Build for production:

```bash
npm run build
```

---

#### 💚 To run the Vue version:

1. Navigate to Vue folder:

```bash
cd vue-app
```

2. Install dependencies:

```bash
npm install
```

3. Install ApexCharts for Vue:

```bash
npm install --save apexcharts vue3-apexcharts
```

4. Start development server:

```bash
npm run serve
```

- Opens at `http://localhost:8080`

5. Build for production:

```bash
npm run build
```

---

### Switching Between Versions

- **React:** Navigate to `react-app` and run the dev server (`npm run dev`)
- **Vue:** Navigate to `vue-app` and run the dev server (`npm run dev`)
- **Twig/PHP:** Not included; the directory structure exists only for reference. Normally run via a PHP server.

> Ensure only **one dev server runs at a time** to avoid port conflicts.

---

## UI Components & State Structure

### React Version

- **TicketContext.js:** Centralized state for tickets, form data, and editing status
- **Components:**
  - `TicketForm` – Create & edit tickets
  - `TicketList` – Displays all tickets
  - `TicketItem` – Individual ticket with edit/delete buttons
  - `TicketStats` – Bar chart for ticket statistics
- **State:**
  - `tickets` – Array of ticket objects
  - `form` – Current ticket input values
  - `editing` – Currently editing ticket ID
  - `message` – Notification messages

### Vue Version

- **Reactive State:**
  - `tickets` – Reactive array of tickets
  - `form` – Current input values
  - `editing` – Currently editing ticket ID
- **Components:**
  - `TicketForm.vue` – Ticket creation & editing
  - `TicketList.vue` – List of tickets
  - `TicketItem.vue` – Individual ticket actions
  - `TicketStats.vue` – ApexCharts bar chart for ticket statistics

---

## Accessibility & Known Issues

- **Accessibility:**
  - Forms are labeled with `for` attributes
  - Buttons are focusable via keyboard
  - Color contrast checked for text readability
- **Known Issues:**
  - Vue version: Ticket editing state sometimes does not update immediately
  - React version: None significant at this time
  - Both versions: No backend, data resets on page reload

---

## Example Test User Credentials

> No authentication is implemented, but you can simulate user input:

- **Test User 1:**

  - Name: `Test User`
  - Email: `test@example.com`

- Use any ticket title/description for testing ticket creation.

---

## Screenshots

_(Add screenshots of React & Vue apps here)_

---

## Contributing

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push to branch (`git push origin feature-name`).
5. Open a pull request.

---

## License

This project is open-source and available under the MIT License.
