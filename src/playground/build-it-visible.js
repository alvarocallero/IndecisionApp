class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleActionButton = this.handleActionButton.bind(this);
        this.state = {
            visible: false
        }
    }

    handleActionButton(){
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            };
        });
        console.log(this.state.visible);
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleActionButton}>{this.state.visible ? 'Hide details' : 'Show details'}</button>
                {this.state.visible ? <p>Hey</p> : ''}
            </div>
        )
    }
}
ReactDOM.render(<VisibilityToggle/>, document.getElementById("app"));

/* let visibility = false;

const onButtonClick = () => {
    visibility =! visibility;
    render();

};



const render = () => {
const template = 
<div>
    <h1>Visibility Toggle</h1>
    <button onClick={onButtonClick}>{visibility ? 'Hide details' : 'Show details'}</button>
    {visibility ? <p>Hey</p> : ''}
    <div>
    </div>
</div>;    

ReactDOM.render(template,document.getElementById("root"));
}

render();
 */