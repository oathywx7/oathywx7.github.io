$(function(){
    
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
    

    let audio = document.createElement('audio')
    audio.src = 'http://os4swzdxh.bkt.clouddn.com/C400000FR5GV0lwW18.mp4'
    audio.oncanplay = function(){
        audio.play()
        $('.disc-container').addClass('playing')
    }
})