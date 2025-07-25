// 平滑滚动效果（点击导航跳转到对应区域）
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 页面加载时的淡入效果
window.addEventListener('load', () => {
    document.body.style.opacity = 0;
    let opacity = 0;
    const timer = setInterval(() => {
        if (opacity >= 1) {
            clearInterval(timer);
        }
        document.body.style.opacity = opacity;
        opacity += 0.1;
    }, 50);
});
