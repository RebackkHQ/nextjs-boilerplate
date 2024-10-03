import { z } from "zod";

// Define the environment variable schema
const envSchema = z.object({
  NEXTAUTH_URL: z.string().url(),
  NEXTAUTH_SECRET: z.string().min(1, "NEXTAUTH_SECRET is required"),
  DATABASE_URL: z.string().url(), // Adjust validation as needed
  GITHUB_ID: z.string().min(1, "GITHUB_ID is required"),
  GITHUB_SECRET: z.string().min(1, "GITHUB_SECRET is required"),
  GOOGLE_ID: z.string().min(1, "GOOGLE_ID is required"),
  GOOGLE_SECRET: z.string().min(1, "GOOGLE_SECRET is required"),
  GITLAB_ID: z.string().min(1, "GITLAB_ID is required"),
  GITLAB_SECRET: z.string().min(1, "GITLAB_SECRET is required"),
  EMAIL_SERVER_HOST: z.string().min(1, "EMAIL_SERVER_HOST is required"),
  EMAIL_SERVER_PORT: z.string().min(1, "EMAIL_SERVER_PORT is required"),
  EMAIL_SERVER_USER: z.string().min(1, "EMAIL_SERVER_USER is required"),
  EMAIL_SERVER_PASS: z.string().min(1, "EMAIL_SERVER_PASS is required"),
  EMAIL_FROM: z.string().email("EMAIL_FROM must be a valid email"),
});

// Validate environment variables
const parseEnv = () => {
  const parsed = envSchema.safeParse(process.env);

  if (!parsed.success) {
    console.error(
      "Environment variable validation errors:",
      parsed.error.errors
    );
    throw new Error("Invalid environment variables");
  }

  return parsed.data;
};

// Export the validated environment variables
export const env = parseEnv();
