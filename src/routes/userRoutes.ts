import express from 'express'

// Controllers
import { login, register } from '../controllers/userControllers'

const route = express.Router()

route.post('/login', login )
route.post('/register', register)


 export { route as userRoutes }