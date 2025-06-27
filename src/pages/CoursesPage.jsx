import Header from "../components/Header/Header";
import "/src/styles/pages.css";


const CoursesPage = () =>{
    return(
        <div>
            <Header/>
        
        <h1 align="center"><font color="Blue">Our Academic Programs</font></h1>
		<p>Vivekanand College offers a coprehensive range of undergraduate and postgraduate proggrams designed to equip students with the knowledge and skills demanded by today's dynamic global landscape. Our curriculum is regularly updated to reflect industry trends and academic advancements.</p>

		<center><h2>Discover Campus Life</h2></center>
		<hr></hr>
		<center> <video controls ><source src="/videos/vckcampus.mp4"  width={200} height={1200}></source></video></center>
		<center> <p>Get a glimpse of the vibrant academic and social life at Vivekanand College.</p></center> 


	<h2>Undergraduate Programs(UG)</h2>
	<hr></hr>
		<ul type="disc">
			<li><b>Bachelor of Science(B.Sc.)</b></li>
				<ul type="disc">
					<li>computer Science(3 years)</li>
					<li>information Technology(3 years)</li>
					<li>Biotechnology(3 years)</li>
				</ul>
			<li><b>Bachelor of Commerce(B.Com)</b></li>
			<li><b>Bachelor of Commerce(B.Com)</b></li>
				<ul type="disc">	
					<li>Accounting & Finance(3 years)</li>
					<li>Banking & Insurance(3 years)</li>
				</ul>
			<li><b>Bachelor of Arts(B.A.)</b></li>
				<ul type="disc">	
					<li>English Literature(3 years)</li>
					<li>Psychology(3 years)</li>
				</ul>
		</ul>
		
	<h2>Postgraduate Programs(PG)</h2>
	<hr></hr>
		<ul type="disc">
			<li><b>Masters of Science(M.Sc.)</b></li>
				<ul type="disc">
					<li>computer Science(2 years)</li>
					<li>information Technology(2 years)</li>
				</ul>
			<li><b>Masters of Commerce(M.Com)</b>(2 years)</li>
			<li><b>Masters of Arts(B.A.)</b>(2 years)</li>
		</ul>

		<h2> Program Details & Fee Structure (Annual) </h2>
		<table border="2">
			<tr>
				<th>Program Type</th>
				<th>Course Name</th>
				<th>Duration</th>
				<th>Annual Fee(INR)</th>
				<th>Eligibility</th>
			</tr>
			<tr>
				<td>UG</td>
				<td>B.Sc. Computer Science</td>
				<td>3 Years</td>
				<td>85,000</td>
				<td>10+2 with PCM(50%)</td>
			</tr>
			<tr>
				<td>UG</td>
				<td>B.Com. Accounting & Finance</td>
				<td>3 Years</td>
				<td>70,000</td>
				<td>10+2 Commerce(45%)</td>
			</tr>
			<tr>
				<td>PG</td>
				<td>M.Sc. Information Technology</td>
				<td>2 Years</td>
				<td>95,000</td>
				<td>B.Sc.IT/CS(50%)</td>
			</tr>
		</table>
	
	<h2>Specialized & Vocational Coursed</h2>
	<hr></hr>
		<p>In addition to traditional degree programs, we offer various certificate and diploma courses in areas like Digital Marketing, Web Development, Data Analyticals, and Soft Skills Development, providing specialized training for career enhancement.</p>
	
	<center><p> Have questions about a specific courses? </p></center>
	<center><a href="/contact"><button classname="buttons">Inquire About Courses</button></a></center>

        
        </div>
    )
}
export default CoursesPage;