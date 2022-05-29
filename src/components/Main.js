import Card from './Card';
import contents from '../contents.json';
import "./main.css";

function Main() {
    return (
        <main>
            {contents.map(({ title, para, image }, index) => (
                <Card key={index + title} title={title} para={para} image={image} />
            ))}
        </main>
    );
}

export default Main;
