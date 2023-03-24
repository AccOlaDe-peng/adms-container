import useLayoutConfig from "@/store/useLayoutConfig";

const Logo = () => {
    const collapsed = useLayoutConfig(
        (state: any) => state.layoutConfig.collapsed
    );
    return (
        <div className="logo">
            <img style={{ width: 43 }} src="/src/assets/images/react.svg" />
            <div
                style={{
                    width: !collapsed ? 141 : 0,
                    transition: "width 0.3s",
                }}
            >
                <h1 className="logo_text">Adms</h1>
            </div>
        </div>
    );
};

export default Logo;
