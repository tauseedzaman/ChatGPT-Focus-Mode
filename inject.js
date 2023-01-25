// function that copies text to clipboard
function copy_text(text) {
    navigator.clipboard.writeText(text)
};


// add copy button to chat GPT answers

// after change this works
let first_check = document.querySelectorAll("#__next > div.overflow-hidden.w-full.h-full.relative > div.flex.h-full.flex-1.flex-col.md\\:pl-\\[260px\\] > main > div.flex-1.overflow-hidden > div > div > div > div:nth-child(even)")

// // at the first try this works
let second_check = document.querySelectorAll("#__next > div.overflow-hidden.w-full.h-full.relative > div.flex.h-full.flex-1.flex-col.md\\:pl-\\[260px\\] > main > div.flex-1.overflow-hidden > div > div > div:nth-child(even)")
let answers = document.querySelectorAll("#__next > div.overflow-hidden.w-full.h-full.relative > div.flex.h-full.flex-1.flex-col.md\\:pl-\\[260px\\] > main > div.flex-1.overflow-hidden > div > div > div:nth-child(even)")

if (first_check.length > 0) {
    answers = first_check
} else if (second_check.length > 0) {
    answers = second_check
}

if (answers.length > 0) {
    answers.forEach((answer) => {

        // copy everything that is insite this selector
        let ans_text = answer.querySelector("div.flex.flex-grow.flex-col.gap-3 > div > div").textContent

        const newButton = document.createElement("button");

        newButton.addEventListener("click", copy_text(ans_text));
        newButton.innerHTML = '<?xml version="1.0" encoding="utf-8"?><svg fill="#000000" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve"><g id="Text-files"><path d="M53.9791489,9.1429005H50.010849c-0.0826988,0-0.1562004,0.0283995-0.2331009,0.0469999V5.0228C49.7777481,2.253,47.4731483,0,44.6398468,0h-34.422596C7.3839517,0,5.0793519,2.253,5.0793519,5.0228v46.8432999c0,2.7697983,2.3045998,5.0228004,5.1378999,5.0228004h6.0367002v2.2678986C16.253952,61.8274002,18.4702511,64,21.1954517,64h32.783699c2.7252007,0,4.9414978-2.1725998,4.9414978-4.8432007V13.9861002C58.9206467,11.3155003,56.7043495,9.1429005,53.9791489,9.1429005z M7.1110516,51.8661003V5.0228c0-1.6487999,1.3938999-2.9909999,3.1062002-2.9909999h34.422596c1.7123032,0,3.1062012,1.3422,3.1062012,2.9909999v46.8432999c0,1.6487999-1.393898,2.9911003-3.1062012,2.9911003h-34.422596C8.5049515,54.8572006,7.1110516,53.5149002,7.1110516,51.8661003zM56.8888474,59.1567993c0,1.550602-1.3055,2.8115005-2.9096985,2.8115005h-32.783699c-1.6042004,0-2.9097996-1.2608986-2.9097996-2.8115005v-2.2678986h26.3541946c2.8333015,0,5.1379013-2.2530022,5.1379013-5.0228004V11.1275997c0.0769005,0.0186005,0.1504021,0.0469999,0.2331009,0.0469999h3.9682999c1.6041985,0,2.9096985,1.2609005,2.9096985,2.8115005V59.1567993z"/><path d="M38.6031494,13.2063999H16.253952c-0.5615005,0-1.0159006,0.4542999-1.0159006,1.0158005c0,0.5615997,0.4544001,1.0158997,1.0159006,1.0158997h22.3491974c0.5615005,0,1.0158997-0.4542999,1.0158997-1.0158997C39.6190491,13.6606998,39.16465,13.2063999,38.6031494,13.2063999z"/><path d="M38.6031494,21.3334007H16.253952c-0.5615005,0-1.0159006,0.4542999-1.0159006,1.0157986c0,0.5615005,0.4544001,1.0159016,1.0159006,1.0159016h22.3491974c0.5615005,0,1.0158997-0.454401,1.0158997-1.0159016C39.6190491,21.7877007,39.16465,21.3334007,38.6031494,21.3334007z"/><path d="M38.6031494,29.4603004H16.253952c-0.5615005,0-1.0159006,0.4543991-1.0159006,1.0158997s0.4544001,1.0158997,1.0159006,1.0158997h22.3491974c0.5615005,0,1.0158997-0.4543991,1.0158997-1.0158997S39.16465,29.4603004,38.6031494,29.4603004z"/><path d="M28.4444485,37.5872993H16.253952c-0.5615005,0-1.0159006,0.4543991-1.0159006,1.0158997s0.4544001,1.0158997,1.0159006,1.0158997h12.1904964c0.5615025,0,1.0158005-0.4543991,1.0158005-1.0158997S29.0059509,37.5872993,28.4444485,37.5872993z"/></g></svg>';
        newButton.classList.add("new-button-class");
        newButton.setAttribute("title", "Copy Answer")
        answer.querySelector(".text-gray-400, .flex, .self-end").querySelector("div.text-gray-400.flex.self-end.lg\\:self-center.justify-center.mt-2.gap-4.lg\\:gap-1.lg\\:absolute.lg\\:top-0.lg\\:translate-x-full.lg\\:right-0.lg\\:mt-0.lg\\:pl-2.visible").innerHTML = ""
        answer.querySelector(".text-gray-400, .flex, .self-end").querySelector("div.text-gray-400.flex.self-end.lg\\:self-center.justify-center.mt-2.gap-4.lg\\:gap-1.lg\\:absolute.lg\\:top-0.lg\\:translate-x-full.lg\\:right-0.lg\\:mt-0.lg\\:pl-2.visible").appendChild(newButton);
    })
}



// document.querySelector("div.text-gray-400.flex.self-end.lg\\:self-center.justify-center.mt-2.gap-4.lg\\:gap-1.lg\\:absolute.lg\\:top-0.lg\\:translate-x-full.lg\\:right-0.lg\\:mt-0.lg\\:pl-2.visible")

//##########################################################################################################
// remove / add some classes to remove side bar and set chat to 100% weigth
if (document.querySelector("#__next > div.overflow-hidden.w-full.h-full.relative > div.dark.hidden.bg-gray-900.md\\:fixed.md\\:inset-y-0.md\\:flex.md\\:w-\\[260px\\].md\\:flex-col > div > div")) {
    document.querySelector("#__next > div.overflow-hidden.w-full.h-full.relative > div.dark.hidden.bg-gray-900.md\\:fixed.md\\:inset-y-0.md\\:flex.md\\:w-\\[260px\\].md\\:flex-col > div > div").className = "hidden";
} else {
    document.querySelector("#__next > div.overflow-scrolle.w-full.h-full.relative > div:nth-child(2) > div > div").className = "scrollbar-trigger flex h-full w-full flex-1 items-start border-white/20";
}

if (document.querySelector("#__next > div.overflow-hidden.w-full.h-full.relative > div.dark.hidden.bg-gray-900.md\\:fixed.md\\:inset-y-0.md\\:flex.md\\:w-\\[260px\\].md\\:flex-col > div")) {
    document.querySelector("#__next > div.overflow-hidden.w-full.h-full.relative > div.dark.hidden.bg-gray-900.md\\:fixed.md\\:inset-y-0.md\\:flex.md\\:w-\\[260px\\].md\\:flex-col > div").className = "";
} else {
    document.querySelector("#__next > div.overflow-scrolle.w-full.h-full.relative > div:nth-child(2) > div").className = "flex h-full min-h-0 flex-col ";
}

if (document.querySelector("#__next > div.overflow-hidden.w-full.h-full.relative > div.dark.hidden.bg-gray-900.md\\:fixed.md\\:inset-y-0.md\\:flex.md\\:w-\\[260px\\].md\\:flex-col")) {
    document.querySelector("#__next > div.overflow-hidden.w-full.h-full.relative > div.dark.hidden.bg-gray-900.md\\:fixed.md\\:inset-y-0.md\\:flex.md\\:w-\\[260px\\].md\\:flex-col").className = "";
} else {
    document.querySelector("#__next > div.overflow-scrolle.w-full.h-full.relative > div:nth-child(2)").className = "dark hidden bg-gray-900 md:fixed md:inset-y-0 md:flex md:w-[260px] md:flex-col";

}

if (document.querySelector("#__next > div.overflow-hidden.w-full.h-full.relative > div.flex.h-full.flex-1.flex-col.md\\:pl-\\[260px\\]")) {
    document.querySelector("#__next > div.overflow-hidden.w-full.h-full.relative > div.flex.h-full.flex-1.flex-col.md\\:pl-\\[260px\\]").className = "";
} else {
    document.querySelector("#__next > div.overflow-scrolle.w-full.h-full.relative > div:nth-child(1)").className = "flex h-full flex-1 flex-col md:pl-[260px]";

}

if (document.querySelector("#__next > div.overflow-hidden.w-full.h-full.relative")) {
    document.querySelector("#__next > div.overflow-hidden.w-full.h-full.relative").className = "overflow-scrolle w-full h-full relative"
} else {
    document.querySelector("#__next > div.overflow-scrolle.w-full.h-full.relative").className = "overflow-hidden w-full h-full relative"

}