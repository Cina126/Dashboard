import './Stocks.css';
import Icons from './../Icons/Icons'

export default function Stocks({ id, text, value, discribtion, icon, img }) {
    return (
        <div className='Stocks' id={id}>

            {img ? <img src={img} alt={img} /> : icon ? <Icons iconName={icon}></Icons> : ""}

            <div className='Stocks__Inner'>
                <span className='Stocks__Inner__Text'>{text}</span>
                <span className='Stocks__Inner__Value'>{value}</span>
                {discribtion ? <span className='Stocks__Inner__discribtion'>{discribtion}</span> : ""}
            </div>
        </div>
    )
}
