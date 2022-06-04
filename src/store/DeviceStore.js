import { makeAutoObservable } from "mobx";

export default class DeviceStore {

    constructor() {
        this._types = [
            {id: 1, name: "Холодильники"},
            {id: 2, name: "Смартфоны"}
        ]
        this._brands = [
            {id: 1, name: "Samsung"},
            {id: 2, name: "Apple"}
        ]
        this._devices = [
            {id: 1, name: "apple1" },
            {id: 2, name: "apple2" },
            {id: 3, name: "apple3" },
            {id: 4, name: "apple4" }
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    get Types() {
        return this._types
    }

    get Brands() {
        return this._brands
    }

    get Devices() {
        return this._devices
    }



}