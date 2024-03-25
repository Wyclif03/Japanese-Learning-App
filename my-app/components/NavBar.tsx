import Link from 'next/link';

const NavBar = () => {
    return (
        <nav className="flex justify-between drop-shadow-xl text-2xl p-4 font-bold bg-white rounded-xl text-yellow-700 ">
            <div className="flex space-x-4">
                <Link href="/" className="hover:bg-yellow-100 p-2 rounded-xl">Home</Link>
                <Link href="/hiragana" className="hover:bg-yellow-100 p-2 rounded-xl">Hiragana</Link>
                <Link href="/katakana" className="hover:bg-yellow-100 p-2 rounded-xl">Katakana</Link>
                <Link href="/kanji" className="hover:bg-yellow-100 p-2 rounded-xl">Kanji</Link>
            </div>
            <div className="flex space-x-4 gap-8">
                <Link href="/login" className="hover:bg-yellow-100 p-2 rounded-xl">Login</Link>
                <Link href="/register" className="hover:bg-yellow-100 p-2 rounded-xl">Register</Link>
            </div>
        </nav>
    );
}

export default NavBar;