wallpaper_list = ["https://images5.alphacoders.com/862/862186.png", "https://images3.alphacoders.com/131/1316955.png"];
// alert(wallpaper_list[0]);

contact_developer = ["https://instagram.com/wan.__________", "https://github.com/wanZ772", "https://youtube.com/c/MuhammadNajwan", "https://twitter.com/wanz772", "https://tiktok.com/@wan._77"];

function contact_me(id)   {
    window.location.href = contact_developer[id];
}

function update_current_time()  {
    date = new Date();
    document.getElementById("display_time").innerHTML = date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds();
    document.getElementById("display_date").innerHTML = date.getDate() + " / " + (date.getMonth() + 1) + " / " + date.getFullYear();
}

setInterval(update_current_time, 1000);
