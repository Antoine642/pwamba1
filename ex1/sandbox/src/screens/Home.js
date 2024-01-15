import Button from "../components/Button";

import Footer from "../components/Footer";

function Home(props){
    const myButtonName = "Mon autre bouton";
    function onButtonPressed() {
        console.log("Button was pressed");
    }

    return (
        <div className="m-3">
            Hello World!

            <br />
            <Button
                name="Mon bouton trop cool"
                className="btn-primary"
                onClick={onButtonPressed}
            />


            <br />
            <Button
                name={myButtonName}
                className="btn-secondary"
                onClick={() => console.log("Button was pressed 2")}
            />

            <Footer />
        </div>
    )
}

export default Home;