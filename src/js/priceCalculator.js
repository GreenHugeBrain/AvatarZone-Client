document.addEventListener('DOMContentLoaded', function() {
    const plans = ['basic', 'standard', 'premium', 'pro'];
    const monthlyPrices = {
        basic: 50,     // Basic-ის თვიური ფასი
        standard: 250, // Standard-ის თვიური ფასი
        premium: 400,  // Premium-ის თვიური ფასი
        pro: 550       // Pro-ის თვიური ფასი
    };

    plans.forEach(plan => {
        const slider = document.getElementById(`${plan}-days`);
        const priceDisplay = document.getElementById(`${plan}-price`);
        const daysDisplay = document.createElement("p");
        daysDisplay.id = `${plan}-days-display`;
        daysDisplay.className = "days-display text-light";
        slider.parentNode.insertBefore(daysDisplay, slider.nextSibling);

        slider.addEventListener('input', function() {
            const days = this.value;
            const monthlyPrice = monthlyPrices[plan];
            const pricePerDay = monthlyPrice / 30; // დღიური ფასი თვიური ფასიდან
            const totalPrice = Math.round(days * pricePerDay); // მთლიანი ფასი
            priceDisplay.textContent = `${totalPrice} GEL`;
            daysDisplay.textContent = `${days} დღე`;
        });

        // განახლება საწყისი მნიშვნელობებით
        const initialDays = slider.value;
        const monthlyPrice = monthlyPrices[plan];
        const pricePerDay = monthlyPrice / 30;
        const initialPrice = Math.round(initialDays * pricePerDay);
        priceDisplay.textContent = `${initialPrice} GEL`;
        daysDisplay.textContent = `${initialDays} დღე`;
    });
});
