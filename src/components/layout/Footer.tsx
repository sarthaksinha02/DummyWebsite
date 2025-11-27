export default function Footer() {
  return (
    <footer className="bg-[#0f1826] text-white py-30 pb-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP ROW */}
        <div className="flex flex-col md:flex-row md:items-start gap-12">

          {/* LOGO */}
          <div className="bg-gray-200 text-black font-bold px-6 py-3 text-xl w-max">
            LOGO
          </div>

          {/* FOOTER COLUMNS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 w-full">

            {/* Column 1 */}
            <div>
              <h4 className="font-semibold mb-4">Lorem Ipsum</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="font-semibold mb-4">Lorem Ipsum</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="font-semibold mb-4">Lorem Ipsum</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h4 className="font-semibold mb-4">Lorem Ipsum</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
