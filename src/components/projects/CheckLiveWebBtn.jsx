import style from "../../data/WeLightProjectStyle.module.scss";
import {LANGUAGE, useApp} from "../../context/AppContext";

export const CheckLiveWebBtn = (props) => {
    const {lang} = useApp();
    const {LIVE_URL} = props;
    const value = props.value;

    const text = {
        [LANGUAGE.EN]: "Check the live website here",
        [LANGUAGE.CN]: "查看网站",
    }

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
                {!!value ? value : text[lang]}
            </a>
        </div>
    )
}

export default CheckLiveWebBtn;