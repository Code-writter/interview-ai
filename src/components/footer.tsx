import LogoContainer from "./logo-container";

export default function Footer() {
    return (
        <footer className="border-t bg-accent shadow-2xl text-gray-900 py-4">
            <div className="flex" >
                <div className="pl-20" >
                    <LogoContainer />
                </div>
                <div className="container mx-auto text-center">
                    <p className="mb-4">&copy; 2023 Your Company. All rights reserved.</p>
                    <ul className="flex justify-center space-x-4">
                        <li><a href="/about" className="hover:underline">About Us</a></li>
                        <li><a href="/contact" className="hover:underline">Contact</a></li>
                        <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
