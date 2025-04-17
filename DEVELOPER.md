# Developer Documentation

This document contains information for developers working on the Digital Building Analytics project.

## Demo Credentials

The GitHub Pages demo version uses the following test accounts:

| Role | Username | Password | Access |
|------|----------|----------|--------|
| Admin | admin | admin123 | Full access to all features |
| Engineer | demo | demo123 | Access to building dashboards |
| Energy | energy | energy123 | Access to energy analytics |

**Note:** These credentials are for development/testing only and should not be exposed in production.

## CodeTour Documentation

This project includes guided tours of the codebase using the VS Code CodeTour extension. These tours are stored in the `.tours` directory but are not committed to the repository.

### Setting Up CodeTour

1. Install the [CodeTour extension for VS Code](https://marketplace.visualstudio.com/items?itemName=vsls-contrib.codetour)
2. Open the Command Palette in VS Code (Ctrl+Shift+P or Command+Shift+P)
3. Type "CodeTour: Explorer" and select it
4. A CodeTour explorer panel will open, showing the available tours

### Available Tours

- **Main Tour**: Overview of the application architecture and components
- **Authentication Flow Tour**: Detailed explanation of the auth system
- **Energy Analytics Tour**: Deep dive into the energy analytics features

### Managing Tours

- Tours are saved in `.tours/*.tour` JSON files
- They are excluded from git via the `.gitignore` file
- You can create your own tours by using "CodeTour: Record Tour" from the command palette

## Local Development Tips

- Use `npm run dev` to run both frontend and backend concurrently
- The mock API in `backend/models/data/` provides test data when MongoDB isn't available
- Set `USE_MOCK_DATA=true` in your `.env` file to use mock data instead of MongoDB
- The application includes sample building and energy data for demonstration

## GitHub Pages Deployment

To deploy updates to GitHub Pages:

1. Make your changes and test locally
2. Run `cd frontend && npm run deploy`
3. The site will be built and published to the gh-pages branch
4. Visit https://terencesmithcodes.github.io/digitalbuildings1/ to see the changes

## Code Conventions

- Use functional components with hooks for React
- Keep components focused and reusable
- Use Redux Toolkit for state management
- Follow TailwindCSS class naming conventions
- Use motion components for animations
- Write responsive designs that work on mobile and desktop