// ReactDOM.render here
ReactDOM.render(
    <div className="row">
        <Card name={data[0].instructor} title={data[0].course} image={data[0].image}></Card>
        <Card name={data[1].instructor} title={data[1].course} image={data[1].image}></Card>
        <Card name={data[2].instructor} title={data[2].course} image={data[2].image}></Card>
        <Card name={data[3].instructor} title={data[3].course} image={data[3].image}></Card>
    </div>,
    document.getElementById('root')
);

