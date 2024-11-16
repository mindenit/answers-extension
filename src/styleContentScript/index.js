function applyCustomStyles() {
    // Remove any existing custom styles first
    const existingStylesheet = document.querySelector('#custom-override-styles');
    if (existingStylesheet) {
        existingStylesheet.remove();
    }

    // Create and inject main stylesheet
    const stylesheet = document.createElement('link');
    stylesheet.rel = 'stylesheet';
    stylesheet.id = 'custom-override-styles';
    stylesheet.href = chrome.runtime.getURL('styles.css');
    document.head.appendChild(stylesheet);

    // Create and inject immediate style overrides
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
    `;
    document.head.appendChild(styleOverrides);

    // Remove unwanted elements
    const elementsToRemove = [
        '#section-1',
        '#site-news-forum',
        '.supportemail',
        '.btn-footer-popover'
    ];

    elementsToRemove.forEach(selector => {
        const element = document.querySelector(selector);
        if (element) element.remove();
    });

    // Remove bg-white classes
    function removeBackgroundWhite() {
        document.querySelectorAll('.bg-white, .card-footer.dashboard-card-footer')
            .forEach(element => {
                element.classList.remove('bg-white');
            });
    }

    // Set up observer for dynamic content
    const observer = new MutationObserver((mutations) => {
        removeBackgroundWhite();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['class']
    });

    // Initial cleanup
    removeBackgroundWhite();

    // Handle late-loading content
    window.addEventListener('load', () => {
        removeBackgroundWhite();
        setTimeout(removeBackgroundWhite, 2000);
    });
}

// Message listener for toggle
chrome.runtime.onMessage.addListener((message) => {
    if (message.type === 'TOGGLE_EXPERIMENTAL_STYLES') {
        if (message.enabled) {
            applyCustomStyles();
        } else {
            // Clean up styles when disabled
            document.querySelector('#custom-override-styles')?.remove();
            document.querySelector('#critical-style-overrides')?.remove();
        }
    }
});

// Initial check on load
chrome.storage.sync.get(['toggleStates'], (result) => {
    console.log('Toggle states:', result);
    if (result.toggleStates?.experimentalStyles) {
        applyCustomStyles();
    }
});