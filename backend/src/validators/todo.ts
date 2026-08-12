import { z } from 'zod';

export const createTodo = z.object({
    title: z
        .string()
        .trim()
        .min(1, "Title cannot be empty")
        .max(69, "Title cannot be more than 69 letters"),
    
    description: z
        .string()
        .trim()
        .max(255, "Description is too long")
        .optional(),

    is_completed: z
        .boolean()
        .optional()
        .default(false)
});

export const updateTodo = z.object({
    title: z
        .string()
        .trim()
        .min(1, "Title cannot be Empty")
        .max(69, "Title cannot be more than 69 letters")
        .optional(),

    description: z
        .string()
        .trim()
        .max(255, "Description is too long")
        .optional(),

    is_completed: z
        .boolean()
        .optional()
});

export type CreateTodoInput = z.infer<typeof createTodo>;
export type UpdateTodoInput = z.infer<typeof updateTodo>;

