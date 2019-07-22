export function selectTab(tabId) {
    return {
        type: 'TAB_SELECT',
        payload: tabId
    }
}

export function showTabs(...tabIds) {
    const tabsToShow = {};
    tabIds.forEach(e => tabsToShow[e] = true);
    return {
        type: 'TAB_SHOWING',
        payload: tabsToShow
    }

}