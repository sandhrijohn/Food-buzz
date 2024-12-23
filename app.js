
const searchBtn = document.getElementById("search")
const searchInput = document.getElementById("searchinput")

const leftContainer = document.getElementById("left-container")


searchBtn.addEventListener("click", ()=>
{
    getRecipeData()
})

async function getRecipeData()
{
   try
   {
    const searchItem = searchInput.value
    const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchItem}&key=d0876efa-41ea-4ca8-86d1-b86b707f2206`)   
    const recipeData = await response.json()
    const recipeArray = recipeData.data.recipes
    recipeArray.map(function(i)
    {
        const myPublisher = i.publisher
        const myTitle = i.title
        const myImageUrl = i.image_url
        const myId = i.id
        console.log(myId)

        return leftContainer.insertAdjacentHTML("afterbegin",`
        <div class="left-food-container">
            <img src="${myImageUrl}" id="myimage"/>
            <h2 id="mypublisher">${myPublisher}</h2>
            <h3 id="mytitle">${myTitle}</h3>
        </div>
    `)
    })
   }

   catch(e)
   {
    alert(e)
   }
}

getRecipeData()
