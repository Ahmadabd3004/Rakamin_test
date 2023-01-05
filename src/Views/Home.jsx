import HelloWorld from "../Components/HelloWorld";

function Home(){
    return(
        <>
            <h1 className="font-bold text-5xl">This is Home Page</h1>
            <HelloWorld name="Ahmad"/>
        </>
    )
}

export default Home;