// 1. SETUP VARIABLES (Grabbing the input boxes from the left)
const issueInput = document.getElementById('issueInput');
const headInput = document.getElementById('headInput');
const subInput = document.getElementById('subInput');
const imgInput = document.getElementById('imgInput');

// 2. SETUP VARIABLES (Grabbing the text on the magazine cover on the right)
const magIssue = document.getElementById('magIssue');
const magHead = document.getElementById('magHead');
const magSub = document.getElementById('magSub');
const magBg = document.getElementById('magBg');

// 3. THE LOGIC (Listen for typing and update the cover live)

// Update Issue Number
issueInput.addEventListener('input', function() {
    if (issueInput.value === '') {
        magIssue.innerText = 'VOL. 01'; // Fallback if empty
    } else {
        magIssue.innerText = 'VOL. ' + issueInput.value;
    }
});

// Update Main Headline
headInput.addEventListener('input', function() {
    if (headInput.value === '') {
        magHead.innerText = 'THE TIRED REALITY'; // Fallback if empty
    } else {
        magHead.innerText = headInput.value;
    }
});

// Update Sub-text
subInput.addEventListener('input', function() {
    if (subInput.value === '') {
        magSub.innerText = 'WARPER PROTOCOL // NATHI'; // Fallback if empty
    } else {
        magSub.innerText = subInput.value;
    }
});

// Update Background Image
imgInput.addEventListener('input', function() {
    if (imgInput.value !== '') {
        // Changes the CSS background image to whatever link you paste
        magBg.style.backgroundImage = `url('${imgInput.value}')`;
    } else {
        // Default placeholder image
        magBg.style.backgroundImage = "url('https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=1000&auto=format&fit=crop')";
    }
});