const gmajorclick = document.getElementById("gmajor")
const cmajorclick = document.getElementById("cmajor")
const eminorclick = document.getElementById("eminor")
const dmajorclick = document.getElementById("dmajor")
const bbmajorclick = document.getElementById("bbmajor")
const emajorclick = document.getElementById("emajor")
function gmajor()
{
    let div = document.getElementById("gmajordiv")
    if(div.style.display == "none")
    {
        div.style.display = "flex"
    }
    else
    {
        div.style.display = "none"
    }
}
function cmajor()
{
    let div = document.getElementById("cmajordiv")
    if(div.style.display == "none")
    {
        div.style.display = "flex"
    }
    else
    {
        div.style.display = "none"
    }
}
function eminor()
{
    let div = document.getElementById("eminordiv")
    if(div.style.display == "none")
    {
        div.style.display = "flex"
    }
    else
    {
        div.style.display = "none"
    }
}
function dmajor()
{
    let div = document.getElementById("dmajordiv")
    if(div.style.display == "none")
    {
        div.style.display = "flex"
    }
    else
    {
        div.style.display = "none"
    }
}
function bbmajor()
{
    let div = document.getElementById("bbmajordiv")
    if(div.style.display == "none")
    {
        div.style.display = "flex"
    }
    else
    {
        div.style.display = "none"
    }
}
function emajor()
{
    let div = document.getElementById("emajordiv")
    if(div.style.display == "none")
    {
        div.style.display = "flex"
    }
    else
    {
        div.style.display = "none"
    }
}
gmajor()
cmajor()
eminor()
dmajor()
bbmajor()
emajor()
gmajorclick.addEventListener("click", gmajor)
cmajorclick.addEventListener("click", cmajor)
eminorclick.addEventListener("click", eminor)
dmajorclick.addEventListener("click", dmajor)
bbmajorclick.addEventListener("click", bbmajor)
emajorclick.addEventListener("click", emajor)