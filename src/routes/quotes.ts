import express from 'express'
import { index, show, store, update, destroy, storeMany } from '../controllers/quotes_controller'
const router = express.Router()

/**
 * GET /resource
 */
router.get('/', index)

/**
 * GET /resource/:resourceId
 */
router.get('/:quoteId', show)

/**
 * POST /resource
 */
router.post('/', [], store)
/**
 * POST /resource
 */
router.post('/many', [], storeMany)

/**
 * PATCH /resource/:resourceId
 */
router.patch('/:quoteId', [], update)

/**
 * DELETE /resource/:resourceId
 */
router.delete('/:quoteId', destroy)

export default router
