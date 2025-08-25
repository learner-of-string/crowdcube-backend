# 🐝 CrowdCube Backend

Welcome to **CrowdCube Backend**! This is a Node.js Express server for managing crowdfunding campaigns, built with love and a sprinkle of cuteness. It connects to MongoDB and provides a RESTful API for campaign management. Whether you're a developer, a campaign creator, or just curious, this backend is ready to help your crowd start cubing! 🧊✨

---

## 🚀 Features
- Create, read, update, and delete crowdfunding campaigns
- Filter running campaigns by closing date
- Search campaigns by creator email
- Increment collected amounts for campaigns
- Built with Express, MongoDB, and CORS
- Environment variable support via dotenv
- Ready for deployment on Vercel

---

## 📁 Project Structure
```
├── index.js         # Main server file
├── package.json     # Project metadata and scripts
├── pnpm-lock.yaml   # Dependency lock file
├── vercel.json      # Vercel deployment config
├── .gitignore       # Ignored files
└── README.md        # This file!
```

---

## 🛠️ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [pnpm](https://pnpm.io/)
- A MongoDB database (local or cloud)

### Installation
```bash
pnpm install
```

### Environment Setup
Create a `.env` file in the root directory:
```
mongoURI=your_mongodb_connection_string
PORT=3000 # or any port you like
```

---

## 🏃 Usage

### Development
```bash
pnpm dev
```

### Production
```bash
pnpm start
```

The server will run on `http://localhost:3000` (or your specified port).

---

## 📡 API Endpoints

| Method | Endpoint                   | Description                              |
|--------|----------------------------|------------------------------------------|
| GET    | `/`                        | Health check (cute message)              |
| GET    | `/campaigns`               | List all campaigns                       |
| GET    | `/running-campaigns`       | List campaigns with future closing dates |
| GET    | `/campaign-by/:email`      | List campaigns by creator email          |
| GET    | `/campaigns/:id`           | Get campaign by ID                       |
| POST   | `/add-new-campaign`        | Add a new campaign                       |
| PUT    | `/campaigns/:id`           | Edit a campaign by ID                    |
| PATCH  | `/update-collected`        | Increment collected amount               |
| DELETE | `/campaigns`               | Delete a campaign (by body.id)           |

---

## 🧩 Tech Stack
- **Node.js** & **Express**
- **MongoDB** (using official driver)
- **dotenv** for environment variables
- **CORS** for cross-origin requests
- **Vercel** for easy deployment

---

## 📝 License
This project is licensed under the ISC License.

---

## 💌 Author
Made with ☕ and 🐝 by the CrowdCube Team.

---

## 🌈 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 🦄 Fun Fact
> "Crowds are powerful. Cubes are cool. Together, we make dreams real!"

---

Happy Cubing! 🧊
