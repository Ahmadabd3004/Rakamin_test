import HelloWorld from "../Components/HelloWorld";

function About(){
    return(
        <>
            <h1 className="font-bold text-5xl">This is About Page</h1>
            <HelloWorld name="Ahmad"/>
        </>
    )
}

export default About;