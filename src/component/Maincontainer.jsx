import Title from "./Title";
import VideoBg from "./VideoBg";

const Maincontainer = (props)=>{
    const data = props.data[0]
    return(
        <div>
            <Title data={data}/>
            <VideoBg data={data}/>
        </div>
    )
}

export default Maincontainer;