export default function Footer() {
    
    const linkRef = "https://vistegra.by/"

    return (
        <footer>
            <p>© 2020-2026, made with </p>
            <img 
                className="footer-heart" 
                src="/Heart.svg"
                alt="<3"
                />
            <p> by </p>
            <a href={linkRef}>
                Vistegra
            </a>
        </footer>
    )
}