 # EZ Labs Front-End Intern Test

This project is a **responsive single-page React application** built as part of the **EZ Labs Front-End Internship Assignment**.

---

## Live Overview
A contact form that connects with the provided backend API.  
When submitted successfully, it displays a **“Form Submitted ✅”** message.  
Front-end validation ensures proper input before submission.

---

## ⚙️ Features
-  Responsive design — tested on:
  - 480p (Mobile)
  - 720p
  - 1080p
  - 2732×2048 (iPad)
  - 1440×823 (MacBook)
- Contact form with **front-end validation**
  - All fields required  
  - Valid email format check  
- Integrated with given backend API
-  Status message on successful submission

---

## Tech Stack
| Tool | Purpose |
|------|----------|
| **React.js** | Front-end framework |
| **Tailwind CSS** | Styling and responsiveness |
| **Axios** | API integration |

---

##  API Details
**Endpoint:**  
POST https://vernanbackend.ezlab.in/api/contact-us/

swift
Copy code

**Required Fields:**  
- `name`
- `email`
- `phone`
- `message`

**Example JSON Request:**
```json
{
  "name": "Amit",
  "email": "amit@gmail.com",
  "phone": "9876543210",
  "message": "hello!"
}
Successful Response (200):

json
Copy code
{
  "id": 49,
  "name": "Amit",
  "email": "amit@gmail.com",
  "phone": "9876543210",
  "message": "hello!",
  "created_at": "2025-10-10T05:27:59.371578Z",
  "updated_at": "2025-10-10T05:27:59.371598Z"
}
Front-End Validation Rules
No empty fields allowed

Email must be in valid format (example: abc@gmail.com)

After successful API call → shows “Form Submitted ✅”

 Folder Structure
 
front-end-intern-test/
├── src/
│   ├── components/
│   │   └── ContactForm.jsx
│   ├── utils/
│   │   └── api.js
│   ├── App.jsx
│   └── index.js
├── public/
│   ├── pattern-top-right.png
│   └── pattern-bottom-left.png
├── package.json
└── README.md

 How to Run Locally
 
# 1️ Install dependencies
npm install

# 2️ Start the development server
npm start
The app will open at http://localhost:3000/.

Postman Dump  
 
src/postman/contact_form_test.json
