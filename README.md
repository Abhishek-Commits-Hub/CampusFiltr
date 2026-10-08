# CampusFiltr 🎓

### Making college information easier to find, verify, and use.

CampusFiltr is a student-focused college information platform built to solve a simple but common problem: **college information is available, but finding the information that actually matters to you is often difficult.**

Students may have to go through different sections of a college website, check notices shared in WhatsApp groups, look for internship opportunities, or ask others for updates. Even when a notice reaches them through WhatsApp, it is not always easy to tell whether it is the original official notice or the latest version.

CampusFiltr brings these things together in one place and lets students see information based on their own **programme, branch, semester and entry type**.

---

## 🚀 What CampusFiltr Does

CampusFiltr provides a simpler way for students to keep track of important college information.

### 📌 Personalized Notices

Students can see notices relevant to their programme, branch, semester and entry type instead of going through every notice on the college website.

### 🔎 Notice Search & Filters

Students can search for notices and filter them by different categories to quickly find what they need.

### ✅ Verified Official Sources

Every notice can be connected to its original official source. This helps students verify information received through WhatsApp groups or other channels before acting on it.

### 💼 Internship Opportunities

Admins can add internship opportunities and specify whether they are available to everyone or only to students from a particular branch and semester.

### 🚨 Urgent Updates

Important updates such as sudden holidays, exam changes or emergency announcements can be highlighted so students are less likely to miss them.

### 📊 Attendance

Students can check their own attendance from their account, while authorized faculty or admins can update attendance records.

### 📄 Personal Results

Students can access their own academic results through the Students section instead of having to search through general college information.

---

## 🧩 How It Works

The idea behind CampusFiltr is intentionally simple.

```text
                ADMIN
                  │
                  ▼
        ┌──────────────────┐
        │   Admin Panel    │
        └────────┬─────────┘
                 │
        Add / Update Information
                 │
                 ▼
        ┌──────────────────┐
        │    Database      │
        └────────┬─────────┘
                 │
                 ▼
        ┌──────────────────┐
        │   CampusFiltr    │
        │     Website      │
        └────────┬─────────┘
                 │
                 ▼
              STUDENT
                 │
       ┌─────────┼─────────┐
       ▼         ▼         ▼
    Notices   Internships  Student Data
                           │
                    ┌──────┴──────┐
                    ▼             ▼
                Attendance      Results
```

Admins manage the information through the website. Students then log in and see the information that applies to them.

There is no need for the system to automatically decide whether a notice is important. **The admin decides what should be published, who it applies to, and whether it should be marked as urgent.**

---

## 💡 Why We Built It

We noticed that the problem is not necessarily that colleges lack information.

The problem is that **students have to dig through too much information to find the small part that matters to them.**

For example, a student may open the college notice page and find notices meant for multiple branches, semesters and student groups. At the same time, an important update may already be circulating in a WhatsApp group, but the student may not know where it originally came from.

CampusFiltr is our attempt to make that experience simpler.

---

## 🛠️ Tech Stack

We are keeping the project simple and practical so that it is easy to build, maintain and improve.

| Part        | Technology                    |
| ----------- | ----------------------------- |
| Frontend    | HTML, CSS, JavaScript         |
| Backend     | Node.js, Express.js           |
| Database    | SQLite                        |
| Admin Panel | HTML, CSS, JavaScript         |
| Deployment  | Free hosting / college server |

The project does **not depend on AI or machine learning**. The content is managed by authorized admins.

---

## 📁 Project Structure

A basic structure for the project:

```text
CampusFiltr/
│
├── frontend/
│   ├── index.html
│   ├── css/
│   ├── js/
│   └── assets/
│
├── backend/
│   ├── server.js
│   ├── routes/
│   ├── controllers/
│   └── database/
│
├── admin/
│   ├── dashboard.html
│   └── ...
│
├── README.md
└── package.json
```

> The structure may change as the project develops.

---

## 👥 Who Is It For?

CampusFiltr is primarily designed for:

* Students who want relevant college updates in one place
* Faculty and authorized admins who manage student information
* Colleges that want a simpler way to organize campus information

Although our initial idea is based on the college environment we are familiar with, the concept can be adapted for other colleges as well.

---

## 🎯 Our Goal

We are not trying to replace the official college website.

CampusFiltr is meant to work **alongside it** and make the student experience better.

The goal is simple:

> **Find the information that matters to you, verify where it came from, and get things done without digging through everything else.**

---

## 🔐 Important Note

CampusFiltr is a prototype/project developed for demonstration and educational purposes.

Any real deployment involving student attendance, academic results or other personal information would require proper authentication, authorization, data protection and approval from the concerned institution.

---

## 🌱 Future Improvements

Some improvements we may explore as the project grows:

* Better admin controls
* More detailed student profiles
* Improved notice organization
* Mobile-friendly improvements
* More college-specific modules
* Stronger authentication and access control
* Deployment on an actual college infrastructure

---

## 🤝 Contributing

Found something that can be improved?

You can contribute by:

1. Forking the repository
2. Creating a new branch
3. Making your changes
4. Testing them
5. Opening a pull request

Ideas, suggestions and improvements are welcome.

---

## 📜 License

This project is open-source. See the `LICENSE` file for details.

---

## ❤️ Built for Students

CampusFiltr started with a simple observation:

**Students don't need more information. They need the right information, in the right place, at the right time.**

That's what we're trying to build.
