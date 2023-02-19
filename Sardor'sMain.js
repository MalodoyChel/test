let backMod = document.querySelector(".Sardor_Back_Modal"),
    saveMod = document.querySelector(".Sardor_Mod_Save"),
    openMod = document.querySelector(".Sardor_Open_Mod"),
    nameInp = document.querySelector(".Sardor_Inp_Name"),
    mailInp = document.querySelector(".Sardor_Inp_Mail"),
    roleInp = document.querySelector(".Sardor_Inp_Role"),
    profileInp = document.querySelector(".Sardor_Inp_Profile"),
    telInp = document.querySelector(".Sardor_Inp_Tel"),
    userName = document.querySelector(".Sardor_Names"),
    userName1 = document.querySelector(".Sardor_Names1"),
    userProfile = document.querySelector(".Sardor_Profiles"),
    userProfile1 = document.querySelector(".Sardor_Profiles1"),
    userMail = document.querySelector(".Sardor_Mail"),
    userJob = document.querySelector(".Sardor_Job"),
    userStatus = document.querySelector(".Sardor_Status"),
    userTel = document.querySelector(".Sardor_Tel"),
    form = document.querySelector(".Sardor_Mod_Top_Right"),
    inps = document.querySelectorAll("input[name]"),
    showHideMail = document.querySelector(".Sardor_Img1"),
    showHideRole = document.querySelector(".Sardor_Img2"),
    showHideProfile = document.querySelector(".Sardor_Img3"),
    result = {};

function local(key, value) { localStorage.setItem(key, value) };

openMod.addEventListener("click", () => {
    backMod.style.display = "flex"
});
backMod.addEventListener("click", (e) => {
    if ((e.target.classList.contains("Sardor_Back_Modal")) || (e.target.classList.contains("Sardor_Mod_Exit"))) {
        backMod.style.display = "none"
    }
});
showHideMail.addEventListener("click", () => {
    if (mailInp.getAttribute("type") == "password") {
        mailInp.setAttribute("type", "email")
        showHideMail.setAttribute("src", "./Sardor'sImages/icon-unlock.png")
    } else {
        mailInp.setAttribute("type", "password")
        showHideMail.setAttribute("src", "./Sardor'sImages/icon-lock.png")
    }
});
showHideRole.addEventListener("click", () => {
    if (roleInp.getAttribute("type") == "password") {
        roleInp.setAttribute("type", "text")
        showHideRole.setAttribute("src", "./Sardor'sImages/icon-unlock.png")
    } else {
        roleInp.setAttribute("type", "password")
        showHideRole.setAttribute("src", "./Sardor'sImages/icon-lock.png")
    }
});
showHideProfile.addEventListener("click", () => {
    if (profileInp.getAttribute("type") == "password") {
        profileInp.setAttribute("type", "text")
        showHideProfile.setAttribute("src", "./Sardor'sImages/icon-unlock.png")
    } else {
        profileInp.setAttribute("type", "password")
        showHideProfile.setAttribute("src", "./Sardor'sImages/icon-lock.png")
    }
});
saveMod.addEventListener("click", (e) => {
    inps.forEach((e) => {
        result[e.name] = e.value
    })

    fetch('http://localhost:3000/infos', {
        method: 'POST',
        body: JSON.stringify(result),
        headers: { 'Content-type': 'application/json; charset=UTF-8' }
    })

    if (nameInp.value != "") {
        userName.innerHTML = nameInp.value
        userName1.innerHTML = nameInp.value
        local("name", "userName")
    }
    if (mailInp.value != "") {
        userMail.innerHTML = mailInp.value
        userMail.setAttribute('href', mailInp.value)
        local("mail", "userMail")
    }
    if (roleInp.value != "") {
        userJob.innerHTML = roleInp.value
        local("role", "userRole")
    }
    if (profileInp.value != "") {
        userProfile.innerHTML = profileInp.value
        userProfile1.innerHTML = profileInp.value
        userStatus.innerHTML = profileInp.value
        local("status", "userStatus")
    }
    if (telInp.value != "") {
        userTel.innerHTML = telInp.value
        userTel.setAttribute('href', telInp.value)
        local("tel", "userTel")
    }

    form.reset()
    backMod.style.display = "none"
});

if (localStorage.getItem("name") == "userName") {
    fetch('http://localhost:3000/infos')
        .then(res => res.json())
        .then((json) => { userName.innerHTML = json.SardorInpName, userName1.innerHTML = json.SardorInpName })
};
if (localStorage.getItem("mail") == "userMail") {
    fetch('http://localhost:3000/infos')
        .then(res => res.json())
        .then((json) => { userMail.innerHTML = json.SardorInpMail, userMail.setAttribute('href', json.SardorInpMail) })
};
if (localStorage.getItem("role") == "userRole") {
    fetch('http://localhost:3000/infos')
        .then(res => res.json())
        .then((json) => { userJob.innerHTML = json.SardorInpRole })
};
if (localStorage.getItem("status") == "userStatus") {
    fetch('http://localhost:3000/infos')
        .then(res => res.json())
        .then((json) => { userProfile.innerHTML = json.SardorInpProfile, userProfile1.innerHTML = json.SardorInpProfile, userStatus.innerHTML = json.SardorInpProfile })
};
if (localStorage.getItem("tel") == "userTel") {
    fetch('http://localhost:3000/infos')
        .then(res => res.json())
        .then((json) => { userTel.innerHTML = json.SardorInpTel, userTel.setAttribute('href', json.SardorInpTel) })
};