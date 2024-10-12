//<![CDATA[
$(document).ready(function () {
    "use strict";
    new jPlayerPlaylist({
        jPlayer: "#musica-jquery-jplayer",
        cssSelectorAncestor: "#musica-audio-player-container"
    }, [
        {
            title: "Baguncinha",
            artist: "<span class='music-time'>03:02</span>",
            mp3: "https://65381g.ha.azioncdn.net/a/7/e/7/bandadjavu-baguncinha-e15dfe37.mp3",
            // oga: "http://banda-djavu.test/banda-djavu/baguncinha.mp3",
            // poster: "images/home/poster1.jpg",

        },
        {
            title: "Lábios divididos",
            artist: "<span class='music-time'>04:47</span>",
            mp3: "https://65381g.ha.azioncdn.net/2/2/1/d/bandadjavu-labios-divididos-8d01f3f0.mp3",
            // oga: "http://banda-djavu.test/banda-djavu/labios-divididos.mp3",
            // poster: "http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png"
        },
        {
            title: "Me libera",
            artist: "<span class='music-time'>04:48</span>",
            mp3: "https://65381g.ha.azioncdn.net/7/7/9/1/bandadjavu-me-libera-62142c5f.mp3",
            // oga: "http://banda-djavu.test/banda-djavu/me-libera.mp3",
            // poster: "http://www.jplayer.org/audio/poster/Miaow_640x360.png"
        },
    ], {
        playlistOptions: {
            autoPlay: false,
            loopOnPrevious: true,
            shuffleOnLoop: true,
            enableRemoveControls: true,
            displayTime: "show",
            freeItemClass: "jp-playlist-item-free",
        },
        swfPath: "js/jquery.jplayer.swf",
        supplied: "mp3",
        wmode: "window",
        useStateClassSkin: true,
        autoBlur: true,
        smoothPlayBar: true,
        keyEnabled: true,
        remainingDuration: true,
        volume: 1,
    });



});
//]]>
