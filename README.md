# Pokemon React Interview Template

This is a technical interview template designed to assess React developers on key skills including:
- React Hooks (useState, useEffect)
- API integration and async operations
- State management and prop passing
- Component communication
- CSS styling
- Problem-solving approach

## For Interviewers

### Setup Instructions
1. Ensure the candidate has Node.js installed
2. Share this repository with the candidate
3. Give them the `instructions.md` file
4. Set a timer for 45 minutes (+ 15 minutes for discussion)

### What's Included
- Basic React app structure
- Incomplete components with TODO comments
- CSS starter styles
- Comprehensive instructions for candidates

### What Candidates Need to Implement
1. **Data Fetching** - Fetch Pokemon data for ids 1-20 using PokeAPI
2. **Card Styling** - Create responsive card layout with vertical design
3. **Search Functionality** - Filter Pokemon by name using existing search input
4. **Favorites System** - Add/remove Pokemon from favorites

### Evaluation Guide

#### Task 1: Data Fetching (15-20 min)
**Looking for:**
- Fetching Pokemon data for specific ids (1-20) 
- Proper useEffect usage with dependency array
- Async/await or .then() for API calls
- Displaying id, name, and image for each Pokemon
- Error handling (bonus)

**Red flags:**
- Infinite loops (missing useEffect dependencies)
- Not handling async operations properly
- Accessing undefined properties without checks

#### Task 2: Styling (10-15 min)
**Looking for:**
- Responsive multi-column card layout
- Proper vertical card arrangement (image, name, button)
- Clean visual hierarchy and spacing
- Styled buttons with background and hover effects
- Professional presentation

#### Task 3: Search (10-15 min)
**Looking for:**
- Array filter method
- Case-insensitive search
- Real-time filtering as user types (no submit button)
- "No Pokemon found" message for empty results

#### Task 4: Favorites (15-20 min)
**Looking for:**
- State lifting to App component
- Proper prop passing
- Preventing duplicate favorites
- Immutable state updates

**This is the most complex task - shows advanced React skills**

### Discussion Points
- Walk through their approach to fetching specific Pokemon by id
- Ask about their CSS layout strategy and responsive design choices
- Discuss state management decisions for search and favorites
- Discuss potential improvements or optimizations
- Review code organization and React best practices
- Ask about error handling strategies

## For Candidates

Please see `instructions.md` for your interview tasks.

## Current State

The app currently shows:
- A basic React structure
- Empty Pokemon list (needs API integration)
- Existing search input (needs functionality)
- Basic Favorites component (needs connection to main list)
- Minimal styling (cards need complete styling)

All the scaffolding is there - you just need to make it work!

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

#### `npm test`
Launches the test runner in interactive watch mode.

#### `npm run build`
Builds the app for production to the `build` folder.

