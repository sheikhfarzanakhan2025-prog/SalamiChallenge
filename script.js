function startSystem() {
    const name = document.getElementById('userName').value;
    if(name === "") return alert("SYSTEM ERROR: PLEASE ENTER ACCESS NAME");
    
    document.getElementById('start-node').classList.remove('active');
    document.getElementById('q1-node').classList.add('active');
}

function nextStep(nodeId) {
    document.querySelectorAll('.node').forEach(n => n.classList.remove('active'));
    document.getElementById(nodeId).classList.add('active');
}

function processResult() {
    const name = document.getElementById('userName').value;
    const ans1 = document.getElementById('ans1').value.toLowerCase();
    const ans2 = document.getElementById('ans2').value.toLowerCase();

    // MATCH LOGIC
    const favFood = (ans1.includes("lollipop") || ans1.includes("লিলিপপ") || ans1.includes("ললিপপ"));
    const favMonth = (ans2.includes("september") || ans2.includes("সেপ্টেম্বর"));

    nextStep('result-node');
    document.getElementById('final-cash').innerText = "0"; // Counter animation logic follows

    let finalAmount = 0;
    let message = "";

    if (favFood && favMonth) {
        finalAmount = 1000;
        message = "ওয়াও! " + name + ", আপনি তো আমাকে আমার চেয়েও বেশি চেনেন। আপনার জন্য স্পেশাল সালামি!";
    } else if (favFood || favMonth) {
        finalAmount = 50;
        message = name + ", আমাদের পছন্দ কিছুটা মিলেছে। আরেকটু চেষ্টা করলে হয়তো ১০০০ পেতে পারতেন!";
    } else {
        finalAmount = 0;
        message = "সরি " + name + ", আপনি কি ভুল করে আমার ওয়েবসাইটে ঢুকেছেন? আগে আমাকে চিনুন, তারপর সালামি!";
    }

    // Money Count Animation
    let count = 0;
    let timer = setInterval(() => {
        if(count >= finalAmount) {
            clearInterval(timer);
        } else {
            count += (finalAmount === 1000) ? 20 : 2;
            document.getElementById('final-cash').innerText = count;
        }
    }, 30);

    document.getElementById('final-msg').innerText = message;
}

