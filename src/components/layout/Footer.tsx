export default function Footer(){
  return (
    <footer className="mt-12 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white inline-block text-black px-3 py-1 font-bold mb-4">LOGO</div>
        <h3 className="text-2xl font-semibold">LOREM IPSUM DOLOR SIT AMET CONSECTETUR. DUI.</h3>
        <p className="text-slate-300 mt-3">Lorem ipsum dolor sit amet consectetur. Nisi faucibus vitae porttitor tempor.</p>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mt-8 text-sm">
          <div>Column</div>
          <div>Column</div>
          <div>Column</div>
          <div>Column</div>
          <div>Column</div>
          <div>Column</div>
        </div>
        <p className="text-slate-400 text-xs mt-8">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}
