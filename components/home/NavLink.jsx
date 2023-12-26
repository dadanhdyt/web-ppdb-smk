export default function NavLink({ children,className }) {
    return (
        <li className="w-full sm:w-auto">
            <a className={`block px-2 sm:hover:bg-blue-500 sm:hover:ring-blue-400 py-2 text-base transition-all rounded-sm font-semibol hover:ring-1 hover:ring-blue-500 text-slate-200 ${className}`} href="">
                {children}
            </a>
        </li>
    )
}