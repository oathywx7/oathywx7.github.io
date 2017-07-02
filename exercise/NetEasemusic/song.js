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
    audio.src = 'http://dl.stream.qqmusic.qq.com/C400000FR5GV0lwW18.m4a?vkey=E734E61C0EACD7465A6D4E679C1B7209C1C678A8624BA014D79FB4A3BDA2490E86BAC63A6B6B8D6DEFE449963FCEF8EE160FBBBC575C58D0&guid=4884137539&uin=0&fromtag=66'
    audio.oncanplay = function(){
        audio.play()
        $('.disc-container').addClass('playing')
    }
})