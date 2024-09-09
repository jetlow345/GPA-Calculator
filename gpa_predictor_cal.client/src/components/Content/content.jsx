import './content.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Content() {
    const handleClick = (cardNumber) => {
        alert(`Button ${cardNumber} clicked!`);
    };

    return (
        <div className="content">
            <div className="welcome-message">
                <h1>Welcome James!</h1>
                <p>Your gpa calculator that ace</p>
            </div>
            <div className="card-container">
                {Array.from({ length: 6 }).map((_, index) => (
                    <div className="card" key={index}>
                        <div className="card-body">
                            <h5 className="card-title">Card {index + 1}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button
                                className="btn btn-primary"
                                onClick={() => handleClick(index + 1)}
                            >
                                Click Me
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}