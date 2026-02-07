// backend/src/middleware/validator.ts
import { Request, Response, NextFunction } from 'express'
import { z, ZodSchema } from 'zod'

export function validateRequest(schema: ZodSchema) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body)
      next()
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors = error.issues.map((err) => ({
          field: err.path.join('.'),
          message: err.message,
        }))

        return res.status(400).json({
          success: false,
          error: 'Validation failed',
          details: errors,
        })
      }
      next(error)
    }
  }
}