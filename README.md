# 🪨 Rock Samples Inventory - Frontend

A professional, modern web application built with **React** and **Vite** designed to visualize and manage an interactive catalog of geological specimens. This project provides a robust interface for researchers and students to browse, filter, and perform CRUD operations on rock samples.

Developed in collaboration with the **UNAM Institute of Geology**.

---

## 🚀 Overview

This frontend serves as the user interface for the [Rock Samples Backend](https://github.com/nowhereOnce/rocks-back-dockerized). It features a highly responsive design, real-time data synchronization, and a seamless user experience for managing complex geological data.

### ✨ Key Features

- **Interactive Data Table**: Powered by `react-data-table-component` with support for pagination, sorting, and conditional formatting.
- **Advanced Search**: Real-time filtering system to locate specimens instantly by name or metadata.
- **Specimen Details**: Expandable rows providing deep-dive information and high-resolution imagery for each sample.
- **Full CRUD Support**: Intuitive modals and forms for creating, updating, and deleting records (Admin access required).
- **Responsive UI/UX**: Built with **Material-UI (MUI)** for a clean, professional look that works across all devices.
- **Secure Integration**: Token-based authentication flow for managing sensitive data.

---

## 🛠 Tech Stack

- **Framework**: [React 18](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **UI Library**: [Material-UI (MUI)](https://mui.com/)
- **State & Logic**: Custom Hooks & Context API
- **API Client**: [Axios](https://axios-http.com/)
- **Table Management**: [React Data Table Component](https://github.com/jbetancur/react-data-table-component)
- **Styling**: Emotion & Styled Components

---

## ⚙️ Getting Started

### Prerequisites

- **Node.js** (v16.0 or higher)
- **npm** or **yarn**
- **Backend API**: Ensure the [Backend Service](https://github.com/nowhereOnce/rocks-back-dockerized) is accessible.

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd rocks-front
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root directory:
   ```env
   VITE_API_URL=http://localhost:8000/api
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`.

---

## 📂 Project Structure

```text
src/
├── components/         # Reusable UI components (Table, SearchBar, Modals)
├── hooks/              # Custom React hooks (useFetch for API management)
├── pages/              # Main view components (HomePage)
├── services/           # API service configuration and Axios instances
├── utils/              # Helper functions and error handlers
├── App.jsx             # Root application component
└── main.jsx            # Application entry point
```

---

## 🔌 API Integration

The application communicates with a FastAPI backend. Key endpoints integrated:

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/samples/` | Retrieve the full catalog of specimens |
| `POST` | `/samples/` | Add a new rock sample to the database |
| `PUT` | `/samples/{id}` | Update existing specimen details |
| `DELETE` | `/samples/{id}` | Remove a specimen from the inventory |

---

## 🧪 Development & Quality Assurance

- **Linting**: Controlled via ESLint to ensure code consistency.
- **Component Design**: Follows atomic design principles for maximum reusability.
- **Error Handling**: Centralized error management system for API failures.

---

## 🤝 Contributing

This project is part of a larger geological digitization initiative. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 👨‍💻 Author

**Aguilar Ramos Enrique Alejandro**
*Frontend Engineer specializing in React & Scientific Interfaces*

---

<p align="center">
  <img src="public/instituto-de-geologia-logo.png" alt="Institute of Geology Logo" width="100"/>
  <br>
  <b>UNAM - Instituto de Geología</b>
</p>
