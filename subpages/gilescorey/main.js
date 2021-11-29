const dmajorclick = document.getElementById("dmajor")
const amajor7click = document.getElementById("amajor7")
const gmajorclick = document.getElementById("gmajor")
const eminorclick = document.getElementById("eminor")
const amajor5click = document.getElementById("amajor5")
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
function amajor7()
{
    let div = document.getElementById("amajor7div")
    if(div.style.display == "none")
    {
        div.style.display = "flex"
    }
    else
    {
        div.style.display = "none"
    }
}
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
function amajor5()
{
    let div = document.getElementById("amajor5div")
    if(div.style.display == "none")
    {
        div.style.display = "flex"
    }
    else
    {
        div.style.display = "none"
    }
}
dmajor()
amajor7()
gmajor()
eminor()
amajor5()
dmajorclick.addEventListener("click", dmajor)
amajor7click.addEventListener("click", amajor7)
gmajorclick.addEventListener("click", gmajor)
eminorclick.addEventListener("click", eminor)
amajor5click.addEventListener("click", amajor5)