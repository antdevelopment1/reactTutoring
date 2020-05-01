// function CatNav(props){
//     // get data from props and use map to build an array of <li>
//     // ... code goes here
//     return(
//         <div>
//             {props}
//         </div>
//     )
// }


class CatNav extends React.Component {
    render() {
        const navLinks = this.props.data.map( (link, i) => {
            return (
                <li key={i} className="cat-link left valign-wrapper">
                    <i className="material-icons">{link.icon}</i>{link.title}
                </li>
                )
        })
           
        console.log(navLinks)
    
        return(
            <div className="row">
                <ul className="cat-nav center-align">
                    {navLinks}
                </ul>
            </div>
        )
    }
    // constructor() {
    //     super();
    // }

    // render() {
    //     return (
    //         <div>{this.props}</div>
    //     )
    // }
}
