import { format as formatCurrency } from "../utils/currency";

export default function Footer({ price }) {
  return (
    <footer className="px-4 py-6 border-t border-gray-200 bg-gray-50 sm:px-12">
      <div className="flex items-center">
        <div className="hidden w-1/3 gap-5 sm:grid lg:grid-cols-2 lg:w-2/3 xl:w-1/2">
          <div className="flex space-x-2 text-sm">
            <div>
              <svg
                className="h-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                  clipRule="evenodd"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            <div className="space-y-1">
              <div className="font-medium text-gray-900">Free Shipping</div>
              <div className="hidden text-gray-500 lg:block">
                Get 2-day free shipping anywhere in North America.
              </div>
            </div>
          </div>
          <div className="flex space-x-2 text-sm">
            <div>
              <svg
                className="h-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            <div className="space-y-1">
              <div className="font-medium text-gray-900">2 Year Warranty</div>
              <div className="hidden text-gray-500 lg:block">
                If anything goes wrong in the first two years, we'll replace it
                for free.
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end w-full space-x-6 sm:w-2/3 lg:w-1/3 xl:w-1/2">
          <div className="text-right">
            <div className="text-3xl font-bold leading-tight text-gray-900">
              {formatCurrency(price)}
            </div>
            <div className="hidden text-sm text-gray-500 sm:block">
              <span>Need financing? </span>
              <a
                href="#"
                className="underline hover:text-gray-900 focus:text-gray-900 focus:shadow-focus focus:outline-none"
              >
                Learn more
              </a>
            </div>
          </div>
          <div>
            <button className="px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-md hover:bg-gray-700 focus:shadow-focus focus:outline-none">
              Buy now
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
