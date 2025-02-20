// 
// 
// 
const tanjiroh = document.getElementById('tanjiro');
const zenitsuh = document.getElementById('zenitsu');
const inosukeh = document.getElementById('inosuke');
const giyuh = document.getElementById('giyu');
const gyomeih = document.getElementById('gyomei');
const mitsurih = document.getElementById('mitsuri');
const muichiroh = document.getElementById('muichiro');
const obanaih = document.getElementById('obanai');
const sanemih = document.getElementById('sanemi');
const rengokuh = document.getElementById('rengoku');
const shinobuh = document.getElementById('shinobu');
const tengenh = document.getElementById('tengen');

// display objects
const hname = document.getElementById('hashiraname');
const himage = document.getElementById('hashiraimage');
const htitle = document.getElementById('hashiratitle');
const hdate = document.getElementById('daterange');
const des = document.getElementById('description');

// close mode
const displayarea = document.getElementById('displayarea');
const closebtn = document.getElementById('close');


// get buttons to call one central function
tanjiroh.addEventListener('click', function() {
    displayinfo('tanjiro');
}, false);

zenitsuh.addEventListener('click', function() {
    displayinfo('zenitsu');
}, false);

inosukeh.addEventListener('click', function() {
    displayinfo('inosuke');
}, false);

giyuh.addEventListener('click', function() {
    displayinfo('giyu');
}, false);

gyomeih.addEventListener('click', function() {
    displayinfo('gyomei');
}, false);

mitsurih.addEventListener('click', function() {
    displayinfo('mitsuri');
}, false);

muichiroh.addEventListener('click', function() {
    displayinfo('muichiro');
}, false);

obanaih.addEventListener('click', function() {
    displayinfo('obanai');
}, false);

sanemih.addEventListener('click', function() {
    displayinfo('sanemi');
}, false);

rengokuh.addEventListener('click', function() {
    displayinfo('rengoku');
}, false);

shinobuh.addEventListener('click', function() {
    displayinfo('shinobu');
}, false);

tengenh.addEventListener('click', function() {
    displayinfo('tengen');
}, false);

// function
function displayinfo(whichone) {
    hname.innerHTML = whichone;

    switch (whichone) {
        case 'tanjiro':
            himage.src = 'media/tanjiro/tanjiro22.webp';
            htitle.innerHTML = 'Sun Hashira - Tanjiro';
            hdate.innerHTML = 'February 19 - March 20';
            des.innerHTML = 'You have deep empathy, compassion, and selflessness. You are driven to help others and often puts their needs before your own';
            displayarea.classList.remove('hideme');

            // play audio for this character
            playaudio('tanjirovoice');
            break;

        case 'zenitsu':
            himage.src = 'media/zenitsu/zenitsu22.webp';
            htitle.innerHTML = 'Thunder Hashira - Zenitsu';
            hdate.innerHTML = 'June 22 - July 22';
            des.innerHTML = 'You are emotionally sensitivity, loyal, and protective. Despite your fears, you deeply care for your friends and shows bravery when it matters most';
            displayarea.classList.remove('hideme');

            // play audio for this character
            playaudio('zenitsuvoice');
            break;

        case 'inosuke':
            himage.src = 'media/Inosuke/inosuke22.webp';
            htitle.innerHTML = 'Beast Hashira - Inosuke';
            hdate.innerHTML = 'March 21 - April 19';
            des.innerHTML = 'You are bold, competitive, and impulsive. You are always eager for a challenge and dives headfirst into battles';
            displayarea.classList.remove('hideme');

            // play audio for this character
            playaudio('inosukevoice');
            break;

        case 'giyu':
            himage.src = 'media/giyu/giyu22.webp';
            htitle.innerHTML = 'Water Hashira - Giyu';
            hdate.innerHTML = 'October 23 - November 21';
            des.innerHTML = 'You have a reserved demeanor, intense, and strong sense of duty. You are deeply committed to your role and possesses a mysterious aura';
            displayarea.classList.remove('hideme');

            // play audio for this character
            playaudio('giyuvoice');
            break;

        case 'gyomei':
            himage.src = 'media/gyomei/gyomei22.webp';
            htitle.innerHTML = 'Stone Hashira - Gyomei';
            hdate.innerHTML = 'April 20 - May 20';
            des.innerHTML = 'You are steadfast, reliable, and gentle. Despite your imposing appearance, you are compassionate and patient';
            displayarea.classList.remove('hideme');

            // play audio for this character
            playaudio('gyomeivoice');
            break;

        case 'mitsuri':
            himage.src = 'media/mitsuri/mitsuri22.webp';
            htitle.innerHTML = 'Love Hashira - Mitsuri';
            hdate.innerHTML = 'September 23 - October 22';
            des.innerHTML = 'You are affectionate, social, and harmonious. You value relationships and strives for balance in your interactions';
            displayarea.classList.remove('hideme');

            // play audio for this character
            playaudio('mitsurivoice');
            break;

        case 'muichiro':
            himage.src = 'media/Muichiro/muichiro22.webp';
            htitle.innerHTML = 'Mist Hashira - Muichiro';
            hdate.innerHTML = 'January 20 - February 18';
            des.innerHTML = 'you appear detached, introspective, and innovative. You often appear lost in thought but possesses unique insights';
            displayarea.classList.remove('hideme');

            // play audio for this character
            playaudio('muichirovoice');
            break;

        case 'obanai':
            himage.src = 'media/obanai/obanai.webp';
            htitle.innerHTML = 'Serpent Hashira - Obanai';
            hdate.innerHTML = 'August 23 - September 22';
            des.innerHTML = 'You are meticulous, critical, and have a dedication to duty. You hold high standards and is attentive to details';
            displayarea.classList.remove('hideme');

            // play audio for this character
            playaudio('obanaivoice');
            break;

        case 'sanemi':
            himage.src = 'media/sanemi/sanemi22.webp';
            htitle.innerHTML = 'Wind Hashira - Sanemi';
            hdate.innerHTML = 'July 23 - August 22';
            des.innerHTML = 'You are fierce, courageous, and authoritative. You are confident in your abilities and commands attention';
            displayarea.classList.remove('hideme');

            // play audio for this character
            playaudio('sanemivoice');
            break;

        case 'rengoku':
            himage.src = 'media/rengoku/rengoku22.webp';
            htitle.innerHTML = 'Flame Hashira - Rengoku';
            hdate.innerHTML = 'November 22 - December 21';
            des.innerHTML = 'You are enthusiastic, optimistic, and adventurous. You approach life with a positive outlook and seeks to inspire others';
            displayarea.classList.remove('hideme');

            // play audio for this character
            playaudio('rengokuvoice');
            break;

        case 'shinobu':
            himage.src = 'media/Shinobu/shinobu22.webp';
            htitle.innerHTML = 'Insect Hashira - Shinobu';
            hdate.innerHTML = 'May 21 - June 21';
            des.innerHTML = 'You are adaptable, witty, and have a dual nature. You present a cheerful exterior while harboring deeper, more complex emotions';
            displayarea.classList.remove('hideme');

            // play audio for this character
            playaudio('shinobuvoice');
            break;

        case 'tengen':
            himage.src = 'media/tengen/tengen22.webp';
            htitle.innerHTML = 'Sound Hashira - Tengen';
            hdate.innerHTML = 'December 22 - Jane 19';
            des.innerHTML = 'You are discipline, ambitious, and flamboyant. You are committed to your duties and strives for excellence in a flashy manner';
            displayarea.classList.remove('hideme');

            // play audio for this character
            playaudio('tengenvoice');
            break;

        default:
            console.log('Try Again, warrior');
    }
}

closebtn.addEventListener('click', function() {
    displayarea.classList.add('hideme');

    allaudios.forEach(thisaudio => {
        // stops audio
        thisaudio.pause();
        // reset sound file back to start
        thisaudio.currentTime = 0;
    });
});

// play audio function
const allaudios = document.querySelectorAll('audio');
function playaudio(whichsound) {
    allaudios.forEach(thisaudio => {
        thisaudio.pause();
        // reset sound file back to start
        thisaudio.currentTime = 0; 
    
    });
    document.getElementById(whichsound).play();
}