🍽️ Mess Tracker

A smart full-stack mess management system designed to reduce food wastage and optimize meal planning in colleges, hostels, and cafeterias. Students can confirm their meals in advance, while administrators get real-time analytics to estimate food preparation efficiently.

🌐 Live Demo: Mess Tracker Live App

📌 Overview

Traditional mess systems prepare food without knowing the exact number of students who will actually eat, leading to:

Food wastage
Poor resource management
Increased operational cost
Long waiting times

Mess Tracker solves this problem through a real-time meal participation system where students can mark their attendance for meals beforehand.

✨ Features
👨‍🎓 Student Portal
Secure authentication system
View daily meal menu
Mark meal participation (Yes/No)
Real-time response updates
Simple and responsive UI
Access from mobile and desktop
👨‍🍳 Admin Portal
Create and manage meals
Open/close meal polls
Monitor expected attendance
Track live participation count
Manage mess workflow efficiently
📊 Analytics Dashboard
Meal-wise participation statistics
Real-time attendance visualization
Data-driven food preparation
Reduced food wastage through prediction
🛠️ Tech Stack
Frontend
React.js
Tailwind CSS
Axios
Recharts
React Router DOM
Backend
Spring Boot
Spring Security
JWT Authentication
REST APIs
Maven
Database
MySQL
DevOps & Deployment
Docker
Docker Compose
Vercel
Railway
🐳 Docker Support

The project is fully containerized using Docker for consistent development and deployment.

Run Using Docker
docker-compose up --build
Dockerized Services
React Frontend
Spring Boot Backend
MySQL Database
Advantages
Easy setup across machines
Consistent environments
Simplified deployment
Faster development workflow
🚀 Live Deployment
Frontend

Vercel Deployment

Backend

Hosted on Railway

📷 Screenshots
Home Page

Add screenshot here

Student Dashboard

Add screenshot here

Admin Dashboard

Add screenshot here

Analytics Section

Add screenshot here

⚙️ Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/your-username/mess-tracker.git
cd mess-tracker
🔹 Frontend Setup
cd frontend
npm install
npm run dev

Frontend runs on:

http://localhost:5173
🔹 Backend Setup
cd backend
./mvnw spring-boot:run

Backend runs on:

http://localhost:8080
🔐 Environment Variables
Frontend .env
VITE_API_URL=http://localhost:8080
Backend application.properties
spring.datasource.url=YOUR_DATABASE_URL
spring.datasource.username=YOUR_DATABASE_USERNAME
spring.datasource.password=YOUR_DATABASE_PASSWORD

jwt.secret=YOUR_SECRET_KEY
📂 Project Structure
mess-tracker/
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── services/
│
├── backend/
│   ├── controller/
│   ├── service/
│   ├── repository/
│   ├── entity/
│   └── security/
│
├── docker-compose.yml
└── README.md
📈 Future Improvements
QR-based mess entry system
AI-based food demand prediction
Push notifications for meals
Meal feedback and rating system
Mobile application
Monthly analytics reports
Role-based access control
💡 Key Highlights
Reduced food wastage through real-time participation tracking
Built scalable full-stack architecture
Containerized application using Docker
Responsive UI optimized for all devices
Secure authentication using JWT
Real-time analytics dashboard for administrators
🎯 Resume-Worthy Impact
Developed a full-stack mess automation platform serving real-time meal participation workflows.
Implemented JWT-based secure authentication and role-based access handling.
Reduced unnecessary food preparation through predictive participation tracking.
Dockerized the complete application for simplified deployment and scalability.
🤝 Contributing

Contributions are welcome.

Fork the repository
Create a new branch
Commit your changes
Push the branch
Open a Pull Request
📄 License

This project is licensed under the MIT License.

👨‍💻 Developed By
Reetesh Sahu
