import { Link } from "react-router-dom";

function About() {

    return (
        <>
            <h1>About</h1>
            <Link to={`/`}>ホームに戻る</Link>
        </>
    );
}

export default About;