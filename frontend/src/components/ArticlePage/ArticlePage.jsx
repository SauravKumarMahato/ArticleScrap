import { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Spinner
} from "@material-tailwind/react";
import axios from "axios";
import PropTypes from "prop-types";

import image from "../../assets/article_image.jpg";

export default function ArticlePage() {
  const [inputValue, setInputValue] = useState("");
  const [doodles, setDoodles] = useState([]);
  const [loading, setLoading] = useState(false);

  // Load doodles from localStorage on component mount
  useEffect(() => {
    const savedDoodles = JSON.parse(localStorage.getItem("savedDoodles"));
    if (savedDoodles) {
      setDoodles(savedDoodles);
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await axios.get("http://127.0.0.1:8000/articles", {
        params: {
          input: inputValue,
        },
      });
      setLoading(false);  
      setDoodles(response.data);

      // Save doodles to localStorage
      localStorage.setItem("savedDoodles", JSON.stringify(response.data));
    } catch (error) {
      console.log("error occurred", error);
    }
  };

  return (
    <div className="my-16">
      <div
        style={{ width: "50%", textAlign: "center" }}
        className="flex items-center gap-4 mb-14"
      >
        <input
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type something here..."
        />
        <Button
          onClick={handleSubmit}
          size="sm"
          className="rounded-md mt-2 p-3"
        >
          Search Articles
        </Button>
      </div>

      {/* Rendering doodles */}
      {loading ? (<div className="grid justify-center mt-40"><Spinner className="h-16 w-16 text-gray-900/50 " /></div>) : ( <div className="mt-6 space-y-4 grid grid-cols-3 gap-10">
        {doodles.map((doodle, index) => (
          <CardDefault key={index} title={doodle.title} link={doodle.link} webLink={doodle.webLink} />
        ))}
      </div>)}
     
    </div>
  );
}

// CardDefault component
function CardDefault({ title, link, webLink }) {
  const handleButtonClick = () => {
    window.open(link, "_blank");
  };


  const handleWebView = () => {
    window.open(webLink, "_blank");
  };

  return (
    <Card className="w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <img src={image} alt="card-image" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        {/* <Typography>{link}</Typography> */}
      </CardBody>
      <CardFooter className="pt-0 grid gap-4">
        <Button onClick={handleWebView}>Web Page</Button>
        <Button onClick={handleButtonClick}>View Pdf</Button>
      </CardFooter>
    </Card>
  );
}

CardDefault.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  webLink: PropTypes.string.isRequired,

};
