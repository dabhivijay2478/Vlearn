import ResourceNavbar from "../Components/Resource-Navbar";
import ResourcesSideBar from "../Components/Resource-SideBar";

export const metadata = {
    title: "Vlearn",
    description: "Generated by Vlearn",
};
export default function ListResourcesLayout({ children }) {
    return (
        <>
            <div className="grid grid-cols-1 gap-8 p-4 sm:p-8 md:grid-cols-[260px_1fr] md:p-8 lg:p-12">
                <ResourcesSideBar />
                <div>
                    <div className="grid grid-cols-1 gap-8 pt-6 sm:grid-cols-2">
                        <ResourceNavbar />  
                        {children}
                    </div>
                </div>
            </div>
        </>

    );
}
