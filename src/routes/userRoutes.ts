import express from 'express'

// Controllers
import { login, register, profile } from '../controllers/userControllers'

const route = express.Router()

route.post('/login', login )
route.post('/register', register)
route.get('/profile', profile)


export { route as userRoutes }