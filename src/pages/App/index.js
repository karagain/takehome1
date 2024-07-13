import index from "./index.marko";

export default (req, res) => {
  res.marko(index, {});
};
