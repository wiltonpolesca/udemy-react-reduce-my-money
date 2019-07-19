export function selectTab(tabId) {
    return {
        type: 'TAB_SELECT',
        payload: tabId
    }
}

export function showTabs(...tabIds) {
    const tabToShow = {};
    tabIds.forEach(e => tabToShow[e] = true);
    return {
        type: 'TAB_SHOWING',
        payload: tabToShow
    }

}