// loading url with prefix. if extra slash "/" in url, remove it from url
export default function url(path) {
  return `http://${
    process.env.REACT_APP_SERVER || "jsonplaceholder.typicode.com"
  }/${path[0] === "/" ? path.substr(1) : path}`;
}
