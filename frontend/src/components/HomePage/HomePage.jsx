import { Typography } from "@material-tailwind/react";

const HomePage = () => {
  // only causes re-render if specified flag values / traits change

  return (
    <>
      <div className="mx-auto max-w-screen-md py-12">
        <Typography variant="h2" color="blue-gray" className="mb-2">
          Article and Papers Scrapping
        </Typography>
        <Typography color="gray" className="font-normal">
          <p>
            The project integrates server-side operations with browser
            automation, providing a robust solution for a myriad of web-related
            tasks. Leveraging Puppeteer, a powerful Node.js library, the system
            orchestrates headless browser actions, enabling dynamic interactions
            with web interfaces. This amalgamation facilitates a wide range of
            functionalities, including web scraping, automated testing, and data
            extraction, all orchestrated through a user-friendly server
            interface.
          </p>
          <br />

          <p>
            At its core, the project empowers users to effortlessly navigate the
            complexities of web interactions. The server component acts as a
            central hub, facilitating communication and task execution, while
            the browser component autonomously executes predefined actions,
            mimicking user behavior with precision and efficiency. Whether it is
            retrieving data from external sources, validating the functionality
            of web applications, or monitoring website changes, the project
            offers a versatile toolkit for tackling diverse web-related
            challenges.
          </p>

          <br />
          <p>
            With its intuitive design and robust architecture, the project opens
            doors to a multitude of applications across various domains. From
            streamlining data collection processes to ensuring the reliability
            of web-based systems, its adaptability and versatility make it a
            valuable asset for developers, testers, and data analysts alike.
            Whether users are seasoned professionals or newcomers to the realm
            of web automation, the project provides a reliable and efficient
            solution for harnessing the power of the web.
          </p>
        </Typography>
      </div>
    </>
  );
};

export default HomePage;
