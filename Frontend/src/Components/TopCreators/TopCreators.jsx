import './TopCreators.css'
export default function TopCreators({ src, FirstCount = 0, Rating }) {
    return (
        <div className='TopCreators'>
            <img src={src} alt="" />
            <span>{FirstCount}</span>
            <progress value={Rating}></progress>
        </div>
    )
}
