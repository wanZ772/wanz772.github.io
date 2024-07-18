wallpaper_list = ["https://images5.alphacoders.com/862/862186.png", "https://images3.alphacoders.com/131/1316955.png"];
// alert(wallpaper_list[0]);

contact_developer = ["https://instagram.com/wan.__________", "https://github.com/wanZ772", "https://youtube.com/c/MuhammadNajwan", "https://twitter.com/wanz772", "https://tiktok.com/@wan._77"];
projects_list = {
    "GitHub":"https://github.com/wanZ772",
    "Music Streaming App":"https://streameo.onrender.com",
    "Natural Hazard Web App":"https://wanz772.github.io/natural_hazard",
    "Natural Hazard backend API":"https://natural-hazard-forecast.onrender.com",
    "Mosque Location Finder API":"https://masjid.onrender.com",
    "Smart Farming System (IOT)":"https://vt.tiktok.com/ZSYtbTQbQ/",
    "Smart Home System (IOT)":"https://vt.tiktok.com/ZSYtbw5P2/",
    "Restaurant System (IOT + web app + server)": "https://vt.tiktok.com/ZSYt7oQKV/",
    "Hand Gesture (IOT + Python OpenCV)":"https://github.com/wanZ772"
}

function show_projects(id)  {
    window.location.href = projects_list[id];
}

function contact_me(id)   {
    window.location.href = contact_developer[id];
}

function update_current_time()  {
    date = new Date();
    document.getElementById("display_time").innerHTML = date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds();
    document.getElementById("display_date").innerHTML = date.getDate() + " / " + (date.getMonth() + 1) + " / " + date.getFullYear();
}

setInterval(update_current_time, 1000);
var background_music =  new Audio("assets/background_music.aac");
function close_msg_box()    {
    document.getElementById("msg_box").remove();
    background_music.play();
    background_music.loop = true;
    
}
function onload_functions()  {
    date = new Date();
    document.getElementById("age") . innerHTML = (date.getFullYear() - 2003) + " y/o";
    target = document.getElementById("projects");
    head = document.createElement("h2");
    node = document.createTextNode("Projects (More on GitHub)");
    head.appendChild(node);
    head.setAttribute("onclick", "show_projects('GitHub')");
    target.appendChild(head);

    for (i = 1; i < Object.keys(projects_list).length; i++)  {
        para = document.createElement("p");
        node = document.createTextNode(Object.keys(projects_list)[i]);
        para.setAttribute("onclick", "show_projects('" + Object.keys(projects_list)[i] + "')");
    para.appendChild(node);
    target.appendChild(para);
    }
    // for (i = 0; i < projects_list.length; i++)  {
        

    // }

    var cursorOffset = {
        left : -1.5
      , top  : 0,
      
     }
     
     document.getElementById("html").addEventListener("mousemove", function (e) {
       var $cursor = document.getElementById('cursor');
     
       $cursor.style.left = (e.pageX - cursorOffset.left) + 'px';
       $cursor.style.top = (e.pageY - cursorOffset.top) + 'px';
     
     });
     target = document.getElementById("html");
     box = document.createElement("div");
     box.setAttribute("id", "msg_box");
     node = document.createTextNode("Welcome!");
     
     box.appendChild(node);
     close_button = document.createElement("button");
     close_button.setAttribute("onclick", "close_msg_box()");
     node = document.createTextNode("Close");
     close_button.appendChild(node);
     box.appendChild(document.createElement("br"));
     box.appendChild(close_button);
     target.appendChild(box);
    //  background_music.play();
}

