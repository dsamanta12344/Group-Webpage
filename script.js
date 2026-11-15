function toggleBio(id) {
    var bio = document.getElementById(id);
    if (bio.style.display == "block") {
        bio.style.display = "none";
    } else {
        bio.style.display = "block";
    }
}

function showSection(section) {
    document.getElementById("bios").style.display = "none";
    document.getElementById("vision").style.display = "none";
    document.getElementById(section).style.display = "block";
}
