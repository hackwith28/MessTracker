# 🍽️ Mess Tracker

Smart mess management system that helps colleges and hostels reduce food wastage by collecting students' meal responses in advance and providing real-time analytics to mess administrators.

---

## 🚀 Live Demo

🌐 https://mess-tracker.vercel.app/

---

## ✨ Features

### 👨‍🎓 Student Portal
- Student authentication
- View daily mess menu
- Mark meal attendance (Yes/No)
- Real-time response updates
- Responsive UI for mobile and desktop

### 👨‍🍳 Admin Portal
- Create and manage meals
- Open/close meal polls
- View expected student count
- Track participation analytics
- Manage mess operations efficiently

### 📊 Analytics Dashboard
- Meal participation statistics
- Real-time attendance tracking
- Better food quantity estimation
- Reduced food wastage

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios
- Recharts
- React Router DOM

### Backend
- Spring Boot
- Spring Security
- JWT Authentication
- REST APIs
- Maven

### Database
- MySQL

### DevOps & Deployment
- Docker
- Docker Compose
- Vercel
- Railway

---

# 🐳 Docker Support

Run the complete application using Docker:

```bash
docker-compose up --build
📂 Project Structure
mess-tracker/
│
├── Frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── services/
│
├── Backend/
│   ├── controller/
│   ├── service/
│   ├── repository/
│   ├── entity/
│   └── security/
│
├── docker-compose.yml
└── README.md
⚙️ Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/your-username/mess-tracker.git
cd mess-tracker
2️⃣ Frontend Setup
cd Frontend
npm install
npm run dev

Frontend runs on:

http://localhost:5173
3️⃣ Backend Setup
cd Backend
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
🎯 Problem It Solves

Traditional mess systems prepare food without accurate attendance data, leading to:

Food wastage
Increased operational cost
Poor resource management

Mess Tracker solves this using real-time meal participation tracking.

💡 Key Highlights
Real-time meal participation system
Reduced food wastage
Secure JWT authentication
Responsive full-stack application
Dockerized deployment setup
Analytics dashboard for admins
📈 Future Improvements
QR-based mess entry
Push notifications
AI-based food demand prediction
Meal feedback system
Mobile application
🤝 Contributing

Contributions are welcome.

Fork the repository
Create your branch
Commit your changes
Push the branch
Open a Pull Request
📄 License

This project is licensed under the MIT License.

👨‍💻 Developed By
Reetesh Sahu
