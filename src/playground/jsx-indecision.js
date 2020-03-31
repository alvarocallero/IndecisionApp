
const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['A','B','C']
}

const onFormSubmit = (e) =>{
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option){
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
}

function getOptions(options){
    if (options.length > 0){
        return <div>Here are your options:</div>;
    }else
        return 'No options'
};

const resetAll = () => {
    app.options = [];
    renderApp();
}

const onMakeDecision = () => {
    const rand = Math.floor(Math.random() * app.options.length);
    const option = app.options[rand];
    alert(option);
}

const appRoot = document.getElementById("root");
const renderApp = () => {
    console.log('renderApp');
    const template = 
    <div>
        <h1>Title: {app.title}</h1>
        {app.subtitle && <p>Subtitle: {app.subtitle}</p>}
        {getOptions(app.options)} 
        <p>{app.options.length}</p>
        <ol>{
            app.options.map((x) => {
                return <li key={x}>{x}</li>;
            })

            }
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add Option</button>
        </form>
        <br/>
        <button onClick={resetAll}>Reset all</button>
        <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
    </div>;

    ReactDOM.render(template,appRoot);
}


renderApp();