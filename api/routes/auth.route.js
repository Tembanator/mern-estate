import express from 'express'
import { signup } from '../controller/auth.controller.js'
// import { test } from '../controller/user.controller.js'

const router = express.Router()

router.post('/signup', signup)

export default router