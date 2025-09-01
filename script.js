document.addEventListener('DOMContentLoaded', () => {
    // -----------------------------------------------------
    // 1. Локализация (Localization)
    // -----------------------------------------------------
    const translations = {
        'ru': {
            page_title: 'ArtemkaLanguage - Нейросети Будущего',
            nav_features: 'Особенности',
            nav_syntax: 'Синтаксис',
            nav_download: 'Скачать',
            hero_title: 'ArtemkaLanguage',
            hero_subtitle: 'Ваш код, нейросети будущего. Создан для AI/ML.',
            hero_cta: 'Скачать v1.0',
            features_heading: 'Почему ArtemkaLanguage для Нейросетей?',
            feature1_title: 'Оптимизирован для AI',
            feature1_text: 'Специально разработанные библиотеки для эффективного обучения и развертывания нейронных сетей.',
            feature2_title: 'Высокая скорость',
            feature2_text: 'Компиляция в нативный код обеспечивает максимальную производительность для сложных вычислений.',
            feature3_title: 'Интуитивный синтаксис',
            feature3_text: 'Пишите меньше кода, выражайте больше. Идеально для быстрого прототипирования AI моделей.',
            syntax_heading: 'Пример нейронной сети',
            syntax_text: 'Простой пример создания и обучения мини-нейросети на ArtemkaLanguage:',
            copy_button: 'Копировать',
            download_heading: 'Готовы к созданию AI?',
            download_text: 'Загрузите ArtemkaLanguage для Windows и начните свои проекты.',
            download_win: 'Windows',
            footer_created: 'Создано с мыслями о будущем AI.'
        },
        'en': {
            page_title: 'ArtemkaLanguage - Neural Networks of the Future',
            nav_features: 'Features',
            nav_syntax: 'Syntax',
            nav_download: 'Download',
            hero_title: 'ArtemkaLanguage',
            hero_subtitle: 'Your code, future neural networks. Built for AI/ML.',
            hero_cta: 'Download v1.0',
            features_heading: 'Why ArtemkaLanguage for Neural Networks?',
            feature1_title: 'Optimized for AI',
            feature1_text: 'Specially designed libraries for efficient training and deployment of neural networks.',
            feature2_title: 'High Speed',
            feature2_text: 'Compilation to native code ensures maximum performance for complex computations.',
            feature3_title: 'Intuitive Syntax',
            feature3_text: 'Write less code, express more. Ideal for rapid AI model prototyping.',
            syntax_heading: 'Neural Network Example',
            syntax_text: 'A simple example of creating and training a mini neural network in ArtemkaLanguage:',
            copy_button: 'Copy',
            download_heading: 'Ready to build AI?',
            download_text: 'Download ArtemkaLanguage for Windows and start your projects.',
            download_win: 'Windows',
            footer_created: 'Created with the future of AI in mind.'
        }
    };

    const langSwitcherButtons = document.querySelectorAll('.lang-switcher button');
    let currentLang = localStorage.getItem('lang') || 'ru';

    function applyTranslations(lang) {
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName === 'TITLE') {
                    document.title = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });
        langSwitcherButtons.forEach(button => {
            button.classList.toggle('active', button.dataset.lang === lang);
        });
    }

    applyTranslations(currentLang);

    langSwitcherButtons.forEach(button => {
        button.addEventListener('click', () => {
            const newLang = button.dataset.lang;
            if (newLang !== currentLang) {
                currentLang = newLang;
                localStorage.setItem('lang', newLang);
                applyTranslations(newLang);
            }
        });
    });

    // -----------------------------------------------------
    // 2. Плавный скролл по якорям
    // -----------------------------------------------------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // -----------------------------------------------------
    // 3. Функция копирования кода в буфер обмена
    // -----------------------------------------------------
    const copyButton = document.getElementById('copy-button');
    const codeSnippet = document.getElementById('code-snippet');

    if (copyButton && codeSnippet) {
        copyButton.addEventListener('click', () => {
            const codeText = codeSnippet.innerText;
            navigator.clipboard.writeText(codeText).then(() => {
                const originalText = translations[currentLang]['copy_button'];
                copyButton.innerText = 'Скопировано!';
                setTimeout(() => {
                    copyButton.innerText = originalText;
                }, 2000);
            }).catch(err => {
                console.error('Не удалось скопировать текст: ', err);
            });
        });
    }

    // -----------------------------------------------------
    // 4. Эффект параллакса для Hero Section
    // -----------------------------------------------------
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
        window.addEventListener('scroll', () => {
            const scrollPosition = window.pageYOffset;
            heroBg.style.transform = 'translateY(' + scrollPosition * 0.4 + 'px)';
        });
    }
});