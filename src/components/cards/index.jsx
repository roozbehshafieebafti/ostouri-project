import React from 'react';

function Card(props) {
    return (
        <div className="col-xl-4 col-md-6 col-12 pr-5 pl-5 mb-4">
            <div className="">
                <div className="border border-dark mr-4 ml-4 pt-3 pb-4">
                    <div className="col-12 mb-3">
                        <div style={styles.roban}>
                            sdfsdfdfsd
                        </div>
                    </div>
                    <div>
                        <img className="col-12" src={props.src} alt="picture"/>
                    </div>
                </div>
            </div>            
        </div>
    );
}

const styles={
    roban:{
        backgroundColor: "rgb(199,60,41)",
        color: "white",
        height: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 3,
    }
}

export default Card;