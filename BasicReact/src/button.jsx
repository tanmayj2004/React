function printHello(){
    console.log("Hello World!");
};
export default function Button(){
    return(
        <div>
            <button onClick={printHello}>Click Me!</button>
        </div>
    );
}