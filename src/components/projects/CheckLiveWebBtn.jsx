import style from "../../data/WeLightProjectStyle.module.scss";

export const CheckLiveWebBtn = (props) => {
    const {LIVE_URL} = props;
    const value = props.value || "Check the live website here";
    return(
        <div style={{
            paddingTop:'30px',
            display: 'block',
            //overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
        }}>
            <a
                href={LIVE_URL || "#"}
                target={"_blank"}
                // style={{
                // 	color: "#fff",
                // 	fontSize: "1.2rem",
                // 	border: "1px solid #fff",
                // 	padding: "0.5rem 1rem",
                // 	borderRadius: "0.5rem",
                // 	width: "100%",
                // 	backgroundColor: "transparent",
                // }}
                className={style.liveUrlBtn}
            >
                {value}
            </a>
        </div>
    )
}

export default CheckLiveWebBtn;