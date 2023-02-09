import express from "express"
import quotes from './quotes'

// instantiate a new router
const router = express.Router()

/**
 * GET /
 */
router.get('/', (req, res) => {
	res.send({
		status: "success",
		message: "that's what she said...",
	})
})


router.use('/quotes', quotes)


export default router
