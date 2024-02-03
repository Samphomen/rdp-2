import React from 'react'
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
      <div className="top">
        <div className="top-text">
          <h1>
            Empowering <br /> Independence : City Care <br /> and Support Ltd.
          </h1>
          <p>Discover our tailored care and support services in Essex.</p>
          <button>Contact</button>
        </div>
      </div>
      <div className="body">
        <section className="top-btm-text">
          <p>
            Introducing City Care and Support Limited, a leading provider of
            supported living services in Essex, Uk. With a strong commitment to
            enhancing the quality of life for individuals in need. We offer a
            comprehensive range of personalized support solutions. At City Care
            and Support Limited, we understand the unique challenges faced by
            those requiring assistance and our dedicated team of professionals
            is here to provide compassionate care and guidance. Whether it's
            helping individuals with dauly tasks, promoting independent living,
            or fostering a supportive community, our tailored services ensure
            that each person receives the care they deserve. Trust us to be your
            trusted partner in suported living as we strive to make a positive
            difference in the lives of those we serve.
          </p>
        </section>
        <section className="reviews"></section>
      </div>
      <Footer />
    </div>
  );
}

export default Home