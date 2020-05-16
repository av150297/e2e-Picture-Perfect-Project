const style = {
  root: {
    width: 290,
    marginBottom: 10,
    marginLeft: 9,
    outline: "none",
  },
  media: {
    height: 400,
    width: "100%",
    outline: "none",
    zIndex: -1,
    opacity: 0.6,
    backgroundColor: "black",
    "&:hover": {
      opacity: 1,
    },
  },
  description: {
    minHeight: 60,
    height: 100,
    maxHeight: 120,
    overflowX: "hidden",
    overflowY: "auto",
    textOverflow: "ellipsis",
    outline: "none",
  },
  button: {
    outline: "none",
  },
  image: {
    backgroundColor: "#000000",
  },
  link: {
    "&:hover": {
      textDecoration: "none",
    },
  },
};

export default style;
