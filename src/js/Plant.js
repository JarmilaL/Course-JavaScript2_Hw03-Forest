/**
 * Třída reprezentující druh rostliny
 */
import defaultExport from './conservationStatus';

export default class Plant {
    constructor(props) {
        this.biome = props.biome;
        this.name = props.name;
        this.type = props.type;
        this.foliage = props.foliage;
        this.latin = props.latin;
        this.photo = `../images/${props.photo}`;
        this.text = props.text;
        this.conservationStatus = this.getConservationStatus(props.conservationStatus);
    }

    getConservationStatus(props) {
        const conservationStatusList = defaultExport;
        for (const [key, value] of Object.entries(conservationStatusList)) {
            if (key === props) return value;
        }
    }

    createListItem(id) {
        const newItem = document.createElement('li');
        newItem.classList.add('list-item');
        newItem.classList.add('plant');
        newItem.id = `p-${id}`;
        newItem.addEventListener('click', (event) => this.showDetails(event));
        newItem.appendChild(this.createOverviewDiv());
        newItem.appendChild(this.createDetailsDiv());
        return newItem;
    }

    createOverviewDiv() {
        const newDiv = document.createElement('div');
        newDiv.classList.add('overview');
        newDiv.innerHTML = this.getNameDiv() + this.getTypeDiv() + this.getFoliageDiv() + this.getConservationStatusDiv();
        return newDiv;
    }

    createDetailsDiv() {
        const newDiv = document.createElement('div');
        newDiv.classList.add('details');
        newDiv.classList.add('hidden');
        newDiv.innerHTML = this.getLatinDiv() + this.getTextDiv() + this.getPhotoDiv();
        return newDiv;
    }

    showDetails(event) {
        const listItemId = event.currentTarget.id;
        const item = document.getElementById(listItemId).children[1];
        item.classList.toggle('hidden');
    }

    getLatinDiv() {
        return `<div class="latin">Latin name: ${this.latin}</div>`;
    }

    getTextDiv() {
        return `<div class="text">${this.text}</div>`;
    }

    getPhotoDiv() {
        return `<div class="photo"><img src="${this.photo}" alt="photo"></div>`;
    }

    getNameDiv() {
        return `<div class="name">${this.name}</div>`;
    }

    getTypeDiv() {
        return `<div class="type">${this.type}</div>`;
    }

    getFoliageDiv() {
        return `<div class="foliage">${this.foliage}</div>`;
    }

    getConservationStatusDiv() {
        return `<div class="conservationStatus">${this.conservationStatus}</div>`;
    }

    getBiome() { return this.biome }

}