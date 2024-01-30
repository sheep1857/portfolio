   $(function() {
    $('.header__right__hamburger').click(function() {
        // ハンバーガーアイコンに 'is-open' クラスをトグル
        $(this).toggleClass('is-open');
        // メニューの表示/非表示をトグル
        $('.header__right__menu').slideToggle(200);
        // 'main' 要素に暗くするためのクラスをトグル
        $('main').toggleClass('darkened');
    });

    $('#js-slider-3').slick({
        arrows: true, // 前・次のボタンを表示する
        autoplay: true, // 自動再生
        autoplaySpeed: 3000, // 再生速度（ミリ秒設定） 1000ミリ秒=1秒
        infinite: true, // 無限スライド
        dots: true, // ドットナビゲーションを表示する
        appendDots: $('.dots-3'), // ドットナビゲーションの生成位置を変更
        speed: 1000, // スライドさせるスピード（ミリ秒）
        slidesToShow: 1, // 表示させるスライド数
        centerMode: true, // slidesToShowが奇数のとき、現在のスライドを中央に表示する
        variableWidth: true, // スライド幅の自動計算を無効化
      });

      //モーダル表示
	$(".modal-open").modaal({
        overlay_close:true,//モーダル背景クリック時に閉じるか
        before_open:function(){// モーダルが開く前に行う動作
            $('html').css('overflow-y','hidden');/*縦スクロールバーを出さない*/
        },
        after_close:function(){// モーダルが閉じた後に行う動作
            $('html').css('overflow-y','scroll');/*縦スクロールバーを出す*/
        }
    });
});

// プレミア
const premireShape = document.querySelector(".premire");
premireShape.style.backgroundImage = 'conic-gradient(#FCE700 0deg, transparent 0deg)';
let prangle = 0;

function drawPremireCircle(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting && prangle < 225) {
            prangle += 4;
            premireShape.style.backgroundImage = `conic-gradient(#FCE700 ${prangle}deg, transparent ${prangle}deg)`;
            requestAnimationFrame(() => drawPremireCircle(entries, observer));
        } else if (prangle >= 225) {
            console.log("Premireアニメーションが終了しました");
            observer.disconnect(); // アニメーションが終了したらObserverを切断する
        }
    });
}

const premireObserver = new IntersectionObserver(drawPremireCircle, { threshold: 0.5 });
// 要素をObserverに登録
premireObserver.observe(premireShape);


// フォトショ
const photoshopShape = document.querySelector(".photoshop");
photoshopShape.style.backgroundImage = 'conic-gradient(#FCE700 0deg, transparent 0deg)';
let psangle = 0;

function drawPhotoshopCircle(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting && psangle < 270) {
            psangle += 4;
            photoshopShape.style.backgroundImage = `conic-gradient(#FCE700 ${psangle}deg, transparent ${psangle}deg)`;
            requestAnimationFrame(() => drawPhotoshopCircle(entries, observer));
        } else if (psangle >= 270) {
            console.log("Photoshopアニメーションが終了しました");
            observer.disconnect(); // アニメーションが終了したらObserverを切断する
        }
    });
}

const photoshopObserver = new IntersectionObserver(drawPhotoshopCircle, { threshold: 0.5 });
photoshopObserver.observe(photoshopShape);


// エーイー
const aftereffectShape = document.querySelector(".aftereffect");
aftereffectShape.style.backgroundImage = 'conic-gradient(#FCE700 0deg, transparent 0deg)';
let aeangle = 0;

function drawAftereffectCircle(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting && aeangle < 300) {
            aeangle += 4;
            aftereffectShape.style.backgroundImage = `conic-gradient(#FCE700 ${aeangle}deg, transparent ${aeangle}deg)`;
            requestAnimationFrame(() => drawAftereffectCircle(entries, observer));
        } else if (aeangle >= 300) {
            console.log("Aftereffectアニメーションが終了しました");
            observer.disconnect(); // アニメーションが終了したらObserverを切断する
        }
    });
}

const aftereffectObserver = new IntersectionObserver(drawAftereffectCircle, { threshold: 0.5 });
aftereffectObserver.observe(aftereffectShape);


// イラレ
const illustratorShape = document.querySelector(".illustrator");
illustratorShape.style.backgroundImage = 'conic-gradient(#FCE700 0deg, transparent 0deg)';
let aiangle = 0;

function drawIllustratorCircle(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting && aiangle < 360) {
            aiangle += 4;
            illustratorShape.style.backgroundImage = `conic-gradient(#FCE700 ${aiangle}deg, transparent ${aiangle}deg)`;
            requestAnimationFrame(() => drawIllustratorCircle(entries, observer));
        } else if (aiangle >= 360) {
            console.log("Illustratorアニメーションが終了しました");
            observer.disconnect(); // アニメーションが終了したらObserverを切断する
        }
    });
}

const illustratorObserver = new IntersectionObserver(drawIllustratorCircle, { threshold: 0.2 });
illustratorObserver.observe(illustratorShape);


// VSコード
const vscodeShape = document.querySelector(".vscode");
vscodeShape.style.backgroundImage = 'conic-gradient(#FCE700 0deg, transparent 0deg)';
let vsangle = 0;

function drawVscodeCircle(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting && vsangle < 280) {
            vsangle += 4;
            vscodeShape.style.backgroundImage = `conic-gradient(#FCE700 ${vsangle}deg, transparent ${vsangle}deg)`;
            requestAnimationFrame(() => drawVscodeCircle(entries, observer));
        } else if (vsangle >= 280) {
            console.log("vscodeアニメーションが終了しました");
            observer.disconnect(); // アニメーションが終了したらObserverを切断する
        }
    });
}

const vscodeObserver = new IntersectionObserver(drawVscodeCircle, { threshold: 0.5 });
vscodeObserver.observe(vscodeShape);


// Figma
const figmaShape = document.querySelector(".figma");
figmaShape.style.backgroundImage = 'conic-gradient(#FCE700 0deg, transparent 0deg)';
let fiangle = 0;

function drawFigmaCircle(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting && fiangle < 310) {
            fiangle += 4;
            figmaShape.style.backgroundImage = `conic-gradient(#FCE700 ${fiangle}deg, transparent ${fiangle}deg)`;
            requestAnimationFrame(() => drawFigmaCircle(entries, observer));
        } else if (fiangle >= 310) {
            console.log("figmaアニメーションが終了しました");
            observer.disconnect(); // アニメーションが終了したらObserverを切断する
        }
    });
}

const figmaObserver = new IntersectionObserver(drawFigmaCircle, { threshold: 0.5 });
figmaObserver.observe(figmaShape);


// davinci
const davinciShape = document.querySelector(".davinci");
davinciShape.style.backgroundImage = 'conic-gradient(#FCE700 0deg, transparent 0deg)';
let daangle = 0;

function drawDavinciCircle(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting && daangle < 120) {
            daangle += 4;
            davinciShape.style.backgroundImage = `conic-gradient(#FCE700 ${daangle}deg, transparent ${daangle}deg)`;
            requestAnimationFrame(() => drawDavinciCircle(entries, observer));
        } else if (daangle >= 120) {
            console.log("davinciアニメーションが終了しました");
            observer.disconnect(); // アニメーションが終了したらObserverを切断する
        }
    });
}

const davinciObserver = new IntersectionObserver(drawDavinciCircle, { threshold: 0.5 });
davinciObserver.observe(davinciShape);






