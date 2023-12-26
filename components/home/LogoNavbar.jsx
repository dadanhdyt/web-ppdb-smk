import Image from "next/image";
export default function LogoNavbar() {
    return (
        <div className="relative flex items-center gap-1 py-2">
            <Image width={70} height={70} src={'/static/logo.png'} className="relative" alt="logo ifsu" />
            <div className="flex-col hidden font-semibold sm:flex">
                <span>PPDB SMK INFORMTIKA</span>
                <span className="text-blue-500">SUMEDANG</span>
            </div>
        </div>
    );
}