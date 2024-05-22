import headerIcon from '../assets/headerIcon.png';
export default function Navbar() {
    return (
        <div className="header">
            <img src={headerIcon} alt="Meme Generator" />
            <h2>Meme Generator</h2>
        </div>
    )
}