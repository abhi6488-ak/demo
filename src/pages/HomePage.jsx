import Header from "../components/Header/Header";
import "/src/styles/pages.css";


const HomePage = () =>{
    return(
        <div>
            <Header/>
            
            <h1 align="center"><font color = "blue"> Welcome to Vivekanand College! </font></h1>
			<center><img src="/images/board.jpg" height="200" width="1500"/><br></br></center>
			
	<p> <b> Vivekanand college</b> is a premier educational institution decided to fostering academic excellence,innovation, and holistic development. Established in [Year of Establishment, e.g., 1980],we have proudly served generations of students, empowering them to achieve their full potential.</p>
<p> At Vivekanand College,we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facillities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>

	<h2>Why Choose Vivekanand College? </h2>
	<hr></hr>
		<ul type="disc">
			<li><b>Legacy of Excellence:</b>Decades of commitment to quality education.</li>
			<li><b>Experienced Faculty:</b>Learn from renowned experts and passionate educators.</li>
			<li><b>Modern Facilities:</b>Well-equipped labs,expansive library, and comfortable campus.</li>
			<li><b>Holistic Development:</b>Focus on co-curricular activities, sports, and community service.</li>
			<li><b>Strong Placements:</b>Excellent careeer opportunities with leading companies.</li>
		</ul>
	
	
	<h2>Campus Life & Facilities</h2>
	<hr></hr>
	<center><img src="/images/pamplet.jpg" height="300" width="1500"/><br></br></center>
	<center><img src="/images/campus.jpg" height="300" width="1500"/><br></br></center>
	<p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth. </p>
	<center>	<p>Ready to explore our courses?</p></center>
	<center><a href="/courses"><button classname="buttons">Explore Courses</button></a></center>
           
        </div>
    )
}
export default HomePage;