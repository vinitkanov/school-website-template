import { NotebookPen } from 'lucide-react';

export default function Hero() {
    return (
        <div className="h-[890px] flex items-center justify-center gap-40">
            <div>
                <div>
                    <h1 className="font-extrabold text-6xl max-w-2xl">
                        Sekolah Modern Terbaik di Indonesia
                    </h1>
                    <h2 className="font-light text-[#3B3B3B] text-lg max-w-2xl">
                        Mewujudkan masa depan yang cerah melalui inovasi berkelanjutan dan budaya saling menghargai.
                    </h2>
                </div>
                <div className="flex gap-2">
                    <button className="bg-[#E70CFF] shadow-lg rounded-xl px-8 py-2 text-white mt-6 text-lg font-semibold">
                        <span>DAFTAR</span>
                        <NotebookPen className="inline h-6 w-6 ml-2" />
                    </button>
                    <button className="shadow-lg rounded-xl px-8 py-2 text-black border-[#C5C5C5] border-2 mt-6 text-lg font-semibold">
                        Tentang
                    </button>
                </div>
            </div>
            <img
                src="/hero-img.png"
                alt="Hero Image"
                className="hero-image"
                draggable="false"
            />
        </div>
    );
}