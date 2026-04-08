export default function Error404() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-6 relative overflow-hidden">
      <div className="text-center max-w-xl">
        {/* 404 Text */}
        <h1 className="text-7xl md:text-8xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 animate-pulse">
          404
        </h1>

        {/* Message */}
        <h2 className="mt-4 text-2xl md:text-3xl font-semibold">
          Page Not Found
        </h2>

        <p className="mt-3 text-gray-400">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-purple-600 hover:bg-purple-700 transition"
            onClick={() => (window.location.href = "/")}
          >
            ⬅ Go Home
          </button>

          <button
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl border border-gray-600 hover:bg-gray-800 transition"
            onClick={() => window.location.reload()}
          >
            🔄 Refresh
          </button>
        </div>

        {/* Glow Effect */}
        <div className="absolute top-1/3 left-1/2 w-[400px] h-[400px] bg-purple-500/20 blur-3xl rounded-full -translate-x-1/2 -z-10"></div>
      </div>
    </div>
  );
}
