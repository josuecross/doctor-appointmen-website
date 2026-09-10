# Doctor Appointment — Full-Stack Web Application

**React + Node.js/Express + MongoDB application with JWT authentication, role-aware API access, doctor/user data, reviews, and booking-domain modeling.**

This project is a full-stack learning application built to practice the complete browser-to-database workflow rather than only frontend rendering. It connects a React interface to an Express REST API, authentication middleware, and MongoDB/Mongoose persistence.

## What this project demonstrates

- Building a React frontend with route-based user flows
- Designing REST-style backend endpoints with Express
- Modeling application data with MongoDB and Mongoose
- JWT-based authentication and protected routes
- Role-aware authorization for patient/doctor workflows
- Password hashing with `bcryptjs`
- Frontend/backend integration and JSON request/response handling
- Separating controllers, routes, authentication middleware, and persistence models
- Reasoning about failures across UI, API, identity, authorization, and database layers

## Technology stack

### Frontend

- React 18
- React Router
- Vite
- Tailwind CSS
- React Toastify
- Swiper / React Icons

### Backend

- Node.js
- Express
- MongoDB
- Mongoose
- JSON Web Tokens (`jsonwebtoken`)
- `bcryptjs`
- CORS / cookie parsing
- `dotenv` configuration

## Architecture

```text
Browser / React UI
        |
        | HTTP + JSON
        v
Express routes
        |
        +--> authentication / role middleware
        |
        v
Controllers
        |
        v
Mongoose models
        |
        v
MongoDB
```

The project keeps the major responsibilities visible in separate areas:

```text
backend/
├── Controllers/    # request handling and application operations
├── Routes/         # REST endpoint definitions
├── auth/           # JWT authentication / role checks
├── models/         # Mongoose domain models
└── index.js        # Express app, middleware, DB connection

frontend/
└── src/
    ├── Dashboard/  # account-oriented views
    ├── components/ # reusable UI pieces
    ├── pages/      # route-level screens
    └── ...         # application state and presentation
```

## Implemented backend areas

### Authentication and authorization

Requests can carry a bearer JWT. The authentication middleware validates the token, attaches the user identity and role to the request, and role checks can restrict protected operations.

This creates a useful distinction between:

1. **authentication** — is the token valid and who is the caller?
2. **authorization** — is that caller allowed to perform this operation?

### Users and doctors

Separate user and doctor models/controllers support account and profile workflows. This gives the application different domain roles rather than treating every authenticated account identically.

### Reviews

The backend includes review routes, controllers, and persistence models associated with the doctor-facing domain.

### Booking domain model

A booking model connects a user and doctor with an appointment date, status, price-related data, and payment-state field. The model demonstrates relational references inside a document database through Mongoose `ObjectId` references.

> The repository should be read as a learning/full-stack project. Some domain ideas are modeled more fully than their end-to-end UI/API workflow, so the README intentionally avoids claiming production completeness.

## API shape

The Express application currently exposes route groups such as:

```text
/api/v1/auth
/api/v1/users
/api/v1/doctors
/api/v1/reviews
```

A typical request path is:

```text
React event
  -> HTTP request
  -> Express route
  -> authentication / authorization when required
  -> controller
  -> Mongoose query/update
  -> JSON response
  -> UI state
```

That separation is also the main debugging model for the application: a visible UI problem can originate in the frontend state, request payload, access control, backend logic, or persisted data.

## Local setup

### 1. Clone

```bash
git clone https://github.com/josuecross/doctor-appointmen-website.git
cd doctor-appointmen-website
```

### 2. Backend

```bash
cd backend
npm install
```

Create a local `.env` with values appropriate for your environment:

```env
MONGO_URL=mongodb://localhost:27017/doctor-appointments
JWT_SECRET_KEY=replace-with-a-local-secret
PORT=8000
```

Then run:

```bash
npm run start-dev
```

### 3. Frontend

In another terminal:

```bash
cd frontend
npm install
npm run dev
```

Configure the frontend API target for the backend environment you are using.

## Engineering observations / future improvements

This project is useful not only for its implemented features but also for identifying the next engineering improvements a production-oriented version would need:

- automated API and frontend tests;
- centralized input/schema validation;
- stronger error normalization;
- explicit booking service/routes around the existing booking model;
- tighter CORS configuration;
- refresh-token/session strategy if required;
- pagination and query filtering for larger datasets;
- deployment configuration separated cleanly from local development.

## Portfolio relevance

This repository complements my Python/FastAPI and C#/.NET work by demonstrating the same application concepts in a JavaScript stack: **request handling, authentication, authorization, API contracts, persistence, application state, and cross-layer troubleshooting**.

## Author

**Josue David Cruz Lopez**  
Costa Rica  
GitHub: [@josuecross](https://github.com/josuecross)  
LinkedIn: [josue-david-c](https://www.linkedin.com/in/josue-david-c/)
