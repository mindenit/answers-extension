function applyCustomStyles() {
    // Track if styles are currently being applied
    let isApplyingStyles = false;

    // Store reference to style element
    let styleElement = null;

    function createStyles() {
        if (styleElement) {
            return;
        }
        const styleOverrides = document.createElement('style');
        styleOverrides.id = 'critical-style-overrides';
        styleOverrides.textContent = `
            body {
                background-color: #fff !important;
                color: #000 !important;
            }
            body.moove-darkmode {
                background-color: #090f1f !important;
                color: #fff !important;
            }

            /* Heading styles */
            h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6,
            .path-calendar .maincalendar .calendar-controls .current,
            .course-content .single-section .sectionname,
            .course-content .section .sectionname,
            .course-content .section .sectionname a {
                color: #000 !important;
            }

            body.moove-darkmode h1, body.moove-darkmode h2,
            body.moove-darkmode h3, body.moove-darkmode h4,
            body.moove-darkmode h5, body.moove-darkmode h6,
            body.moove-darkmode .h1, body.moove-darkmode .h2,
            body.moove-darkmode .h3, body.moove-darkmode .h4,
            body.moove-darkmode .h5, body.moove-darkmode .h6,
            body.moove-darkmode .path-calendar .maincalendar .calendar-controls .current,
            body.moove-darkmode .course-content .single-section .sectionname,
            body.moove-darkmode .course-content .section .sectionname,
            body.moove-darkmode .course-content .section .sectionname a {
                color: #fff !important;
            }

            /* Link styles */
            a:not(.btn) {
                color: #000 !important;
            }
            body.moove-darkmode a:not(.btn) {
                color: #fff !important;
            }

            /* Button and courseindex styles */
            .courseindex .courseindex-item.pageitem,
            .btn-primary, .btn-link,
            .dashboard-card .dashboard-card-img .course-category {
                background-color: #6368f2 !important;
				margin-right: 10rem !important;
            }

			#page-container-5 > div > ul > li > div > div.col-md-1.p-0.d-flex.menu > div > button {
				margin-right: 10rem !important;
			}

            .courseindex .courseindex-item.pageitem *,
            .btn-primary *, .btn-link *,
            .dashboard-card .dashboard-card-img .course-category * {
                color: #fff !important;
            }

            /* Page and navigation styles */
            #page {
                background-color: #fff !important;
            }
            body.moove-darkmode #page {
                background-color: #090f1f !important;
            }

            .navbar, .secondary-navigation {
                background-color: #fff !important;
                border-bottom: 1px solid #cdd5e0 !important;
                box-shadow: none !important;
                filter: none !important;
            }
            body.moove-darkmode .navbar,
            body.moove-darkmode .secondary-navigation {
                background-color: #090f1f !important;
                border-bottom: 1px solid #485465 !important;
            }

            /* Navigation links */
            .navbar .primary-navigation .navigation .nav-link {
                color: #000 !important;
            }
            body.moove-darkmode .navbar .primary-navigation .navigation .nav-link {
                color: #fff !important;
            }
            .navbar .primary-navigation .navigation .nav-link.active {
                border-bottom: none !important;
            }
            body.moove-darkmode .navbar .primary-navigation .navigation .nav-link:hover {
                background-color: #111628 !important;
            }

            /* Main region styles */
            #region-main {
                background-color: transparent !important;
            }
            div[role='main'] {
                background-color: #f8f9fc !important;
                border-radius: 0.75rem;
            }
            body.moove-darkmode div[role='main'] {
                background-color: #111628 !important;
            }

            /* Drawer and icon styles */
            .drawer {
                background-color: #fff !important;
            }
            body.moove-darkmode .drawer {
                background-color: #090f1f !important;
            }
            .icon, .fa {
                color: #000 !important;
            }
            body.moove-darkmode .icon,
            body.moove-darkmode .fa {
                color: #fff !important;
            }

            /* Card styles */
            .card {
                background-color: #f8f9fc !important;
                border: 1px solid #cdd5e0;
            }
            body.moove-darkmode .card {
                background-color: #111628 !important;
                border: 1px solid #485465;
            }

            /* Activity styles */
            .activity {
                border-top: none !important;
            }
            .activity-item {
                background-color: transparent !important;
            }

            /* Footer styles */
            #page-footer {
                background-color: #fff !important;
                border-top: 1px solid #cdd5e0;
            }
            body.moove-darkmode #page-footer {
                background-color: #090f1f !important;
                border-top: 1px solid #485465;
            }

            /* Form and progress styles */
            .form-control {
                background-color: transparent !important;
            }
            .progress {
                background-color: #e1e8ef !important;
            }
            body.moove-darkmode .progress {
                background-color: #212a3b !important;
            }
            .progress-bar {
                background-color: #6368f2 !important;
            }

            /* Dropdown styles */
            body.moove-darkmode .dropdown-menu {
                background-color: #111628 !important;
                border: 1px solid #485465 !important;
                color: #f5f5f5;
            }
            body.moove-darkmode .dropdown-menu .dropdown-item {
                color: #f5f5f5 !important;
            }
            body.moove-darkmode .dropdown-menu .dropdown-item:hover {
                background-color: #0c1015;
            }
            body.moove-darkmode .dropdown-menu .dropdown-divider {
                border-color: #485465 !important;
            }

            /* Section styles */
            .section-item {
                border: 1px solid #cdd5e0 !important;
            }
            body.moove-darkmode .section-item {
                border: 1px solid #485465 !important;
            }
			
			list-group,
			#page-container-0 > div > div {
				display: flex !important;
				flex-direction: column !important;
				gap: 0.5rem !important;
			}

			.list-group li,
			#page-container-4 > div > div > div,
			#page-container-0 > div > div > div {
				width: 100% !important;
				border-radius: 1rem !important;
				background-color: #111628 !important;
				border: 1px solid #344050 !important;
			}

			.categoryname {
				color: #fff !important;
			}

			#page-container-0 > div > div > div > div > div.col-md-1.p-0.d-flex.menu > div > button {
				margin-left: 2rem !important;
			}
        `;
        document.head.appendChild(styleOverrides);
        styleElement = styleOverrides;
    }

    const removeBackgroundWhite = debounce(() => {
        if (isApplyingStyles) return;
        
        try {
            isApplyingStyles = true;
            const elements = document.querySelectorAll('.bg-white, .card-footer.dashboard-card-footer');
            if (elements.length === 0) return;

            elements.forEach(element => {
                element.classList.remove('bg-white');
            });
        } finally {
            isApplyingStyles = false;
        }
    }, 100);

    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Optimized observer
    let observer;
    function setupObserver() {
        if (observer) {
            observer.disconnect();
        }

        observer = new MutationObserver((mutations) => {
            let shouldUpdate = false;
            
            for (const mutation of mutations) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class' ||
                    mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                    shouldUpdate = true;
                    break;
                }
            }

            if (shouldUpdate) {
                removeBackgroundWhite();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['class']
        });
    }

    function cleanup() {
        if (observer) {
            observer.disconnect();
        }
        if (styleElement) {
            styleElement.remove();
            styleElement = null;
        }
    }

    function init() {
        cleanup();
        createStyles();
        removeBackgroundWhite();
        setupObserver();

        const elementsToRemove = [
            '#site-news-forum',
            '.supportemail',
            '.btn-footer-popover',
        ];

        elementsToRemove.forEach(selector => {
            const element = document.querySelector(selector);
            if (element) element.remove();
        });
    }

    init();

    if (document.readyState === 'loading') {
        window.addEventListener('DOMContentLoaded', init);
    }

    window.addEventListener('load', () => {
        removeBackgroundWhite();
        setTimeout(removeBackgroundWhite, 1000);
    });

    return cleanup;
}

let cleanup = null;

chrome.runtime.onMessage.addListener((message) => {
    if (message.type === 'TOGGLE_EXPERIMENTAL_STYLES') {
        if (message.enabled) {
            cleanup = applyCustomStyles();
        } else {
            if (cleanup) {
                cleanup();
                cleanup = null;
            }
        }
    }
});

chrome.storage.sync.get(['toggleStates'], (result) => {
    console.log('Toggle states:', result);
    if (result.toggleStates?.experimentalStyles) {
        cleanup = applyCustomStyles();
    }
});