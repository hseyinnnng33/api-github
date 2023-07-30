const kart1 = document.querySelector(".kart")
const input = document.querySelector(".input")
const btnAra = document.querySelector(".ara-btn")

async function gosterApi(){
    let inputDeger = input.value.trim();
    if(inputDeger === ""){
        console.log("asddas")
        return;
    }
    
    input.value = "";
    try{
        const res = await fetch(`https://api.github.com/users/${inputDeger}`);
        if (!res.ok) {
            throw new Error("Kullanıcı adı bulunamadı!");
        }
        const data = await res.json();
    
        kart1.innerHTML = `
        <div class="ust">
                        <div class="resim">
                            <img src="${data.avatar_url}" class="resim-1">
                            <div class="konum"><h2>${data.location}</h2></div>
                        </div>
    
                        <div class="sag">
                                <div class="ust-ad">
                                <h2 class="ad-kullanici">${data.name}</h2>
                                <a href="${data.html_url}" target = "_blank"><span class="material-symbols-outlined">alt_route</span></a>
                                <div><h2 class="takma-ad">${data.login}</h2></div>
                                </div>
    
                                <div class="takip-bir">
                                    <h2>Takipçiler <span class="takipci">${data.followers}</span></h2>
                                    <h2 style="margin-left: 20px;">Takip Edilenler <span class="takipeden">${data.following}</span></h2>
                                </div>
                        </div>        
                        
                    </div>
    
                </div>
        `
        console.log(data)
    }
   
    catch (err) {
        kart1.innerHTML = `<div class="hata">Hata: ${err.message}</div>`;
    }
   

}

btnAra.addEventListener("click", gosterApi)

window.addEventListener("keyup", function(e){
    if(e.key === "Enter"){
        gosterApi()
    }
})