import { Link } from "react-router-dom";
import "./App.scss";
import NavBar from "./components/NavBar";
import { Box, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function App() {
  return (
    <>
      <NavBar />
      <div
        style={{
          width: 1500,
          flex: 1,
          justifyContent: "center",
          margin: "auto",
          alignItems: "center",
          textAlign: "center",
          marginTop: "5rem",
        }}
      >
        <div
          style={{
            height: 600,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(5px)",
            border: "1px solid",
            cursor: "pointer",
          }}
        >
          <span
            style={{
              color: "#fff",
              fontSize: "2rem",
              lineHeight: "2",
              letterSpacing: "0.05em",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 700,
              WebkitBackgroundClip: "text",
              textShadow: "0px 2px 2px rgba(0, 0, 0, 1)",
            }}
          >
            <h3>Hello and welcome to my portfolio site!</h3>
            Here you can see the various projects I have worked on recently,
            both individually and in a team. Through these projects, I gained
            experience building and programming in languages such as HTML, SCSS,
            TypeScript and REACT. Additionally, I learned how to use MongoDB, a
            popular NoSQL database. Thank you for visiting my site, and I hope
            you enjoy browsing my work. I have prepared for you a selection of
            projects that you can watch and, in addition, you can comment your
            personal opinion!
          </span>
        </div>
        <Box
          sx={{
            color: "black",
            marginTop: "1em",
          }}
        >
          <Button
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(5px)",
              border: "1px solid",
            }}
            variant="contained"
            endIcon={<SendIcon />}
          >
            <Link style={{ color: "black" }} to={"/projects"}>
              Let's get started:
              <h3>Projects</h3>
            </Link>
          </Button>
        </Box>
      </div>
    </>
  );
}

export default App;
