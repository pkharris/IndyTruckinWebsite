window.themeInterop = {
    storageKey: 'indytruckin-theme',

    getPreferredTheme() {
        const stored = localStorage.getItem(this.storageKey);
        if (stored === 'light' || stored === 'dark') {
            return stored;
        }

        return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    },

    getTheme() {
        return document.documentElement.getAttribute('data-theme') || this.getPreferredTheme();
    },

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        document.documentElement.style.colorScheme = theme;
    },

    saveTheme(theme) {
        localStorage.setItem(this.storageKey, theme);
    }
};