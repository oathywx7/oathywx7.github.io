$(function(){
    $.get('/lyric.json').then(function(object){
        let {lyric} = object.lyric
        console.log(lyric.split('\n'))
    })
})