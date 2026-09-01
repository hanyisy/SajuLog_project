(function () {
    const paymentCopy = {
        
        title: "두 사람의 앞날을 미리 안다면,\n인연을 대하는 마음도 달라질 걸세.",
        
        products: [
            {
                title: "월하와 화연의 정통궁합",
                description: "우리 사이의 진짜 궁합을 읽다",
                price: "2,900원",
                // 260901 첫 궁합 상품 선택 이미지
                image: "resources/img/product/ex04.webp"
            },
            {
                title: "월하와 화연의 미래궁합",
                description: "두 사람의 인연은 어디까지 이어질까",
                price: "12,900원",
                available: false
            },
            {
                title: "월하와 화연의 궁합패키지",
                description: "지금의 궁합부터 인연의 미래까지",
                price: "9,900원",
                available: false
            }
        ]
        
    };

    function applyPaymentCopy(container) {
        const modal = container.querySelector("#paymentModal");
        if (!modal) return false;

        const title = modal.querySelector(".js_payment_title");
        if (title) {
            const [firstLine, secondLine] = paymentCopy.title.split("\n");
            const highlightedLine = document.createElement("span");
            highlightedLine.textContent = secondLine;
            highlightedLine.style.color = "#DDC49B";
            title.style.fontSize = "1.7em";
            highlightedLine.style.fontSize = "1em";
            
            title.replaceChildren(
                document.createTextNode(firstLine),
                document.createElement("br"),
                highlightedLine
            );
        }

        modal.querySelectorAll(".produc_choice_card").forEach((card, index) => {
            const product = paymentCopy.products[index];
            if (!product) return;

            const titleElement = card.querySelector(".produc_choice_card_L h2");
            const descriptionElement = card.querySelector(".produc_choice_card_L p");
            const priceElement = card.querySelector(".produc_choice_card_R h2");

            if (titleElement) titleElement.textContent = product.title;
            if (descriptionElement) descriptionElement.textContent = product.description;
            if (priceElement) priceElement.textContent = product.price;
            // 260901 궁합 상품 선택 이미지 전달
            if (product.image) card.dataset.image = product.image;

            if (product.available === false) {
                card.style.position = "relative";
                card.style.pointerEvents = "none";
                card.style.cursor = "not-allowed";
                card.setAttribute("aria-disabled", "true");

                const unavailableOverlay = document.createElement("div");
                unavailableOverlay.className = "js_match_product_unavailable";
                unavailableOverlay.textContent = "준비중";
                unavailableOverlay.style.position = "absolute";
                unavailableOverlay.style.inset = "0";
                unavailableOverlay.style.display = "flex";
                unavailableOverlay.style.alignItems = "center";
                unavailableOverlay.style.justifyContent = "center";
                unavailableOverlay.style.background = "rgba(0, 0, 0, .62)";
                unavailableOverlay.style.borderRadius = "0.5em";
                unavailableOverlay.style.backdropFilter = "blur(1px)";
                unavailableOverlay.style.webkitBackdropFilter = "blur(1px)";
                unavailableOverlay.style.color = "#DDC49B";
                unavailableOverlay.style.fontSize = "1.4em";
                unavailableOverlay.style.fontWeight = "700";

                unavailableOverlay.style.zIndex = "2";
                card.appendChild(unavailableOverlay);
            }
        });

        return true;
    }

    document.addEventListener("DOMContentLoaded", () => {
        const container = document.getElementById("paymentContainer");
        if (!container) return;

        const observer = new MutationObserver(() => {
            if (applyPaymentCopy(container)) observer.disconnect();
        });

        observer.observe(container, { childList: true });
        applyPaymentCopy(container);
    });
})();
