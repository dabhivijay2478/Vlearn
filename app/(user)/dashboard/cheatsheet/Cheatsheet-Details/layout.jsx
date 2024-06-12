import Navbarcheatsheet from "./components/Navbar-cheatsheet";
import Sidebarcheatsheet from "./components/Sidebar-cheatsheet";

export const metadata = {
    title: "Vlearn",
    description: "Generated by Vlearn",
};
export default function CheatshhetDetailsLayout({ children }) {
    return (
        <div className="flex min-h-screen">
            <Sidebarcheatsheet />
            <div className="flex-1 overflow-y-auto p-6">
                <Navbarcheatsheet />
                {children}
            </div>
        </div>

    );
}