# Trainology 🎓

A full-stack e-learning platform built with the MERN stack. Trainology empowers educators to create and manage courses while providing students with an intuitive interface to discover, purchase, and track their learning progress.

## 🚀 Tech Stack

**Frontend:**
*   **React + Vite:** For a fast, responsive user interface.
*   **Tailwind CSS:** Utility-first styling for modern design.

**Backend:**
*   **Node.js & Express.js:** RESTful API architecture.
*   **MongoDB:** NoSQL database for flexible data modeling.
*   **Cloudinary & Multer:** Efficient handling and cloud storage for course media and user uploads.

## ✨ Key Features

### 👨‍🎓 Student Portal
*   **Course Discovery:** Browse available courses and view detailed curricula.
*   **Secure Purchasing:** Integrated checkout system (via Webhooks) for course enrollment.
*   **Dedicated Learning Player:** Distraction-free video player for course consumption.
*   **Progress Tracking:** Automatically tracks completed lessons and overall course progress.

### 👨‍🏫 Educator Portal
*   **Analytics Dashboard:** Overview of course performance and revenue.
*   **Course Management:** Create, edit, and publish new courses (`AddCourse`).
*   **Student Insights:** View enrollment data and track student engagement.

## 📁 Project Structure

This project is separated into a `client` and `server` architecture.

### Backend (`/server`)
Handles all business logic, database interactions, and API routes.
*   **Models:** `User`, `Course`, `CourseProgress`, and `Purchase` schemas.
*   **Controllers:** Logic for handling users, educators, courses, and payment webhooks.
*   **Middleware:** Authentication protection for secure routes.

### Frontend (`/client`)
The React user interface.
*   **`/src/pages/student`:** Contains the Home, Course List, Details, Enrollments, and Player views.
*   **`/src/pages/educator`:** Contains the Educator Dashboard, Course Creator, and Student Roster.
*   **`/src/components`:** Reusable UI components like Navbars, Footers, and Course Cards.

## 🛠️ Installation & Setup

**1. Clone the repository**
```bash
git clone [https://github.com/yourusername/TrainologyProject.git](https://github.com/yourusername/TrainologyProject.git)
cd TrainologyProject
