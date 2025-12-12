// ADVANCED JS: PRACTICE QUESTION
// ==============================

// Toast creator function
function CreateToster(config) {
    return function (notification) {

        // create toast element
        let div = document.createElement("div");

        // FIX: missing spaces, missing condition styles, broken string format
        div.className = `
            w-[35%]
            px-6 py-3
            text-sm
            text-center
            rounded shadow-lg
            mb-4
            pointer-events-none
            ${config.theme === "dark" ? "text-white bg-gray-800" : "text-black bg-gray-200"}
            ${config.positionX === "right" ? "right-10" : "left-10"}
            ${config.positionY === "top" ? "top-10" : "bottom-10"}
        `;

        div.textContent = notification;

        // ❌ WRONG: document.appendChild(toaster)
        // ✔️ RIGHT: append the toast div to the document body
        document.body.appendChild(div);

        // remove toast after duration
        setTimeout(() => {
            document.body.removeChild(div);
        }, config.duration * 1000);
    };
}

// create toaster instance with custom config
let toaster = CreateToster({
    positionX: "left",
    positionY: "bottom",
    theme: "light",
    duration: 3,
});

// trigger toast
setTimeout(() => {
    toaster("Hello World!");
}, 1000);
setTimeout(() => {
    toaster("✅request sent✅");
},3000)













































