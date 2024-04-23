import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import PropTypes from "prop-types";

export function DoodleCard({ title, link }) {
  return (
    <Card className="mt-6 w-96">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography>
          {/* You can provide a brief description here if you want */}
          {/* For simplicity, I'll just display the link */}
          <a href={link} target="_blank" rel="noopener noreferrer">
            {link}
          </a>
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        {/* You can customize the button text and functionality */}
        <Button href={link} target="_blank" rel="noopener noreferrer">
          Read More
        </Button>
      </CardFooter>
    </Card>
  );
}

export function DoodleCardList({ doodles }) {
  return (
    <div>
        {doodles}
      {doodles.map((doodle, index) => (
        <DoodleCard key={index} title={doodle.title} link={doodle.link} />
      ))}
    </div>
  );
}


DoodleCardList.propTypes = {
    doodles: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
      })
    ).isRequired,
  };
  

  DoodleCard.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  };
  