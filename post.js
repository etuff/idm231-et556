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
const image = document.getElementsById('hashiraimage');
const title = document.getElementById('hashiratitle');
const date = document.getElementById('daterange');
const des = document.getElementById('description');


// get buttons to call one central function
tanjiroh.addEventListener('click', function() {
    displayinfo('tanjiro');
});

zenitsuh.addEventListener('click', function() {
    displayinfo('zenitsu');
});

inosukeh.addEventListener('click', function() {
    displayinfo('inosuke');
});

giyuh.addEventListener('click', function() {
    displayinfo('giyu');
});

gyomeih.addEventListener('click', function() {
    displayinfo('gyomei');
});

mitsurih.addEventListener('click', function() {
    displayinfo('mitsuri');
});

muichiroh.addEventListener('click', function() {
    displayinfo('muichiro');
});

obanaih.addEventListener('click', function() {
    displayinfo('obanai');
});

sanemih.addEventListener('click', function() {
    displayinfo('sanemi');
});

rengokuh.addEventListener('click', function() {
    displayinfo('rengoku');
});

shinobuh.addEventListener('click', function() {
    displayinfo('shinobu');
});

tengenh.addEventListener('click', function() {
    displayinfo('tengen');
});

// function
function displayinfo(whichone) {
    hname.innerHTML = whichone;

    switch (whichone) {
        case 'tanjiro':
            image.src = 'media/tanjiro/tanjiro-thum.webp';
            title.innerHTML = 'Sun Hashira';
            date.innerHTML = 'February 19 - March 20';
            des.innerHTML = 'You have deep empathy, compassion, and selflessness. You are driven to help others and often puts their needs before your own';
            break;

        case 'zenitsu':
            image.src = 'media/zenitsu/zenitsu_thum.webp';
            title.innerHTML = 'Thunder Hashira';
            date.innerHTML = 'June 22 - July 22';
            des.innerHTML = 'You are emotionally sensitivity, loyal, and protective. Despite your fears, you deeply care for your friends and shows bravery when it matters most';
            break;

        case 'inosuke':
            image.src = 'media/Inosuke/inosuke_thum.webp';
            title.innerHTML = 'Beast Hashira';
            date.innerHTML = 'March 21 - April 19';
            des.innerHTML = 'You are bold, competitive, and impulsive. You are always eager for a challenge and dives headfirst into battles';
            break;

        case 'giyu':
            image.src = 'media/giyu/giyu_thum.webp';
            title.innerHTML = 'Water Hashira';
            date.innerHTML = 'October 23 - November 21';
            des.innerHTML = 'You have a reserved demeanor, intense, and strong sense of duty. You are deeply committed to your role and possesses a mysterious aura';
            break;

        case 'gyomei':
            image.src = 'media/gyomei/gyomei_thum.webp';
            title.innerHTML = 'Stone Hashira';
            date.innerHTML = 'April 20 - May 20';
            des.innerHTML = 'You are steadfast, reliable, and gentle. Despite your imposing appearance, you are compassionate and patient';
            break;

        case 'mitsuri':
            image.src = 'media/mitsuri/mitsuri_thum.webp';
            title.innerHTML = 'Love Hashira';
            date.innerHTML = 'September 23 - October 22';
            des.innerHTML = 'You are affectionate, social, and harmonious. You value relationships and strives for balance in your interactions';
            break;

        case 'muichiro':
            image.src = 'mmedia/Muichiro/Muichiro_thum.webp';
            title.innerHTML = 'Mist Hashira';
            date.innerHTML = 'January 20 - February 18';
            des.innerHTML = 'you appear detached, introspective, and innovative. You often appear lost in thought but possesses unique insights';
            break;

        case 'obanai':
            image.src = 'media/obanai/obanai_thum.webp';
            title.innerHTML = 'Serpent Hashira';
            date.innerHTML = 'August 23 - September 22';
            des.innerHTML = 'You are meticulous, critical, and have a dedication to duty. You hold high standards and is attentive to details';
            break;

        case 'sanemi':
            image.src = 'media/sanemi/sanemi_thum.webp';
            title.innerHTML = 'Wind Hashira';
            date.innerHTML = 'July 23 - August 22';
            des.innerHTML = 'You are fierce, courageous, and authoritative. You are confident in your abilities and commands attention';
            break;

        case 'rengoku':
            image.src = 'media/rengoku/rengoku_thum.webp';
            title.innerHTML = 'Flame Hashira';
            date.innerHTML = 'November 22 - December 21';
            des.innerHTML = 'You are enthusiastic, optimistic, and adventurous. You approach life with a positive outlook and seeks to inspire others';
            break;

        case 'shinobu':
            image.src = 'media/Shinobu/shinobu_thum.webp';
            title.innerHTML = 'Insect Hashira';
            date.innerHTML = 'May 21 - June 21';
            des.innerHTML = 'You are adaptable, witty, and have a dual nature. You present a cheerful exterior while harboring deeper, more complex emotions';
            break;

        case 'tengen':
            image.src = 'media/tengen/tengen_thum.webp';
            title.innerHTML = 'Sound Hashira';
            date.innerHTML = 'December 22 - Jane 19';
            des.innerHTML = 'You are discipline, ambitious, and flamboyant. You are committed to your duties and strives for excellence in a flashy manner';
            break;

        default:
            console.log('Try Again, warrior');
    }
}