import Header from "../components/Header"

const MainLayout = (props) => {
    const {children} = props

    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    )
}

export default MainLayout