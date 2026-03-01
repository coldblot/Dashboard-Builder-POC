# Dashboard Builder POC

There is 4 different dynamic charts build with nodejs and react

## Run with Docker (Recommended)

### Steps
docker-compose up --build

- Frontend: http://localhost:3000
- Backend API: http://localhost:2000

## Run Locally (Without Docker)

### Backend
cd backend
npm install
npm run dev

### Frontend
cd frontend
npm install
npm start


## API Endpoints
- GET /api/widgets/categorical
- GET /api/widgets/temporal
- GET /api/widgets/hierarchical
- GET /api/widgets/relational
