
// const clicky = document.getElementById("kkk");
// const middle = document.getElementById("mid");

document.getElementById('kkk').addEventListener('click', function(){
    const tada = document.getElementById("open");
    const mid = document.getElementById("mid");
    tada.style.display='none';
    mid.style.display="flex";
});

document.getElementById('button-damai').addEventListener('click', function(){
    const mid = document.getElementById("mid");
    const next = document.getElementById("next");
    mid.style.display="none";
    next.style.display="flex";

})

document.getElementById("button-damai").addEventListener("click", function(){
    const next = document.getElementById("next");
    const mid = document.getElementById("mid");
    next.style.display="flex";
    mid.style.display="none";
})

document.getElementById('button-next').addEventListener('click', function(){
    const next = document.getElementById("next");
    const perta = document.getElementById('pertanyaan01');
    next.style.display="none";
    perta.style.display="flex";
})

document.getElementById('next-01').addEventListener('click', function(){
    const quest = document.getElementById("pertanyaan01");
    const mem02 = document.getElementById("mem-02");
    quest.style.display="none";
    mem02.style.display="flex";
})

document.getElementById('next-3').addEventListener('click', function(){
    const quest2 = document.getElementById('pertanyaan02');
    const mem03 = document.getElementById('mem-02');

    mem03.style.display="none";
    quest2.style.display="flex";
})

document.getElementById('next-4').addEventListener('click', function(){
    const quest3 = document.getElementById('pertanyaan02');
    const mem03 = document.getElementById('mem-03');

    mem03.style.display="flex";
    quest3.style.display="none";
})

document.getElementById('next-5').addEventListener('click', function(){
    const mem04 = document.getElementById('mem-03');
    const last = document.getElementById('akhir');

    mem04.style.display="none";
    last.style.display="flex";
})



