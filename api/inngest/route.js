import { serve } from "inngest/next";
import {
import { Inngest } from 'inngest';
  inngest,
  syncUserCreation,
  syncUserDeletion,
  syncUserUpdation,
} from "@/config/Inngest";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [syncUserCreation, syncUserUpdation, syncUserDeletion],
});
