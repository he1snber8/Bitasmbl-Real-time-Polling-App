# Real-time-Polling-App

A React-based web application leveraging Socket.IO for real-time poll creation, voting, and dynamic chart updates. Users can interact by liking or commenting on polls and see live results as they happen.

## Tech Stack
- React (Front-End)
- Socket.IO (WebSocket)

## Requirements
- Allow users to create, edit, and delete polls
- Enable real-time voting updates for all users
- Display poll results in dynamic charts
- Support user interactions such as liking or commenting on polls

## Installation
1. Clone the repository:
   bash
   git clone https://github.com/YourUsername/Bitasmbl-Real-time-Polling-App.git
   cd Bitasmbl-Real-time-Polling-App
   
2. Install dependencies:
   bash
   npm install
   
3. Create a `.env` file in the project root and add the following variables:
   bash
   REACT_APP_API_URL=http://localhost:5000    # REST API server
   REACT_APP_SOCKET_SERVER_URL=http://localhost:5000  # Socket.IO server
   
4. Start the development server:
   bash
   npm start
   

## Usage
1. Navigate to `http://localhost:3000` in your browser.
2. Create a new poll by providing a question and options.
3. Share the poll link or invite users to vote.
4. Watch vote counts update live in the chart.
5. Like or comment on polls to engage with other users.

## Implementation Steps
1. Initialize a React project using Create React App.
2. Install `socket.io-client`, `axios`, and a charting library (e.g., `chart.js` + `react-chartjs-2`).
3. Configure environment variables in `.env` for API and Socket.IO endpoints.
4. Build a Poll creation form with controlled inputs and POST requests to `/api/polls`.
5. Set up Socket.IO client in React to listen for `voteUpdate` events.
6. Render poll details and integrate dynamic charts to visualize real-time results.
7. Implement editing and deleting polls via PUT and DELETE requests.
8. Add voting controls that emit socket events and POST votes to `/api/polls/:id/vote`.
9. Create comment and like components, handling POST to `/api/polls/:id/comments` and `/api/polls/:id/like`.
10. Manage application state with React Context or a state library (e.g., Redux) to synchronize UI components.
11. Style components for a responsive, engaging user interface.

## API Endpoints
- GET    /api/polls               Retrieve all polls
- GET    /api/polls/:id           Retrieve poll by ID
- POST   /api/polls               Create a new poll
- PUT    /api/polls/:id           Edit an existing poll
- DELETE /api/polls/:id           Delete a poll
- POST   /api/polls/:id/vote      Submit a vote
- POST   /api/polls/:id/comments  Add a comment
- POST   /api/polls/:id/like      Like a poll