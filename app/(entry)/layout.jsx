import { NavbarMenu } from "@/components/Home"

export default function Layout({ children }) {
    return (
        <>
            <NavbarMenu />
            {children}
        </>
    )
}