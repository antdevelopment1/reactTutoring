let cards =  data.map( (course) => {
    return (
        <Card data={course}></Card>
    )
})

// ReactDOM.render here
ReactDOM.render(
    <div className="row">
        {cards}
    </div>,
    document.getElementById('root')
);

