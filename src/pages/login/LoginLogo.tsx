const Logo: React.FC = () => (
    <div
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}
    >
        <img style={{ width: 48 }} src={`/src/assets/images/react.svg`} />
        <h1 className="logo_text">adms</h1>
    </div>
);

export default Logo;
