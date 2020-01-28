let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
    console.log('Add One', count);
}

const minusOne = () => {
    if(count > 0){
        count--;
    }
    renderCounterApp();
    console.log('Remove One');
}

const reset = () => {
    count = 0;
    renderCounterApp();
    console.log('Reset');
}
const appRoot = document.getElementById("app");

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );

    // ReactDOM.render(template, appRoot);
    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();