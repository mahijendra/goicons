import { useState, useEffect } from "react";
import Demo from "../components/Demo";
import Icons from "../components/Icons";
import Search from "../components/Search";
import Svg from "../components/svg";
import svgData from "../components/svgData";
import Share from "../components/Share";


const Index = () => {
  // eslint-disable-next-line no-unused-vars
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
      <Demo />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Svg
        handleMouse={handleMouse}
        searchResults={searchResults}
        svgItems={svgItems}
        showSvgTitle={showSvgTitle}
      />
        <hr className="max-w-7xl opacity-25 lg:mx-16"></hr>
      <Share />
    </div>
  );
};

export default Index;
