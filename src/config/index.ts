import { z } from "zod";

const envSchema = z.object({
  PORT: z.union([z.string(), z.number()]).default(7777),
  MONGO_URI: z.string(),
  FRONTEND_URI: z.string().url(),
});

const env = envSchema.safeParse(process.env);

if (!env.success) {
  console.error("❌ Missing or invalid environment variables:");
  env.error.errors.forEach((err) => {
    console.error(`  ${err.path.join(".")}: ${err.message}`);
  });
  process.exit(1);
}

export default Object.freeze(env.data);
