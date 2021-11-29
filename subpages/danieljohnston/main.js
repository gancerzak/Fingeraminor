const gmajorclick = document.getElementById("gmajor")
const cmajorclick = document.getElementById("cmajor")
const eminorclick = document.getElementById("eminor")
const aminorclick = document.getElementById("aminor")
const dminorclick = document.getElementById("dminor")
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
function aminor()
{
    let div = document.getElementById("aminordiv")
    if(div.style.display == "none")
    {
        div.style.display = "flex"
    }
    else
    {
        div.style.display = "none"
    }
}
function dminor()
{
    let div = document.getElementById("dminordiv")
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
aminor()
dminor()
gmajorclick.addEventListener("click", gmajor)
cmajorclick.addEventListener("click", cmajor)
eminorclick.addEventListener("click", eminor)
aminorclick.addEventListener("click", aminor)
dminorclick.addEventListener("click", dminor)