import Link from 'next/link'

export default function StateNotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center max-w-lg px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">State Not Found</h1>
        <p className="text-gray-600 mb-8">
          We couldn&apos;t find that state page. Check our available service areas or use the availability checker.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/states"
            className="px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-500 transition-all"
          >
            View Service Areas
          </Link>
          <Link
            href="/"
            className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
