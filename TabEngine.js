function OpenImages(tabname, ele, color){
    var i, tabcontent, tablink;
    // hide elements with tabs tag
    tabcontent = document.getElementsByClassName("tabcontent");
    for(i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }

    //remove background color of tabs
    tablink = document.getElementsByClassName("tablink");
        for (i = 0; i < tablink.length; i++) {
            tablink[i].style.backgroundColor = "";
        }
    // show tab content
    document.getElementById(tabname).style.display = "block";

    //add color to tab
    ele.style.backgroundColor = color;
}
document.getElementById("defaultOpen").click();
