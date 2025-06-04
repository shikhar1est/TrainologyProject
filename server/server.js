import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.js'
import { clerkWebHooks } from './controllers/webhooks.js'

// Initialize Express
const app = express()

// Connect to MongoDB
await connectDB()

// Middleware
app.use(cors())

// Use raw body only for Clerk webhooks
app.post('/clerk', express.json(), clerkWebHooks)


// You can use express.json() for all other routes *after* the webhook
app.use(express.json())

// Basic test route
app.get('/', (req, res) => res.send("API working"))

// Start server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
