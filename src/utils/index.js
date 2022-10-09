const Utils = {};

Utils.getLanguageIcon = function (language) {
  switch (language) {
    case "JavaScript":
      return <i className="fa-brands fa-square-js"></i>;
    case "CSS":
      return <i className="fa-brands fa-css3-alt"></i>;
    case "Go":
      return <i className="fa-brands fa-golang"></i>;
    case "HTML":
      return <i className="fa-brands fa-html5"></i>;
    case "Python":
      return <i className="fa-brands fa-python"></i>;
    case "SCSS":
      return <i className="fa-brands fa-sass"></i>;
    case "C":
      return <i className="fa-sharp fa-solid fa-c"></i>;

    default:
      return <span>{language}</span>;
  }
};

export default Utils;
