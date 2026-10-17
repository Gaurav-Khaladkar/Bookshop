<div align="center">

# 📚 BookHub — Full-Stack E-Commerce Bookstore

### Scalable Online Book Marketplace & Order Processing Platform

[![React](https://img.shields.io/badge/Frontend-React_18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Express.js](https://img.shields.io/badge/Backend-Express_5.x-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MySQL](https://img.shields.io/badge/Database-MySQL_8-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![JWT](https://img.shields.io/badge/Auth-JWT_Bearer-FFB13B?style=for-the-badge&logo=jsonwebtokens&logoColor=black)](https://jwt.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)

<br/>

<p align="center">
  <b>BookHub</b> is an end-to-end full-stack e-commerce bookstore solution featuring user authentication, book catalog management with image upload via Multer, shopping cart logic, order fulfillment, and relational database persistence with MySQL.
</p>

</div>

---

## ⚡ Core Features

* **🔐 User Authentication**: Secure registration and login flow utilizing Bcrypt password hashing and stateless JWT bearer tokens.
* **📖 Dynamic Catalog & Search**: Browse books by category, genre, author, and price brackets with instant client-side filtering.
* **🖼️ Media Asset Management**: Automated multipart book cover uploads and static asset delivery powered by Multer.
* **🛒 Cart & Checkout State Flow**: Real-time price calculation, quantity updates, order summary validation, and persistent storage.
* **📦 Relational Database Engine**: High-throughput MySQL schemas with foreign keys, indexes, and parameterized queries using `mysql2`.

---

## 🏗️ Repository Architecture

```text
Bookshop/
└── bookshop/
    ├── client/               # React.js Single Page Application (SPA)
    │   ├── src/
    │   │   ├── components/   # Navbar, BookCard, CartDrawer, CheckoutModal
    │   │   ├── pages/        # Home, Catalog, ProductDetails, Cart, Admin
    │   │   └── services/     # Axios API client integrations
    │   └── package.json
    └── server/               # Express.js REST API Server
        ├── routes/           # Auth, Books, Cart, and Order route handlers
        ├── middleware/       # JWT authentication guard & Multer config
        ├── config/           # MySQL database pool connection
        └── index.js          # API server entrypoint
```

---

## 🚀 Quick Start Guide

### Prerequisites
* [Node.js (v18+)](https://nodejs.org/)
* [MySQL (v8+)](https://www.mysql.com/)

### 1. Backend Server Setup
```bash
cd bookshop/server
npm install
node index.js
```
*The backend API will run on `http://localhost:5000`.*

### 2. Frontend Client Setup
```bash
cd bookshop/client
npm install
npm start
```
*The React client will launch at `http://localhost:3000`.*

---

## 📡 API Endpoints Reference

| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/auth/register` | Public | Register new user account with hashed password |
| `POST` | `/api/auth/login` | Public | Verify credentials and return JWT token |
| `GET` | `/api/books` | Public | Fetch all published books with catalog metadata |
| `POST` | `/api/books` | Admin | Upload new book with cover image via Multer |
| `POST` | `/api/orders` | Auth | Place new customer order and clear active cart |

---

## 👨‍💻 Author
**Gaurav Khaladkar**
* 🌐 GitHub: [@Gaurav-Khaladkar](https://github.com/Gaurav-Khaladkar)
* 💼 LinkedIn: [Gaurav Khaladkar](https://www.linkedin.com/in/gaurav-khaladkar/)
* 📧 Email: [gauravkhaldkar2001@gmail.com](mailto:gauravkhaldkar2001@gmail.com)

---

## 📄 License
This project is licensed under the [MIT License](LICENSE).