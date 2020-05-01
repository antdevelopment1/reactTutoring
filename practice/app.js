// This code has beeen translated to another to card js to be used as a staeful component
let cards =  data.map( (course, i) => {
    return (
        <Card key={i} data={course}></Card>
    )
})

// ReactDOM.render here
ReactDOM.render(
    <div className="row">
        {cards}
    </div>,
    document.getElementById('root')
);

