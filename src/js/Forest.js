/**
 * Třída reprezentující les se zvířaty
 */
import { animals, plants, biomes } from "./Data";
import Animal from "./Animal";
import Plant from "./Plant";

export default class Forest {
    constructor() {
        this.animalsObjectsList = this.createListAnimalsObjects();
        this.plantsObjectsList = this.createListPlantsObjects();
    }

    createListAnimalsObjects() {
        return animals.map(animal => new Animal(animal));
    }

    createListPlantsObjects() {
        return plants.map(plant => new Plant(plant));
    }

    render() {
        this.renderAnimals();
        this.renderPlants();
        this.renderBiomeSelect();
    }

    renderAnimals() {
        const animalsListDOM = document.querySelector('.list--animals');
        this.cleanList('.animal');
      //  animalsListDOM.appendChild(this.createListHeading('Animal species'));
        for (const [index, value] of this.animalsObjectsList.entries()) {
            animalsListDOM.appendChild(value.createListItem(index));
        }
    }

    renderPlants() {
        const plantsListDOM = document.querySelector('.list--trees');
        this.cleanList('.plant');
      //  plantsListDOM.appendChild(this.createListHeading('Plants'));
        for (const [index, value] of this.plantsObjectsList.entries()) {
            plantsListDOM.appendChild(value.createListItem(index));
        }
    }

    renderBiomeSelect() {
        const selectDiv = document.querySelector('.select');
        selectDiv.addEventListener('click', (event) => this.handleEventsOnSelectDiv(event));
        for (let item of biomes) {
            selectDiv.innerHTML += this.createBiomeDiv(item);
        }
    }

    createBiomeDiv(text) {
        return `<div class="biome">${text}</div>`;
    }

    createListHeading(text) {
        const newHeading = document.createElement('li');
        newHeading.innerHTML = `<h2 class="list-heading">${text}</h2>`;
        return newHeading;
    }

    cleanList(selector) {
        let list = document.querySelectorAll(selector);
        for (let item of list) {
            item.remove();
        }
    }

    handleEventsOnSelectDiv(event) {
        const selectedBiome = event.target.innerText;
        this.highlightSelectedBiome(selectedBiome);
        this.filterAnimalsByBiome(selectedBiome);
        this.filterPlantsByBiome(selectedBiome);

    }

    filterAnimalsByBiome(selectedBiome) {
        this.animalsObjectsList = this.createListAnimalsObjects();
        if (selectedBiome === "all" || selectedBiome === undefined || selectedBiome === null || selectedBiome === "Select biome") {
            this.renderAnimals();
        } else {
            this.animalsObjectsList = this.animalsObjectsList.filter(item => item.biome === selectedBiome);
            this.renderAnimals();
        }
    }

    filterPlantsByBiome(selectedBiome) {
        this.plantsObjectsList = this.createListPlantsObjects();
        if (selectedBiome === "all" || selectedBiome === undefined || selectedBiome === null || selectedBiome === "Select biome") {
            this.renderPlants();
        } else {
            this.plantsObjectsList = this.plantsObjectsList.filter(item => item.biome === selectedBiome);
            this.renderPlants();
        }
    }

    highlightSelectedBiome(selectedBiome) {
        const biomeDivs = document.querySelectorAll('.biome');

        for (let item of biomeDivs) {
            item.classList.remove('selected');
            if (item.innerText === selectedBiome) item.classList.add('selected');
        }
    }
}