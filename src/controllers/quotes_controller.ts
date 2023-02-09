/**
 * Controller Template
 */
import Debug from 'debug'
import { Request, Response } from 'express'
import prisma from '../prisma'


/**
 * Get all resources
 */
export const index = async (req: Request, res: Response) => {
  try {
    const data = await prisma.quotes.findMany()
    res.send({
      status: "success",
			data,
    })

  } catch (err) {
    console.log('err', err)
    res.status(500).send({ 
			status: "error",
			message: "Unable to communicate with database" })
	}
}

/**
 * Get a single resource
 */
export const show = async (req: Request, res: Response) => {
}

/**
 * Create a resource
 */
export const store = async (req: Request, res: Response) => {
}

/**
 * Create a resource
 */
export const storeMany = async (req: Request, res: Response) => {
}

/**
 * Update a resource
 */
export const update = async (req: Request, res: Response) => {
}

/**
 * Delete a resource
 */
export const destroy = async (req: Request, res: Response) => {
}
