function showSalami() {
    // Input গুলো ধরছি
    const name = document.getElementById('name').value.trim();
    const q1 = document.getElementById('q1').value.trim();
    const q2 = document.getElementById('q2').value.trim();
    const q3 = document.getElementById('q3').value.trim();

    // ভ্যালিডেশন চেক
    if (name === "" || q1 === "" || q2 === "" || q3 === "") {
        alert("দয়া করে সবগুলো বক্স পূরণ করুন! সালামি তো এমনি এমনি পাওয়া যায় না। 😊");
        return;
    }

    // ফর্ম লুকিয়ে রেজাল্ট দেখানো
    document.getElementById('quiz-form').style.display = 'none';
    const resultSection = document.getElementById('result-section');
    resultSection.style.display = 'block';

    // ইউজারের নাম সেট করা
    document.getElementById('userNameDisplay').innerText = "অভিনন্দন, " + name + "!";
    
    // কনসোল এ ডাটা দেখা (ঐচ্ছিক)
    console.log("Salami Request from:", name);
}

function resetPage() {
    location.reload();
}
