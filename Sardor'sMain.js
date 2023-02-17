let backMod = document.querySelector(".SardorBackModal"),
    saveMod = document.querySelector(".SardorModSave"),
    openMod = document.querySelector(".SardorOpenMod"),
    nameInp = document.querySelector(".SardorInpName"),
    mailInp = document.querySelector(".SardorInpMail"),
    roleInp = document.querySelector(".SardorInpRole"),
    profileInp = document.querySelector(".SardorInpProfile"),
    telInp = document.querySelector(".SardorInpTel"),
    userName = document.querySelector(".SardorNames"),
    userName1 = document.querySelector(".SardorNames1"),
    userProfile = document.querySelector(".SardorProfiles"),
    userProfile1 = document.querySelector(".SardorProfiles1"),
    userMail = document.querySelector(".SardorMail"),
    userJob = document.querySelector(".SardorJob"),
    userStatus = document.querySelector(".SardorStatus"),
    userTel = document.querySelector(".SardorTel"),
    form = document.querySelector(".SardorModTopRight"),
    inps = document.querySelectorAll("input[name]"),
    result = {};

function local(key, value) { localStorage.setItem(key, value) };

openMod.addEventListener("click", () => {
    backMod.style.display = "flex"
});
backMod.addEventListener("click", (e) => {
    if ((e.target.classList.contains("SardorBackModal")) || (e.target.classList.contains("SardorModExit"))) {
        backMod.style.display = "none"
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