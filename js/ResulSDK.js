document.addEventListener("DOMContentLoaded", () => {
    console.log("Resulconfig Loaded SuccessFully", window.location.pathname);

    let ele = document.querySelectorAll("script[src$='.sdk']");
    if (ele.length) {
        ele.forEach((item) => item.remove());
    }

    const script = document.createElement("script");

    script.setAttribute("defer", "defer");
    script.setAttribute("fcm_service_path", "firebase-messaging-sw.js?v=0.5.0");

    // Custom metadata
    script.setAttribute(
        "data-unique-id",
        JSON.stringify({
            Tenant: "Tenant001",
            DeptID: "Dept001"
        })
    );

    script.src =
        "https://sdk.resul.team/handlers/2f533ec9fd6348ae874877a03f155409.sdk";

    document.head.appendChild(script);
});