// smooth-scroll.js
document.addEventListener('keydown', function(event) {
    const sections = document.querySelectorAll('section');
    if (event.key === 'ArrowDown') {
        event.preventDefault();
        for (let i = 0; i < sections.length; i++) {
            const rect = sections[i].getBoundingClientRect();
            if (rect.top >= 0 && rect.top < window.innerHeight) {
                const nextSection = sections[i + 1];
                if (nextSection) {
                    nextSection.scrollIntoView({ behavior: 'smooth' });
                }
                break;
            }
        }
    } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        for (let i = sections.length - 1; i >= 0; i--) {
            const rect = sections[i].getBoundingClientRect();
            if (rect.top >= 0 && rect.top < window.innerHeight) {
                const prevSection = sections[i - 1];
                if (prevSection) {
                    prevSection.scrollIntoView({ behavior: 'smooth' });
                }
                break;
            }
        }
    }
});

function prevent(e) { e.preventDefault(); }
window.addEventListener('wheel', prevent, { passive: false });
window.addEventListener('touchmove', prevent, { passive: false });

window.addEventListener('keydown', function(e) {
const keys = ['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','PageUp','PageDown','Home','End',' '];
if (keys.includes(e.key)) e.preventDefault();
}, { passive: false });

// time-left.js

function calculateTimeLeft() {
    const targetDate = "2026-01-05T00:00:00";
    const now = new Date();
    const target = new Date(targetDate);
    const timeDifference = target - now;

    if (timeDifference <= 0) {
        return "The target date has already passed.";
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    const hhh = Math.floor((timeDifference / (1000 * 60 * 60)))
    const mmm = Math.floor((timeDifference / (1000 * 60)))
    const sss = Math.floor((timeDifference) / 1000)

    document.getElementById('dd').textContent = `${days} Days`
    document.getElementById('hh').textContent = `${hours} Hours`
    document.getElementById('mm').textContent = `${minutes} Minutes`
    document.getElementById('ss').textContent = `${seconds} Seconds`
    document.getElementById('hhh').textContent = `${hhh} Hours`
    document.getElementById('mmm').textContent = `${mmm} Minutes`
    document.getElementById('sss').textContent = `${sss} Seconds`
}

function updateTimeLeft() {
    calculateTimeLeft();
}

setInterval(updateTimeLeft, 1000);

updateTimeLeft();
