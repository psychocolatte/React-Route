import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <Hero text="This is Home Page" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">lorem ipsum</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
