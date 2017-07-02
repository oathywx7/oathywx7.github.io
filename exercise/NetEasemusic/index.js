$(function(){
    setTimeout(function(){

        $.get('./songs.json').then(function(response){
            //response 可能是字符串
            //response 也可能是对象
            console.log(response)
            let items = response
            items.forEach((i)=>{
                let $li = $(`
                <li>
                    <a href="./song.html?id=${i.id}">
                        <h3>${i.name}</h3>
                        <p>
                            <svg class="sq">
                                <use xlink:href="#icon-sq"></use>
                            </svg>
                            ${i.author}
                        </p>
                        <svg class="icon">
                            <use xlink:href="#icon-play-list"></use>
                        </svg>
                    </a>
                </li>
                `)
                $('#lastestMusic').append($li)
            })
            $('#lastestMusicloading').remove()
        },function(){

        })
    },800)
})


