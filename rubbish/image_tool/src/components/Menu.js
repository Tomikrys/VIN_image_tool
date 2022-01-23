import Sidebar from "react-sidebar";

export default function Canvas(sidebarOpen, setSidebarOpen) {
    return (
        <Sidebar
            sidebar={<b>Sidebar content</b>}
            open={sidebarOpen}
            onSetOpen={setSidebarOpen}
            styles={{ sidebar: { background: "grey" } }}
        >
            <p>hello kitty</p>
        </Sidebar>
    );
}