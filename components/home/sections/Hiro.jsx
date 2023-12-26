import Image from "next/image";

export default function Hiro() {
    return (
        <section className="h-full gap-10 pb-6 pt-28 sm:h-screen sm:grid sm:gap-4 sm:grid-cols-2 sm:py-28">
            <div className="flex flex-col justify-center h-full gap-6 text-gray-800 sm:gap-10 shrink-0 sm:text-left sm:items-start">
                <div className={"flex flex-col gap-2"}>
                    <h1>PPDB SMK IFSU</h1>
                    <p className="text-6xl font-bold leading-tight sm:text-7xl">
                        Be a Real
                        <span className="text-blue-400">Digital Talent</span></p>
                </div>
                <p>
                    Kini Mendaftar ke SMK INFORMATIKA SUMEDANG lebih Mudah Daftar dari rumah dan tes dari rumah.
                </p>
                <button className="p-3 text-white bg-blue-500 rounded-lg">Daftar Sekarnag</button>
            </div>
            <div className="mt-5 sm:mt-0">
                <Image src={'/static/hero-img.png'} className="block" alt='hero' width={500} height={500} />
            </div>
        </section>
    )
}