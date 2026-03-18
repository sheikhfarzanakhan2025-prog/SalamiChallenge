// আপনার সঠিক উত্তরগুলো এখানে (আপনার পছন্দের সাথে মিলিয়ে)
const MY_FAV_FOOD = ["lollipop", "লিলিপপ", "ললিপপ"];
const MY_BIRTH_MONTH = ["september", "সেপ্টেম্বর"];

function nextStep(stepId) {
    const name = document.getElementById('userName').value;
    if (name === "") return alert("নাম না দিলে সালামি পাবি না!");
    
    document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
    document.getElementById(stepId).classList.add('active');
}

function showNextQ(qNum) {
    document.querySelectorAll('.question-box').forEach(q => q.style.display = 'none');
    document.getElementById('q' + qNum).style.display = 'block';
    
    // Progress bar update
    document.getElementById('progress').style.width = (qNum * 33) + "%";
}

function calculateMatch() {
    const ans1 = document.getElementById('ans1').value.toLowerCase().trim();
    const ans2 = document.getElementById('ans2').value.toLowerCase().trim();
    
    let matchCount = 0;

    // খাবার ম্যাচিং লজিক
    if (MY_FAV_FOOD.some(food => ans1.includes(food))) matchCount++;
    
    // মাস ম্যাচিং লজিক
    if (MY_BIRTH_MONTH.some(month => ans2.includes(month))) matchCount++;

    // রেজাল্ট দেখানো
    document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
    document.getElementById('result-screen').classList.add('active');

    const amountEl = document.getElementById('final-amount');
    const msgEl = document.getElementById('feedback-msg');

    if (matchCount === 2) {
        amountEl.innerText = "১০০০";
        msgEl.innerHTML = "<b>The Expert:</b> ওয়াও! আমাদের পছন্দ হুবহু মিলে গেছে। আপনি আমাকে আমার চেয়েও বেশি চেনেন!";
    } else if (matchCount === 1) {
        amountEl.innerText = "৫০";
        msgEl.innerHTML = "<b>The Friendly Neighbor:</b> আমাদের পছন্দ কিছুটা মিলেছে। আরও ভালো করে চেনার চেষ্টা করুন!";
    } else {
        amountEl.innerText = "০";
        msgEl.innerHTML = "<b>The Stranger:</b> আমাদের পছন্দে কোনো মিল নেই! আপনি কি আসলেই আমাকে চেনেন?";
    }
}
