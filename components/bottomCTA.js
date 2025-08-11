import { NotebookPen } from 'lucide-react';

export default function CTA() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[400px] px-6 py-12 text-center border-t-1 border-[#C8C8C8]">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Bergabung dengan kami
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend.
            </p>
            <button className="bg-[#E70CFF] hover:bg-[#D100E6] transition-all duration-300 shadow-lg hover:shadow-xl rounded-xl px-8 py-4 text-white font-semibold text-lg flex items-center gap-3 transform hover:scale-105">
                <span>DAFTAR</span>
                <NotebookPen className="h-5 w-5" />
            </button>
        </div>
    )
}