export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-6 mt-12">
            <div className="container mx-auto px-4 text-center text-sm">
                &copy; {new Date().getFullYear()} Purvam Overseas. All rights reserved.
            </div>
        </footer>
    )
}

