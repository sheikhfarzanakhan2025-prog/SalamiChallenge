function goToStep(stepId) {
    const currentName = document.getElementById('userName').value.trim();
    
    // নাম ছাড়া সামনে যাওয়া যাবে না
    if (stepId === 'step-1' && currentName === "") {
        alert("আগে তোমার নামটা বলো! 😊");
        return;
    }

    // সব স্টেপ লুকাও
    const steps = document.querySelectorAll('.step');
    steps.forEach(s => s.classList.remove('active'));

    // টার্গেট স্টেপ দেখাও
    document.getElementById(stepId).classList.add('active');
}

function calculateResult() {
    const name = document.getElementById('userName').value.trim();
    const ans1 = document.getElementById('ans1').value.toLowerCase().trim();
    const ans2 = document.getElementById('ans2').value.toLowerCase().trim();
    const ans3 = document.getElementById('ans3').value.trim();

    if (ans1 === "" || ans2 === "" || ans3 === "") {
        alert("সবগুলো প্রশ্নের উত্তর দাও! ফাঁকিবাজি চলবে না।");
        return;
    }

    let score = 0;

    // কন্ডিশন ১: প্রিয় খাবার (লিলিপপ)
    if (ans1.includes("lollipop") || ans1.includes("লিলিপপ") || ans1.includes("ললিপপ")) {
        score++;
    }

    // কন্ডিশন ২: জন্মদিন (সেপ্টেম্বর)
    if (ans2.includes("september") || ans2.includes("সেপ্টেম্বর")) {
        score++;
    }

    // রেজাল্ট দেখানো
    const steps = document.querySelectorAll('.step');
    steps.forEach(s => s.classList.remove('active'));
    document.getElementById('result').classList.add('active');
    
    document.getElementById('finalName').innerText = "প্রিয় " + name + ",";

    const amountEl = document.getElementById('amount');
    const noteEl = document.getElementById('personal-note');

    // আপনার দেওয়া কন্ডিশন অনুযায়ী মেসেজ
    if (score === 2) {
        amountEl.innerText = "১০০০";
        noteEl.innerHTML = "<b>The Expert:</b> ওয়াও! আপনি তো আমাকে আমার চেয়েও বেশি চেনেন। আপনার জন্য স্পেশাল সালামি: ৳১০০০।";
    } else if (score === 1) {
        amountEl.innerText = "৫০";
        noteEl.innerHTML = "<b>The Friendly Neighbor:</b> আরেকটু চেষ্টা করলেই হতো! আপনার জন্য সান্ত্বনা পুরস্কার সালামি: ৳৫০।";
    } else {
        amountEl.innerText = "০";
        noteEl.innerHTML = "<b>The Stranger:</b> ভাই/বোন, আপনি কি ভুল করে আমার ওয়েবসাইটে ঢুকেছেন? আপনার জন্য সালামি: ৳০ (জিরো)। আগে আমাকে চিনুন, তারপর সালামি!";
    }
}
