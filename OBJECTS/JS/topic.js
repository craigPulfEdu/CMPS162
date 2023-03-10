
function  College(name, location, yearFounded, numStudents, StickerPrice, AvgPrice, gradRate, acceptanceRate, address, phoneNumber) {
    this.CollegeName = name,
    this.CollegeLocation = location
    this.CollegeFounded = yearFounded,
    this.CollegeAttendance = numStudents,
    this.CollegeStickerPrice = StickerPrice,
    this.CollegeAvgPaid = AvgPrice,
    this.CollegeGraduationRate = gradRate,
    this.CollegeAcceptanceRate = acceptanceRate,
    this.Collegeaddress = address,
    this.CollegephoneNumber = phoneNumber
}
var pp = new College("Point Park University", "Pittsburgh, PA", 1960, 3500, 36240, 22000, "59%", "81%", "201 Wood St, Pittsburgh, PA 15222", 4123914100)

//image
document.write("<img src='images/pointparkimage1.jpg' align = 'right'>")

// College Name and Location
document.write("<b><h1><font color = 'purple'>");
document.write("The College name is " + pp.CollegeName + " Located in " + pp.CollegeLocation);
document.write("</b></h1></font color>");

// Year founded
document.write("<i><font color = 'blue'><font size = 5>");
document.write("The college was founded in " + pp.CollegeFounded);
document.write("<br>");

// College Attendance

document.write("There are roughly " + pp.CollegeAttendance + " students enrolled in part-time and full-time programs at the university");
document.write("</i></font color></font size>'");
document.write("<br>");
// Sticker Price and Average Price
document.write("<b><font color = 'green'><font size = 4>")
document.write(pp.CollegeName + " costs " + pp.CollegeStickerPrice  + " per year, but on average students pay " + pp.CollegeAvgPaid + " per year");
document.write("<br>");

// Acceptance Rate

document.write(pp.CollegeName + " has a acceptance rate of " + pp.CollegeAcceptanceRate);
document.write("</b></font color></font size>")
document.write("<br>");

// Graduation Rate
document.write("<em><font color = 'red'><font size = 6>")
document.write("At this university " + pp.CollegeGraduationRate + " graduate from this insitution");
document.write("</em></font color></font size>")
document.write("<br>");

// Contact University
document.write("<font color = 'orange'><font size = 4>")
document.write("If you need to contact " + pp.CollegeName + " Then you can call them at " + pp.CollegephoneNumber)
document.write("<br>")

// mail address

document.write("You find them in person or mail them at " + pp.Collegeaddress)
document.write("</font color></font size>")

