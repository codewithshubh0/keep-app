import React,{Component} from "react";


class Footer extends Component{
   
    render(){
        const year =new Date().getFullYear();
    return(
        <div className="footer">
        Copyright © {year} | Anjani Sharma
      </div>
    )
}
}
export default Footer;