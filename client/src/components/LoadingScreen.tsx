export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4">
          <div className="w-full h-full border-4 border-gray-200 border-t-[hsl(24,100%,48%)] rounded-full animate-spin"></div>
        </div>
        <h2 className="text-2xl font-bold text-[hsl(0,0%,11.4%)]">Flagship</h2>
        <p className="text-[hsl(0,0%,52.5%)] mt-2">Loading...</p>
      </div>
    </div>
  );
}