# Authentication & Authorization System (Express + MongoDB + Next.js + TypeScript)

This project includes:
- **Backend**: Express + MongoDB + JWT authentication + role-based authorization.
- **Frontend**: Next.js app with login/register and a role-based dashboard.

## Tech stack
- Node.js + TypeScript
- Express + Mongoose
- MongoDB
- JWT + bcryptjs
- Next.js (App Router)

## Roles
- `admin`
- `manager`
- `user`

Each role gets different dashboard widgets from the API.

## Setup

### 1) Install dependencies
```bash
npm run install:all
```

### 2) Configure backend environment
Copy `.env.example` into `.env`:

```bash
cp backend/.env.example backend/.env
```

Update values as needed.

### 3) Run backend
```bash
npm run dev --prefix backend
```

### 4) Run frontend
```bash
NEXT_PUBLIC_API_URL=http://localhost:5000/api npm run dev --prefix frontend
```

Frontend runs on `http://localhost:3000` and backend on `http://localhost:5000`.

## API endpoints
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/profile` (protected)
- `GET /api/dashboard` (protected, all roles)
- `GET /api/dashboard/admin` (admin only)
- `GET /api/dashboard/manager` (manager/admin)
- `GET /api/dashboard/user` (user/manager/admin)
