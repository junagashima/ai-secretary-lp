// 追尾CTAの表示制御
document.addEventListener('DOMContentLoaded', function() {
    const floatingCta = document.getElementById('floatingCta');
    const heroSection = document.querySelector('.hero');
    const ctaSection = document.getElementById('contact');
    
    function toggleFloatingCta() {
        if (!floatingCta || !heroSection || !ctaSection) return;
        
        const heroRect = heroSection.getBoundingClientRect();
        const ctaRect = ctaSection.getBoundingClientRect();
        
        // ヒーローセクションを通り過ぎ、かつCTAセクションに到達していない場合に表示
        if (heroRect.bottom < 0 && ctaRect.top > window.innerHeight) {
            floatingCta.classList.add('show');
        } else {
            floatingCta.classList.remove('show');
        }
    }
    
    // スクロール時の処理
    window.addEventListener('scroll', toggleFloatingCta);
    
    // 初期チェック
    toggleFloatingCta();
    
    // 追尾CTAクリック時の動作
    if (floatingCta) {
        floatingCta.addEventListener('click', function(e) {
            e.preventDefault();
            // お問い合わせセクションにスムーズスクロール
            ctaSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
    
    // ナビゲーションのスムーズスクロール
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});