import { Router } from 'express'
import { handleContactSubmission } from '../controllers/contactController'

const router = Router()

router.post('/', handleContactSubmission)

export default router