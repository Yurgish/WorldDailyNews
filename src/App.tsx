import FilterSection from "./components/FilterSection";
import Header from "./components/Header/Header";
import MessagePopup from "./components/MessagePopup";
import NewsGrid from "./components/NewsGrid";
import Wrapper from "./components/Wrapper";
import useNewsHandler from "./hooks/useNewsHandler";
import { ENewsGridTypes } from "./models/IGrid";

function App() {
    const { news, page, isFetching } = useNewsHandler();

    return (
        <>
            <Wrapper>
                <Header />
                <FilterSection />
                {Array.from({ length: page }).map((_, i) => (
                    <NewsGrid
                        key={i}
                        newsItemsArray={news?.slice(i * 10, i * 10 + 10)}
                        gridType={ENewsGridTypes.Grid10}
                    />
                ))}
                {isFetching ? (
                    <NewsGrid
                        newsItemsArray={Array.from({ length: 10 })}
                        gridType={ENewsGridTypes.Grid10}
                        isLoading={isFetching}
                    />
                ) : null}
            </Wrapper>
            <MessagePopup />
        </>
    );
}

export default App;
