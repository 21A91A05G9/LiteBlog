# Blog-Lite

Developed a blog application using React.js, Bootstrap, Express.js, Node.js, and MongoDB, leveraging the MERN stack to provide user authentication and support for CRUD operations. The application features a search bar with real-time updates, a category menu for intuitive navigation, and personalized blog spaces to enhance the overall user experience.

## Usage

## Home Page

![image](https://github.com/user-attachments/assets/1c6131e1-206a-4070-94e2-74ab6f0f0370)

### User Registration and Login:

Allows users to create accounts and securely log in.

![image](https://github.com/user-attachments/assets/4f0c2d37-8c03-4ec5-861e-9becdc80c416)

### Search By Category:

Enables users to find blogs based on specific categories.

![{324B8B69-15D4-4424-A3CF-576E02A14A7A}](https://github.com/user-attachments/assets/2c8e29d3-f572-45a8-86ef-f59cbf98c3e2)

### Real-Time Search:

Provides real-time search results as users type keywords.

![{9CE95F96-5571-4C54-8C60-AF130D0DB35F}](https://github.com/user-attachments/assets/632e15ef-11d8-4657-89a8-01bb576ad027)

### Latest Blogs Section:

Displays the latest blogs and a welcoming interface for users.

![image](https://github.com/user-attachments/assets/998fd813-db18-435c-8a11-cf1ff3afe81d)

### CRUD Operation

Lets users create, read, update, and delete blog posts.

![{099EA0C7-7A6C-43E6-9885-D1D15F8AB542}](https://github.com/user-attachments/assets/249f87fe-c598-4aa0-b16c-f1998a5cc387)

![image](https://github.com/user-attachments/assets/4a493654-2a93-455d-ac5a-3d75db7e505b)

## Deploy Link

https://lite-blog-frontend.vercel.app/

## Table of Contents
- [Usage](#usage)
- [Depoly Link](#deploy-link)
- [Project Structure](#project-structure)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)


## Project Structure
      E-Leave_HubT/
      ├── Backend/                  # Backend code
      │   ├── models/               # Database models
      │   ├── images                # Blog images
      │   ├── package.json          # Backend dependencies
      │   └── App.js                # Backend entry point
      │   ├── vercel.json/          # Deeployment
      ├── Frontend/                 # Frontend code
      │   ├── public/               # Public assets
      │   ├── src/                  # React components and logic
      │   ├── package.json          # Frontend dependencies
      └── README.md                 # Project documentation



## Features
- **Blog Management:** Create, read, update, and delete (CRUD) blog posts.
- **Categories and Tags:** Organize blogs by categories and tags for better discoverability.
- **Search and Filter:** Real-time search functionality with options to filter by categories, tags, or keywords.
- **Personalized Blog Spaces:** Dedicated space for each user to manage and display their blogs.
- **Latest Blogs Section:** Highlight recently published blogs on the homepage.
- **Image Uploads**: Implement image uploads using Multer for efficient image storage and dynamic retrieval.
- **Secure Authentication:** Secure login and registration using sessions.

## Technology Stack
- **Frontend:** [React.js](https://reactjs.org/), HTML, CSS, JavaScript, Bootstrap
- **Backend:** [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/)
- **Database:** [MongoDB](https://www.mongodb.com/)
- **Deployment:**[Vercel](https://vercel.com/)

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) and npm
- [MongoDB](https://www.mongodb.com/) installed and running, or use a MongoDB cloud service like MongoDB Atlas
- [Vercel](https://vercel.com/) account (for frontend deployment)

### Steps
1. **Clone the repository:**
   ```bash
   git clone https://github.com/21A91A05G9/LiteBlog.git
   cd LiteBlog
2. **Backend Setup:**

- Navigate to the backend folder:
  ```bash
  cd backend
  
- Install dependencies:
  ```bash
  npm install
  
3. **Frontend Setup:**

- Navigate to the frontend folder:
  ```bash
  cd ../frontend
  
- Install dependencies:
   ```bash
  npm install
  
4. **Start the Application:**

- Start the backend server:
  ```bash
  npm start
  
- Start the frontend server:
  ```bash
  npm start

The backend will run on http://localhost:5000, and the frontend will run on http://localhost:3000 by default.


## Future Enhancements
- Dark Mode Support
- Password Recovery and Update Feature
- Social Sharing and Notifications
- Commenting System
- Mobile App Development

## Contributing
Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-branch-name
   
3. Commit your changes:
   ```bash
   git commit -m 'Add some feature'
   
4. Push to the branch:
   ```bash
   git push origin feature-branch-name
   
5. Open a pull request.
   

