chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
        text: "OFF",
    });
});

const ChatGPT = 'https://chat.openai.com/chat'

// When the user clicks on the extension action
chrome.action.onClicked.addListener(async(tab) => {
    if (tab.url.startsWith(ChatGPT)) {
        // We retrieve the action badge to check if the extension is 'ON' or 'OFF'
        const prevState = await chrome.action.getBadgeText({
            tabId: tab.id
        });
        // Next state will always be the opposite
        const nextState = prevState === 'ON' ? 'OFF' : 'ON'

        // Set the action badge to the next state
        await chrome.action.setBadgeText({
            tabId: tab.id,
            text: nextState,
        });

        if (nextState === "ON" || nextState === "OFF") {
            chrome.scripting.executeScript({
                files: ["inject.js"],
                target: {
                    tabId: tab.id
                },
            });

        }
    }
    // // after change this works
    // document.querySelectorAll("#__next > div.overflow-hidden.w-full.h-full.relative > div.flex.h-full.flex-1.flex-col.md\\:pl-\\[260px\\] > main > div.flex-1.overflow-hidden > div > div > div > div:nth-child(even)")

    // // at the first try this works
    // document.querySelectorAll("#__next > div.overflow-hidden.w-full.h-full.relative > div.flex.h-full.flex-1.flex-col.md\\:pl-\\[260px\\] > main > div.flex-1.overflow-hidden > div > div > div:nth-child(even)")



    // document.getElementsByTagName("textarea")[0].addEventListener("keyup", function(event) {
    //     if (event.keyCode === 13) {
    //       console.log("Enter key was pressed!");
    //       // call your function here
    //     }
    //   });
});