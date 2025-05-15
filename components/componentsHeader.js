import Link from 'next/link';

export default function Header() {
    return (
        <header style={{ padding: '1rem', background: '#efefef', textAlign: 'center' }}>
            <h1>ManaTelugu</h1>
            <nav>
                <Link href="/">Home</Link> | <Link href="/movies">Movies</Link> | <Link href="/personalities">Personalities</Link>
            </nav>
        </header>
    );
}
