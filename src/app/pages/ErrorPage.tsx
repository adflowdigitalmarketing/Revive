import { useRouteError, Link } from "react-router";
import { AlertCircle, Home } from "lucide-react";

export function ErrorPage() {
  const error = useRouteError() as any;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8 flex justify-center">
          <AlertCircle className="text-white" size={80} />
        </div>

        <h1 className="text-white mb-6" style={{ fontSize: "48px", fontWeight: 600, letterSpacing: "-0.04em" }}>
          Oops! Something went wrong
        </h1>

        <p className="text-white/90 text-xl mb-8">
          {error?.statusText || error?.message || "The page you're looking for doesn't exist."}
        </p>

        <Link to="/">
          <button className="px-8 py-4 bg-[#009C43] text-white font-medium text-lg hover:bg-[#007A34] transition-colors inline-flex items-center gap-3" style={{ borderRadius: "16px" }}>
            <Home size={24} />
            Back to Home
          </button>
        </Link>

        {error?.status === 404 && (
          <p className="mt-8 text-white/60 text-sm">
            Error 404 - Page not found
          </p>
        )}
      </div>
    </div>
  );
}
