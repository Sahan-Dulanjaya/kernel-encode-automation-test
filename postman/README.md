# Kernel Encode API Automation – Postman 📫

This folder contains the Postman-based setup for testing the Kernel Encode API test.

The collection includes automated tests for:

- 🔐 Login (`/api/login`)
- 📦 List Products (`/api/products`)
- ➕ Create Product (`/api/products`)

All tests leverage dynamic variables and chained authentication using Postman environments.

---

## 🧩 Setup Instructions

### 1. Import in Postman

1. Open Postman
2. Go to **File > Import**
3. Import both:
   - `Kernel-API-Tests.postman_collection.json`
   - `Kernel-API-Env.postman_environment.json`

4. Select the environment: **`Kernel-API-Env`** in the top right corner

---

## ▶️ Running Tests

- Click `Kernel-API-Tests`
- Hit ⏭️ **Run** (Collection Runner)
- Make sure the **Environment** is set to `Kernel-API-Env`
- Click **Start Run**

