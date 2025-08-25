// ハンバーガーメニューとCTAの制御
document.addEventListener('DOMContentLoaded', function() {
    
    // ハンバーガーメニューの初期化
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    
    // メニュー開閉の処理
    function toggleMobileMenu() {
        mobileMenuToggle.classList.toggle('active');
        mobileMenuOverlay.classList.toggle('active');
        
        // body のスクロールを制御
        if (mobileMenuOverlay.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
    
    // メニューを閉じる処理
    function closeMobileMenu() {
        mobileMenuToggle.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // イベントリスナーの設定
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    }
    
    // モバイルメニューリンクのクリック処理
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            // メニューを閉じる
            closeMobileMenu();
            
            // スムーズスクロール
            if (targetElement) {
                setTimeout(() => {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }, 300); // メニューが閉じるアニメーションを待つ
            }
        });
    });
    
    // オーバーレイクリックで閉じる
    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', function(e) {
            if (e.target === mobileMenuOverlay) {
                closeMobileMenu();
            }
        });
    }
    
    // ESCキーで閉じる
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenuOverlay.classList.contains('active')) {
            closeMobileMenu();
        }
    });
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