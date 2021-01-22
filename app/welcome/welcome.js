export default class Welcome extends crsbinding.classes.ViewBase {
    async preLoad(setPropertyCallback) {
        const references = await fetch("/data/elements.json").then(result => result.json());
        const filters = await fetch("/data/filters.json").then(result => result.json());
        setPropertyCallback("references", references);
        setPropertyCallback("filters", filters);
    }
}