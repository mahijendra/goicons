/* eslint-disable react/prop-types */
import Icons from "./Icons";
import myPropTypes from 'prop-types';

function Svg({ searchResults, handleMouse, showSvgTitle }) {
  return (
    <div
      className="px-40 py-24 "
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
        gridGap: "10px",
        gridAutoRows: "80px",
        placeItems: "center",
      }}
    >
      {searchResults.map((svgItem, index) => (
        <Icons
          handleMouse={handleMouse}
          svgItem={svgItem}
          showSvgTitle={showSvgTitle}
          key={index}
          index={index}
        />
      ))}
    </div>
  );
}
export default Svg;