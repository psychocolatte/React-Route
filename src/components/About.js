import Hero from "./Hero";

const About = ({ text }) => {
  return (
    <>
      <Hero text="This is About Page" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">lorem</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
