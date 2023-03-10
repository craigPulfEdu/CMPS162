var tvshow = {
    name : "You",
    genre : "Psychological thriller",
    seasons: 4,
    yearsAired: "2018 - 2023",
    Setting: "New York",
    Network: ["Lifetime ", "Netflix"],
    Description: "dude stalks woman and people she associates with for her",
    Actor: "Penn Badgely",
    mainCharacter: "Joe Goldberg",
    sideActors: ["Victoria Pedretti","Elizabeth Lail", "Zach Cherry"],
    sideCharacters: ["Love Quinn", "Beck", "Ethan"]
};

//write code to document

// image

document.write("<img src='images/joe.webp' align = 'right', height = '200', width = '200' ></img>")

// Show name
document.write("<b><font size = 8>");
document.write("The Show name is " + tvshow.name);
document.write("</b></font size = 8>");
document.write("<br>");
document.write("<br>");
// Show genre
document.write("<font size = 5><font color = 'blue'>");
document.write("It is considered a " + tvshow.genre);
document.write("<br>");

// Amount of seasons  and years aired between

document.write("It has " + tvshow.seasons +" seasons and aired between the years " + tvshow.yearsAired);
document.write("</font size></font color>");
document.write("<br>");

// Setting of show
document.write("<font size = 4><font color = 'red'>");
document.write("The show takes place in " + tvshow.Setting);
document.write("<br>");

// Main Character and Actor

document.write("The shows main character is played by " + tvshow.Actor +  " as " + tvshow.mainCharacter);
document.write("</font size></font color>");
document.write("<br>");

// Other Characters

document.write("<font size = 5><font color = 'purple'>");
document.write("Other notable characters include " + tvshow.sideCharacters[0] + " played by " + tvshow.sideActors[0] + ", " + tvshow.sideCharacters[1] + " played by "  + tvshow.sideActors[1] + " and " + tvshow.sideActors[2] + " playing " + tvshow.sideCharacters[2]);
document.write("<br>");

// description
document.write("<b>");
document.write("The show is about " + tvshow.Description);
document.write("</font size></font color>");
document.write("</b>");
document.write("<br>");

// Where to find show
document.write("<b><font color = 'sky blue'>")
document.write("The show originally aired the first season on " + tvshow.Network[0] + " but all seasons can be found on " + tvshow.Network[1]);
document.write("</b></font color>");