export default function Loading() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        {/* Simple CSS Spinner */}
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-700 border-t-transparent"></div>
        <p className="text-blue-700 font-medium">Loading...</p>
      </div>
    </div>
  );
}