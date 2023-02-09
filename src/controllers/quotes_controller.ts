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
  const quoteId = Number(req.params.quoteId)
  try {
    const data = await prisma.quotes.findUniqueOrThrow({
      where: {
        id: quoteId
      }
    })
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
 * Create a resource
 */
export const store = async (req: Request, res: Response) => {
  try {
    const newQuote = await prisma.quotes.create({
      data: {
        content: req.body.content,
        name: req.body.name
      }
    })
    res.status(201).send({
      status: "success",
			data: newQuote
    })

  } catch (err) {
    console.log('err', err)
    res.status(500).send({ 
			status: "error",
			message: "Unable to communicate with database" })
	}
}

/**
 * Create a resource
 */
export const storeMany = async (req: Request, res: Response) => {
  const data = req.body
  try {
    const newQuotes = await prisma.quotes.createMany({
      data
    })
    res.status(201).send({
      status: "success",
			data: newQuotes
    })

  } catch (err) {
    console.log('err', err)
    res.status(500).send({ 
			status: "error",
			message: "Unable to communicate with database" })
	}
}

/**
 * Update a resource
 */
export const update = async (req: Request, res: Response) => {
  const quoteId = Number(req.params.quoteId)
  try {
    const quote = await prisma.quotes.update({
      where: {
        id: quoteId
      }, 
      data: req.body
    })
    res.status(204).send({
      status: "success",
      data: quote
    })
  } catch (err) {
    res.status(500).send({ 
      status: "error", 
      message: "Unable to communicate with database" })
  }
}

/**
 * Delete a resource
 */
export const destroy = async (req: Request, res: Response) => {
  const quoteId = Number(req.params.quoteId)
  try {
    const quote = await prisma.quotes.delete({
      where: {
        id: quoteId
      }
    })
    res.status(204).send({
      status: "success",
      data: quote
    })
  } catch (err) {
    res.status(500).send({ 
      status: "error", 
      message: "Unable to communicate with database" })
  }
}
