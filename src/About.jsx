import {FiDownload} from 'react-icons/fi'
function About() {
  return (
    <div className="container py-5">
      <div className="row align-items-center justify-content-center">
        <div data-aos="fade-right" className="col-md-6 col-12">
          <img src="./image/aboutme.svg" className="img-fluid vert-move"></img>

        </div>
        <div data-aos="fade-left" className="col-md-6 col-12 py-md-0 pt-lg-0 pt-3">
          <div className="title d-flex flex-column  gap-0">
            <h3>ABOUT ME</h3>
            <p className="abouttxt">Passionate ReactJS Developer with a solid foundation in HTML, CSS, JavaScript, Bootstrap, and Git. Eager to apply my skills and contribute to building innovative web applications.
            </p>
            <p className='abouttxt'> I enjoy creating engaging user interfaces and delivering seamless experiences. Open to collaborative opportunities that allow me to learn and grow in the field. Lets connect and explore how I can leverage my frontend knowledge to create impactful solutions using ReactJS.</p>

            <div className="itscv"><a href="https://flowcv.com/resume/jedrmjpmds" download="Asif-Ali-Resume.pdf" target="_blank" rel="noopener noreferrer"><button className="download-cv" >Download Cv <FiDownload/></button></a></div>

          </div>

        </div>


      </div>
    </div>
  )
}

export default About
