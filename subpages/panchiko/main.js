const amajorclick = document.getElementById("amajor")
const emajorclick = document.getElementById("emajor")
const amaj7click = document.getElementById("amaj7")
function amajor()
{
    let div = document.getElementById("amajordiv")
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
function amaj7()
{
    let div = document.getElementById("amaj7div")
    if(div.style.display == "none")
    {
        div.style.display = "flex"
    }
    else
    {
        div.style.display = "none"
    }
}
emajor()
amajor()
amaj7()
emajorclick.addEventListener("click", emajor)
amajorclick.addEventListener("click", amajor)
amaj7click.addEventListener("click", amaj7)
