import { useEffect } from "react";
import { useState } from "react";
import Banner from "./components/Banner";
import { fetchTitles, storeTitles } from "./assets/utils";
import TitlesRow from "./components/TitlesRow";
import { useSearchParams } from "react-router-dom";

function App() {
  const [titles, setTitles] = useState([]);
  const [currentTitle, setCurrentTitle] = useState(null);
  const [searchParams] = useSearchParams();
  useEffect(() => {
    // storeTitles();
    fetchTitles().then((tls) => {
      if (searchParams.size > 0) {
        setCurrentTitle(
          tls[tls.findIndex((title) => title.id === searchParams.get("id"))]
        );
      }
      setTitles(tls);
    });
  }, []);
  return (
    <>
      <div className={`overflow-x-hidden ${!currentTitle && "py-[20px]"}`}>
        <div>{currentTitle && <Banner title={currentTitle} />}</div>
        <div
          className={`relative z-20 ${
            currentTitle && "sm:top-[-110px] top-[-50px]"
          }`}
        >
          {titles.length > 0 && (
            <div className="flex flex-col gap-5">
              <TitlesRow header={"My List"} titles={titles.slice(0, 10)} />
              <TitlesRow
                header={"Recently Viewed"}
                titles={titles.slice(10, 20)}
              />
              <TitlesRow
                header={"English Movies"}
                titles={titles.filter((tl) => tl.language === "english")}
              />
              <TitlesRow
                header={"Hindi Movies"}
                titles={titles.filter((tl) => tl.language === "hindi")}
              />
              <TitlesRow
                header={"Drama Movies"}
                titles={titles.filter((tl) => tl.genre === "Drama")}
              />
              <TitlesRow
                header={"Action Movies"}
                titles={titles.filter((tl) => tl.genre === "Action")}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
