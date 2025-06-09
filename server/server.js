import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.js'
import { clerkWebHooks, stripeWebhooks } from './controllers/webhooks.js'
import educatorRouter from './routes/educatorRoutes.js'
import { clerkMiddleware } from '@clerk/express'
import connectCloudinary from './configs/cloudinary.js'
import courseRouter from './routes/courseRoute.js'
import userRouter from './routes/userRoutes.js'

// Initialize Express
const app = express()

// Connect to MongoDB
await connectDB()
await connectCloudinary()

// Middleware
app.use(cors())
app.use(clerkMiddleware())

// Use raw body only for Clerk webhooks
app.post('/clerk', express.raw({ type: "application/json" }), clerkWebHooks)


// You can use express.json() for all other routes *after* the webhook
app.use(express.json())


// Basic test route
app.get('/', (req, res) => res.send("API working"))
app.use('/api/educator',express.json(),educatorRouter)
app.use('/api/course',express.json(),courseRouter)
app.use('/api/user',express.json(),userRouter)
app.post('/stripe',express.raw({type : 'application/json'}),stripeWebhooks)

// Start server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
