import { useState, useEffect } from "react";
import Home from "../components/Home";
import Icons from "../components/Icons";
import Search from "../components/Search";
import Svg from "../components/Svg";
import svgData from "../components/svgData";

const Index = () => {
  const [svgItems, setSvgItems] = useState(svgData);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSvgTitle, setShowSvgTitle] = useState(false);

  useEffect(() => {
    const results = svgItems.filter((svgIcon) =>
      svgIcon.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, Icons]);

  const handleMouse = (e, index) => {
    if (e.currentTarget.classList.contains(index)) {
      setShowSvgTitle(index);
    } else {
      setShowSvgTitle(false);
    }  
  };

  return (
    <div>
      <Home />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Svg
        handleMouse={handleMouse}
        searchResults={searchResults}
        svgItems={svgItems}
        showSvgTitle={showSvgTitle}
      />
    </div>
  );
};

export default Index;
