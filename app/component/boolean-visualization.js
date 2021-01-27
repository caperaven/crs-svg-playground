/**
 * Note:
 * trueValue and falseValue is set before the component is ready.
 * load starts the draw as the component is loaded and ready for drawing updates.
 * the setters also update the calculate so that if you make changes to the values it will update.
 */
class BooleanVisualization extends crsbinding.classes.BindableElement {
    /**
     * Show how to load svg content as the component content instead of a html file
     * @returns {string}
     */
    get html() {
        return import.meta.url.replace(".js", ".svg");
    }

    get trueValue() {
        return this.getProperty("trueValue");
    }

    set trueValue(newValue) {
        this.setProperty("trueValue", newValue);
        this.calculate().catch(e => console.error(e));
    }

    get falseValue() {
        return this.getProperty("falseValue");
    }

    set falseValue(newValue) {
        this.setProperty("falseValue", newValue);
        this.calculate().catch(e => console.error(e));
    }

    /**
     * Component is ready, update the graphics
     */
    load() {
        this.calculate().catch(e => console.error(e));
    }

    /**
     * Calculate layout values
     * @returns {Promise<void>}
     */
    async calculate() {
        const trueValue = this.getProperty("trueValue");
        const falseValue = this.getProperty("falseValue");

        if (trueValue == null || falseValue == null) return;

        const width = 300;
        const textMargin = 20;

        const total = trueValue + falseValue;
        const truePercent = (trueValue * 100) / total;
        const x2 = Math.round((truePercent / 100) * width);
        this.setProperty("settings", {
            x2: x2,
            x1Text: textMargin,
            x2Text: x2 + textMargin,
            falseWidth: width - x2,
            total: total
        })
    }
}

customElements.define("boolean-visualization", BooleanVisualization);