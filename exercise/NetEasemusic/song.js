$(function(){

    let id = parseInt(location.search.match(/\bid=([^&]*)/)[1],10)

    $.get('./songs.json').then(function(response){
        let songs = response
        let song = songs.filter(s=>s.id === id)[0]
        let {url} = song

        let audio = document.createElement('audio')
            audio.src = url
            audio.oncanplay = function(){
        audio.play()
        $('.disc-container').addClass('playing')
        
    }
})
    })
    
    $.get('/lyric.json').then(function(object){
        
        let {lyric} = object
        let array = lyric.split('\n')
        
        let regex = /^\[(.+)\](.*)/

        array = array.map(function(string,index){
            let matches = string.match(regex)
            if(matches){
                return {time: matches[1],words:matches[2]}
            }
            
        })
        let $lyric = $('.lyric')
        array.map(function(object){
            if(!object){return}
            let $p = $('<p/>')
            $p.attr('data-time',object.time).text(object.words)
            $p.appendTo($lyric.children('.lines'))
        })
        

    

 

 
    

    })
    

