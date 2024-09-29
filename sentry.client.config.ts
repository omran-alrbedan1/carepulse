import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://1c7d9eafe7be14ce47ff6fae64449956@o4507910878003200.ingest.us.sentry.io/4507910882525184",
  integrations: [
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "dark",
      
    }),
  ],
});
