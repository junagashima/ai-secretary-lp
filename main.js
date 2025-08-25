// main.js - エントリーポイント
console.log('Hello World from Vite!');
console.log('Phase 1: 基盤構築完了');

// ページ読み込み確認
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded');
    console.log('All systems operational');
    
    // エラーチェック
    const errors = [];
    
    // 必須要素の存在確認
    const requiredElements = [
        '.header',
        '.hero',
        '.main',
        '.footer'
    ];
    
    requiredElements.forEach(selector => {
        const element = document.querySelector(selector);
        if (!element) {
            errors.push(`Required element not found: ${selector}`);
        }
    });
    
    if (errors.length === 0) {
        console.log('✅ No errors detected');
        console.log('✅ Ready for deployment');
    } else {
        console.error('❌ Errors found:', errors);
    }
});