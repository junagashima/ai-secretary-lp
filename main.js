// main.js - エントリーポイント
console.log('AI Business Session LP - Phase 2');

// ページ読み込み確認
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded');
    
    // スムーズスクロール
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ヘッダーのスクロール制御
    let lastScroll = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
        } else {
            header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        }
        
        lastScroll = currentScroll;
    });

    // フォーム仮実装（Formrun連携準備）
    const ctaButtons = document.querySelectorAll('.btn-primary');
    ctaButtons.forEach(button => {
        if (button.textContent.includes('申し込む') || button.textContent.includes('相談')) {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('フォーム連携準備中...');
                alert('お問い合わせフォームは準備中です。Phase 4で実装予定です。');
            });
        }
    });

    // エラーチェック
    const errors = [];
    
    // 必須要素の存在確認
    const requiredElements = [
        '.header',
        '.hero',
        '.section.challenge',
        '.section.service',
        '.section.benefits',
        '.section.curriculum',
        '.section.pricing',
        '.section.instructor',
        '.section.faq',
        '.section.cta',
        '.footer'
    ];
    
    requiredElements.forEach(selector => {
        const element = document.querySelector(selector);
        if (!element) {
            errors.push(`Required element not found: ${selector}`);
        }
    });
    
    if (errors.length === 0) {
        console.log('✅ Phase 2 - All sections loaded successfully');
        console.log('✅ No errors detected');
        console.log('✅ Ready for Phase 3');
    } else {
        console.error('❌ Errors found:', errors);
    }

    // コンテンツ確認
    console.log('📊 Content Status:');
    console.log('- Sections: ', document.querySelectorAll('.section').length);
    console.log('- Service cards: ', document.querySelectorAll('.service-card').length);
    console.log('- Pricing plans: ', document.querySelectorAll('.pricing-card').length);
    console.log('- FAQ items: ', document.querySelectorAll('.faq-item').length);
});