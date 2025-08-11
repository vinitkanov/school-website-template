import { NotebookPen } from 'lucide-react';

export default function Hero() {
    return (
        <div className="h-[890px] p-4 md:p-0 md:flex items-center justify-center gap-40">
            <div>
                <div className="flex flex-col items-center md:items-start gap-4 mt-20 md:mt-0">
                    <h1 className="text-2xl font-extrabold text-center md:text-left md:text-6xl md:max-w-2xl sm:text-4xl">
                        Sekolah Modern Terbaik di Indonesia
                    </h1>
                    <h2 className="text-sm text-center md:text-left font-light text-[#3B3B3B] md:text-lg md:max-w-2xl">
                        Mewujudkan masa depan yang cerah melalui inovasi berkelanjutan dan budaya saling menghargai.
                    </h2>
                </div>
                <div className="flex flex-row justify-center md:justify-start gap-4 mt-6">
                    <button className="bg-[#E70CFF] shadow-lg rounded-xl px-8 py-2 text-white mt-6 md:text-lg text-sm font-semibold">
                        <span>DAFTAR</span>
                        <NotebookPen className="inline h-4 w-4 md:h-6 md:w-6 ml-2" />
                    </button>
                    <button className="shadow-lg rounded-xl px-8 py-2 text-black border-[#C5C5C5] border-2 mt-6 text-lg font-semibold">
                        Tentang
                    </button>
                </div>
            </div>
            <div className="mt-20 md:mt-0 h-fit w-fit">
            <img
                src="/hero-img.png"
                alt="Hero Image"
                className="hero-image"
                draggable="false"
            /></div>
        </div>
    );
}