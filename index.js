$.ajax({
    url:"https://pokeapi.co/api/v2/pokemon"
}).done((result)=>{
    data = "";
    $.each(result.results,function(key,item){
        data += `<tr id="tr">
                    <td class="text-white text-lg">${key+1}</td>
                    <td class="text-white text-lg">${item.name}</td>
                    <td><button class="btn btn-success" onclick="detailChara('${item.url}')" data-bs-toggle="modal" data-bs-target="#modalDetailSW">Detail</button></td>
                </tr>`;
    })
    $("#tbodySW").html(data);
}).fail((error)=>{
    console.log(error);
})

function detailChara(stringURL){
    $.ajax({
        url: stringURL
    }).done((result)=>{
        console.log(result.name);
        $("#name").text(result.name);
        $("#img").attr("src",result.sprites.other["official-artwork"].front_default)
        $("#type").text(type)
        type ="";
        $.each(result.types, function(key,item){
            type +=`<h2 class="badge rounded-pill">${item.type.name}</h2>`
        })
        $("#type").html(type)

        ability ="";
        $.each(result.abilities, function(key,item){
            ability +=`<h2 class="badge rounded-pill">${item.ability.name}</h2>`;
        })
        $("#ability").html(ability);

        stat = "";
        $.each(result.stats, function(key,item){
            stat +=
            `<h5>${item.stat.name}</h5>
            <div class="progress mt-2">
            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example"
             aria-valuenow="${item.base_stat}" aria-valuemin="0" aria-valuemax="100" style="width: ${item.base_stat}%; ">${item.base_stat}</div>
          </div>`;
 
        })
        $("#stat").html(stat);


    
    }).fail((error)=>{
        console.log(error);
    })

    

}
