import { z } from 'zod';

export const registerSchema = z.object({
    name: z
        .string()
        .trim()
        .min(2, "Name must be at least 2 characters long")
        .max(69, "Name is too long"),
    
    email: z
        .string()
        .trim()
        .toLowerCase()
        .email("Invalid emaill Address"),
    
    password: z
            .string()
            .min(6, "Password must be at least 6 characters long")
            .max(69, "Password is too long")
}).strict();

export const loginSchema = z.object({
    email: z
        .string()
        .trim()
        .toLowerCase()
        .email("Invalid emaill Address"),
    
    password: z
            .string()
            .min(6, "Password must be at least 6 characters long")
            .max(69, "Password is too long")
}).strict();

export type AuthRegisterInput = z.infer<typeof registerSchema>;
export type AuthLoginInput = z.infer<typeof loginSchema>;


/*
.strict() -> Only the fields I define are allowed. else give error of Unrecognized key(s): 'field_name'

z.infer<> -> Read this schema and generate the corresponding TypeScript type

Zod validates the data at runtime and type script at compile time, infer connects both these validation.

*/

