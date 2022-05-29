import "./card.css";

function Card({ title, para, image }) {
    return (
        <div className={"card " + title.toLowerCase()}>
            <h3>{title}</h3>
            <p>{para}</p>
            <img src={image} alt={title} />
        </div>
    );
}

export default Card;