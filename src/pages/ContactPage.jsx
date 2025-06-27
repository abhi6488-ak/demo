import Header from "../components/Header/Header";
import "/src/styles/Pages.css";


const ContactPage = () =>{
    return(
        <div> 
            <Header/>
            
           <h1 align="center"> <font color="blue">Contact US</font></h1>
			<p>We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.</p>

	<h2>General Equiries</h2>
	<hr></hr>
	<b>Viviekanand College Main Campus</b><br></br>
	<p>[Your College Full Address Here, e.g., Mahatma Gandhi Road, Chembur, Mumbai, Maharastra 400071]<br></br>
	India</p>

	<p>Phone:<b>+91 1234567890</b><br></br>
	Email:<b>info@vivekanandcollege.edu</b><br></br>
	Office Hours: Monday - Friday, 9:00AM - 5:00PM IST</p>

	<h2>Admissions Office</h2>
	<hr></hr>
	<p> For all admission-related queries regarding undergraduate or postgraduate programs:<br></br>
	Phone:+91 9876543210<br></br>
	Email: admissions@vivekanandcollege.edu
	</p>

	<h2>Student Support Services</h2>
	<hr></hr>
	<p>For current student support, academic advising, or general assistance:<br></br>
	Phone:+91 8765432109<br></br>
	Email:studentsupport@vivekanandcollge.edu
	</p>

	<h2>Find Us on the Map</h2>
	<hr></hr>
	<p>[You can embed a Google Map here later using an iframe or a React map library.]</p>
	<a href="view on Google maps"> View on Google Maps</a>

	<h2>Send Us a Message</h2>
	<hr></hr>
	<p>[A contact form wiht fields for Name, Emaiil, Subject, Message can be added here.]</p>
	
	

        </div>
    )
}
export default ContactPage;