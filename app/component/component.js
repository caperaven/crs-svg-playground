import "./boolean-visualization.js";

export default class Component extends crsbinding.classes.ViewBase {
    load() {
        this.setProperty("trueValue", 100);
        this.setProperty("falseValue", 200);
        super.load();
    }
}