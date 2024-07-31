# Task Management Application

This is a web-based task management application similar to Trello, built using Next.js, Node.js, and MongoDB. Users can sign up, log in, and manage their tasks across different columns using a drag-and-drop interface.

## Features

1. **User Authentication**

   - Register and login functionality using email and password
   - Secure password storage and user session management

2. **Task Board**

   - Personal task board for each user upon logging in
   - Four columns: "To-Do", "In Progress", "Under Review" and "Completed"

3. **Task Management**

   - Create new tasks in any column
   - Each task includes:
     - Title (mandatory)
     - Description (optional)
     - Status (auto-filled based on column)
     - Priority (optional; values: Low, Medium, Urgent)
     - Deadline (optional)
   - Edit and delete tasks

4. **Drag and Drop Functionality**

   - Move tasks between columns with drag-and-drop
   - Automatic status update based on the new column

5. **Data Persistence**
   - Store all user data (account information and tasks) in a database
   - Ensure users can only see and manage their own tasks

<!-- ## Design

- [Figma Design File](https://www.figma.com/design/cGxPHdNwnTKRtY02oH9pt4/Assignment---Full-Stack-Developer?node-id=0-1&t=zeuLIeUShvmOwqJv-1)
- [Prototype](https://www.figma.com/proto/cGxPHdNwnTKRtY02oH9pt4/Assignment---Full-Stack-Developer?node-id=42-43&t=UrBY5itGmvfu2Fs0-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=42%3A43) -->

## Tech Stack

- **Frontend:** Next.js with TypeScript
- **Backend:** Node.js with Express
- **Database:** MongoDB
- **State Management:** Redux or React Context API
- **Styling:** CSS (any methodology or framework of your choice)

## Installation and Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/nagarjuna06/task-flow.git
   cd task-management-app
   ```

2. **Install dependencies for the frontend and backend:**

   ```bash
   # Install frontend dependencies
   cd frontend
   npm install

   # Install backend dependencies
   cd ../backend
   npm install
   ```

3. **Set up environment variables:**

   - Create a `.env` file in the `backend` directory and add the following variables:
     ```env
     MONGODB_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     ```

4. **Run the application:**

   ```bash
   # Run the backend server
   cd backend
   npm start

   # Run the frontend development server
   cd ../frontend
   npm run dev
   ```

5. **Open the application:**
   - The frontend will be running at `http://localhost:3000`
   - The backend will be running at `http://localhost:5000`

## Deployment

To deploy the application, you can use any free hosting service. Here's an example using Vercel for the frontend and Heroku for the backend:

### Frontend (Vercel)

1. **Install Vercel CLI:**

   ```bash
   npm install -g vercel
   ```

2. **Deploy to Vercel:**
   ```bash
   cd frontend
   vercel
   ```

### Backend (Heroku)

1. **Install Vercel CLI:**

   ```bash
   npm install -g heroku
   ```

2. **Login to Vercel:**

   ```bash
   vercel login
   ```

3. **Create a new Vercel app:**

   ```bash
   cd backend
   vercel create your-app-name
   ```

4. **Deploy to Vercel:**

   ```bash
   git push heroku main
   ```

5. **Set environment variables on Heroku:**
   ```bash
   heroku config:set MONGODB_URI=your_mongodb_connection_string
   heroku config:set JWT_SECRET=your_jwt_secret
   ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.
