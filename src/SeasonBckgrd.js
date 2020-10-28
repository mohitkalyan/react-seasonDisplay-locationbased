import React from "react";

const getSeason = (lat, month) => {
    if(month > 3 && month <9){
        return lat > 0 ? "Summer" : "Winter"
    } else {return lat > 0 ? "Winter" : "Summer"}
}

const seasonConfig = {
    Summer : {
        iconName : "sun",
        text : "lets hit the beach"
    },
    Winter : {
        iconName : "snowflake",
        text : "its cold out there"
    }
}


const SeasonBckgrd = (props) => {    

    const season = getSeason(props.lattitude, new Date().getMonth())
     const{iconName, text} = seasonConfig[season];
    return (
        <div>
            <i className={`massive icon ${iconName}`}/>
                <h1>{text}</h1>
            <i className={`massive icon ${iconName}`}/>
            
        </div>
    )
}

export default SeasonBckgrd;