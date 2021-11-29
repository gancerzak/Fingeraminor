const gmajorclick = document.getElementById("gmajor")
const cmajorclick = document.getElementById("cmajor")
const eminorclick = document.getElementById("eminor")
const bmajorclick = document.getElementById("bmajor")
const dmajorclick = document.getElementById("dmajor")
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
function bmajor()
{
    let div = document.getElementById("bmajordiv")
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
bmajor()
gmajorclick.addEventListener("click", gmajor)
cmajorclick.addEventListener("click", cmajor)
eminorclick.addEventListener("click", eminor)
dmajorclick.addEventListener("click", dmajor)
bmajorclick.addEventListener("click", bmajor)