console.log(localStorage)

if(document.location.pathname ==="/data.html")
    {
      let projectData = document.getElementById("projectsData")
  
      console.log(projectData)
      let data = JSON.parse(localStorage.getItem('proj'))
    if(data!==null)
      for(let project of data)
        {
            let card = document.createElement("div");
            card.classList.add("card");
            card.style.cssText = "width: 18rem";


            let cardHeader = document.createElement("div");
            cardHeader.classList.add("card-header");
    
            let h2Text = document.createElement("h2");
            h2Text.textContent = "Project";
            cardHeader.appendChild(h2Text);
    
            let lista = document.createElement("ul");
            lista.classList.add("list-group");
            lista.classList.add("list-group-flush");
    
            let liName = document.createElement("li");
            let liDescription = document.createElement("li");
            let liTime = document.createElement("li");
            
            liName.classList.add("list-group-item");
            liDescription.classList.add("list-group-item");
            liTime.classList.add("list-group-item");
        
            liName.textContent ="Name:" + project.name
            liDescription.textContent ="Description:" + project.description;
            liTime.textContent ="Time:" + project.time;

            lista.appendChild(liName);
            lista.appendChild(liDescription);
            lista.appendChild(liTime);

            card.appendChild(cardHeader);
            card.appendChild(lista);

            projectData.appendChild(card)
        }

    }



function checkIfArrayEmpty()
{
    if (localStorage.getItem('proj') === "null")
        {
            return true
            ;}

    
        return false;
}

function removeAllProjects(){
    localStorage.setItem('proj','null')
}


function addPr() {

   
    
    let projectName = document.getElementById("name");
    let description = document.getElementById("description");
    let time = document.getElementById("time");

    console.log(projectName);

    if(projectName.value === "" || description.value === "" || time.value === "") {
        alert("Please fill all the fields !");
    }
    else {
        let projects = document.getElementById("projects");

        let card = document.createElement("div");
        card.classList.add("card");
        card.style.cssText = "width: 18rem";

        let cardHeader = document.createElement("div");
        cardHeader.classList.add("card-header");

        let h2Text = document.createElement("h2");
        h2Text.textContent = "Project";
        cardHeader.appendChild(h2Text);

        let lista = document.createElement("ul");
        lista.classList.add("list-group");
        lista.classList.add("list-group-flush");

        let liName = document.createElement("li");
        let liDescription = document.createElement("li");
        let liTime = document.createElement("li");
        
        liName.classList.add("list-group-item");
        liDescription.classList.add("list-group-item");
        liTime.classList.add("list-group-item");
    
        liName.textContent ="Name:" + projectName.value;
        liDescription.textContent ="Description:" + description.value;
        liTime.textContent ="Time:" + time.value;
    
        lista.appendChild(liName);
        lista.appendChild(liDescription);
        lista.appendChild(liTime);
    
        let proj = {'name':projectName.value,
                    'description':description.value,
                    'time':time.value}
        
       
 
        if(checkIfArrayEmpty())
        {
            console.log("aicica")
            localStorage.setItem('proj',JSON.stringify([proj]))
            
        }
    
        else
        {console.log(localStorage)
            let lista_proj =JSON.parse(localStorage.getItem('proj'));
            console.log(lista_proj)
            lista_proj.push(proj)
            localStorage.setItem("proj",JSON.stringify(lista_proj))
        }

        console.log(localStorage)
            

        card.appendChild(cardHeader);
        card.appendChild(lista);


        projects.appendChild(card);
        projectName.value = null;
        description.value = null;
        time.value = null;

    }


}



