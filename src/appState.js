class AppState {
    currentCategory = 'Architecture';

    getCurrentCategory() {
        return this.currentCategory;
    }

    setCurrentCategory(category) {
        this.currentCategory = category;
    }
}

export const APP_STATE = new AppState();
