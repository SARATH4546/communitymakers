/**
 * Generic error reporting utility.
 * Logs errors to the console and can be extended to integrate
 * with any error-monitoring service (e.g. Sentry, Datadog).
 */
export function reportError(
  error: unknown,
  context: Record<string, unknown> = {},
) {
  if (typeof window === "undefined") return;
  console.error("[ErrorBoundary]", error, context);
}
