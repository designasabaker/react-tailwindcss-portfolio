import {Outlet} from "react-router-dom";

export const AppSharedLayout = () => {
    return (
        <div style={{
            paddingTop: '120px',
            margin:0,
        }}>
            <Outlet />
        </div>
    );
}