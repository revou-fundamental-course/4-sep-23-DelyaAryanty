document.addEventListener("DOMContentLoaded", function () {
    const luasForm = document.getElementById("luasForm");
    const luasPanjang = document.getElementById("luasPanjang");
    const luasLebar = document.getElementById("luasLebar");
    const method1 = document.getElementById("method1");
    const luasResult = document.getElementById("luasResult");



    luasForm.addEventListener("submit", function (e) {
        e.preventDefault();

 
        const panjang = parseFloat(luasPanjang.value);
        const lebar = parseFloat(luasLebar.value);

        if (isNaN(panjang) || isNaN(lebar) || panjang <= 0 || lebar <= 0) {
            alert("Panjang dan lebar harus merupakan angka positif.");
            return;
        }

        jawaban1.style.display = 'block'

        const luas = panjang * lebar;
        method1.textContent =  `${panjang} x ${lebar}`
        luasResult.textContent = luas;
    });


    const kelilingForm = document.getElementById("kelilingForm");
    const kelilingPanjang = document.getElementById("kelilingPanjang");
    const kelilingLebar = document.getElementById("kelilingLebar");
    const method2 = document.getElementById("method2");
    const kelilingResult = document.getElementById("kelilingResult");

    kelilingForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const panjang = parseFloat(kelilingPanjang.value);
        const lebar = parseFloat(kelilingLebar.value);

        if (isNaN(panjang) || isNaN(lebar) || panjang <= 0 || lebar <= 0) {
            alert("Panjang dan lebar harus merupakan angka positif.");
            return;
        }
        jawaban2.style.display = 'block'
        const keliling = 2 * (panjang + lebar);
        method2.textContent = `2 (${panjang} + ${lebar})`
        kelilingResult.textContent = keliling;
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const formContainer1 = document.getElementById("formContainer1");
    const link1 = document.getElementById("link1");

    link1.addEventListener("click", function (e) {
        e.preventDefault();

        formContainer2.style.display = "none";

        if (formContainer1.style.display === "none") {
            formContainer1.style.display = "block";
            link1.style.backgroundColor = ('#9EB384');
            link2.style.backgroundColor = ('#CEDEBD');
        } else {
            formContainer1.style.display = "none";
            link1.style.backgroundColor = ('#CEDEBD')
        }
    });

    const formContainer2 = document.getElementById("formContainer2");
    const link2 = document.getElementById("link2");

    link2.addEventListener("click", function (e) {
        e.preventDefault();

        formContainer1.style.display = "none";



        if (formContainer2.style.display === "none") {
            formContainer2.style.display = "block";
            link1.style.backgroundColor = ('#CEDEBD');
            link2.style.backgroundColor = ('#9EB384');
        } else {
            formContainer2.style.display = "none";
            link2.style.backgroundColor = ('#CEDEBD')
        }
    });
});