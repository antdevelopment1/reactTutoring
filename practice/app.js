// This code has beeen translated to another to card js to be used as a staeful component
// let cards =  data.map( (course, i) => {
//     return (
//         <Card key={i} data={course}></Card>
//     )
// })

// // ReactDOM.render here
// ReactDOM.render(
//     <div className="row">
//         {cards}
//     </div>,
//     document.getElementById('root')
// );


const data = [
    {
        icon: "code",
        title: "Development"
    },
    {
        icon: "business",
        title: "Business"
    },
    {
        icon: "computer",
        title: "IT & Software"
    },
    {
        icon: "library_books",
        title: "Office Productivity"
    },
    {
        icon: "person",
        title: "Personal Development"
    },
    {
        icon: "mode_edit",
        title: "Personal Development"
    },    
    {
        icon: "track_changes",
        title: "Marketing"
    },    {
        icon: "directions_bike",
        title: "Health & Fitness"
    },    
    {
        icon: "music_note",
        title: "Music"
    },
]

ReactDOM.render(
    <CatNav data={data}/>,
    document.getElementById("root")
);
