
# Digital Building Analytics

Provides Building Engineers and Energy Engineers the ability to view all energy consuming assets in one location. The application includes dashboards for building management, equipment tracking, and energy consumption analysis.

## Live Demo

Try the application: [Digital Building Analytics Demo](https://terencesmithcodes.github.io/digitalbuildings1/)

Demo accounts are available in the application's login screen for testing different user roles.

## Screenshots

![App Screenshot](https://i.ibb.co/7Kn3qs2/readme.jpg")

## Authors

- [@terencesmithcodes](https://github.com/terencesmithcodes)
- [@rugby8724](https://github.com/rugby8724)

## Features

- **Secure Authentication**: Role-based access control with JWT
- **Building Dashboard**: View comprehensive building information
- **Equipment Management**: Track equipment by class and type
- **Energy Analytics**: Monitor consumption and identify savings
- **Interactive Maps**: Visualize building locations with Leaflet
- **Data Visualization**: Charts for energy metrics and equipment distribution
- **Responsive Design**: Works on desktop and mobile devices
- **Developer Documentation**: Comprehensive codebase documentation

### Technologies

- MongoDB
- Express
- React
- Node.js
- Redux Toolkit
- Tailwind CSS
- React Router DOM
- React Leaflet
- Chart.js
- JWT Authentication
- Axios
- React Toastify
- Framer Motion
- Modern isometric illustrations

## Local Setup

1. Install MongoDB locally
2. Create a .env file in the root directory with:
   ```
   NODE_ENV=development
   PORT=5501
   MONGO_URI=mongodb://localhost:27017/digitalbuildings
   JWT_SECRET=your_secret_key
   ```
3. Create a .env file in the frontend directory with:
   ```
   PORT=3001
   ```
4. Install dependencies:
   ```
   npm install
   cd frontend && npm install
   ```
5. Start the application:
   ```
   npm run dev
   ```
   This will start both the backend server (port 5501) and frontend (port 3001)

