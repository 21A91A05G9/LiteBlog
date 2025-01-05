# Blog-Lite

Developed a blog application using React.js, Bootstrap, Express.js, Node.js, and MongoDB, leveraging the MERN stack to provide user authentication and support for CRUD operations. The application features a search bar with real-time updates, a category menu for intuitive navigation, and personalized blog spaces to enhance the overall user experience.

## Table of Contents
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)


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


## Usage
![image](https://github.com/user-attachments/assets/1c6131e1-206a-4070-94e2-74ab6f0f0370)

### User Registration and Login:
![image](https://github.com/user-attachments/assets/4f0c2d37-8c03-4ec5-861e-9becdc80c416)

### Categories and Tags:
![{BD374CE7-4F80-412B-A89F-F53F184071BA}](https://github.com/user-attachments/assets/64981cb8-6864-4b8a-a8c7-2e7460e98ab7)

### Search and Filter:
![image](https://github.com/user-attachments/assets/4a493654-2a93-455d-ac5a-3d75db7e505b)

### Latest Blogs Section:
![image](https://github.com/user-attachments/assets/998fd813-db18-435c-8a11-cf1ff3afe81d)

### Blog Management
![{5C5F3DB5-B291-4698-A760-4FA9570BB699}](https://github.com/user-attachments/assets/977ca5fb-3b1a-49c2-887d-e33c9d87e875)




![{099EA0C7-7A6C-43E6-9885-D1D15F8AB542}](https://github.com/user-attachments/assets/249f87fe-c598-4aa0-b16c-f1998a5cc387)
![{34C99B21-1B56-4187-8ECA-9BF1B2AEFEF9}](https://github.com/user-attachments/assets/9544c5cb-002f-4805-96c2-e9f0f684f93f)

![{68D804A2-3D7C-4612-841D-D2429B92C497}](https://github.com/user-attachments/assets/cc29eb7d-48f8-4ec0-b322-e8fab2619168)

![image](https://github.com/user-attachments/assets/1dae7bcf-717e-4430-a4e6-a35da12384a4)




### Student Registration and Login:
Students can register and log in to submit leave requests.

![image](https://github.com/user-attachments/assets/4f0c2d37-8c03-4ec5-861e-9becdc80c416)

![{0F399728-CEAF-40F9-9B3A-58FB945FCA32}](https://github.com/user-attachments/assets/66065314-ee6e-4737-8408-dd4b793c1f83)






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
   

