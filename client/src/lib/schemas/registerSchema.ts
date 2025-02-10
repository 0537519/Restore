import { z } from "zod";

const passwordValidation=new RegExp(
    /(?=^.{6,10}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/
)

export const registerSchema=z.object({
    email:z.string().email(),
    password:z.string().regex(passwordValidation,{
        message:'It expects atleast 1 small-case letter, 1 Capital letter, 1 digit, 1 special character and the length should be between 6-10 characters. '

    })
});

export type RegisterSchema=z.infer<typeof registerSchema>;