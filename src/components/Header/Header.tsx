import useMediaQuery from "@/hooks/useMediaQuery";
import CurrentTime from "./CurrentTime";

const Header = () => {
    const isMobile = useMediaQuery("(max-width:570px)");
    return (
        <div className="flex justify-between py-3">
            <div></div>
            <div className="flex items-center flex-col">
                <h1 className="text-4xl uppercase font-lato mb-2 md:text-2xl md:mb-0">World Daily news</h1>
                {!isMobile && <CurrentTime />}
            </div>
            <div></div>
        </div>
    );
};

export default Header;
