import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../errors/ApiError.ts';
import { errorResponse } from '../responses/ApiResponse.ts'
import { ZodError } from 'zod';

/*
Here req and next not used, that's why put _ to remove warning
*/

export const erroHandler = (
   err: unknown,
   _req: Request,
   res: Response,
   _next: NextFunction
) => {
    // Expected Error is API Error -> import 
    if(err instanceof ApiError) {
        return res.status(err.statusCode).json(
            errorResponse(err.message, err.data),
        )
    }


    // Expected Error is zod error
    if(err instanceof ZodError) {
        return res.status(400).json(
            errorResponse("Validation Failed", err.issues),
        )
    }

    // ------Unexpected  error--------------
    // print at console
    console.log("Unexpected error occured : ", err);

    return res.status(500).json(
        errorResponse("Internal Server Error"),
    );
}