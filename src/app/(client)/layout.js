import Header from "@/component/client/Header";

const ClientLayout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default ClientLayout;