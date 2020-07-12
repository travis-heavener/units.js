class LengthUnit {
    //raw unit is an inch
    constructor() { this.raw = 0; }
    
    //----------getters----------
    
    //standard
    getNauticalMile() { return this.raw / 72913; }
    getMile() { return this.raw / 63360; }
    getYard() { return this.raw / 36; }
    getFoot() { return this.raw / 12; }
    getInch() { return this.raw; }
    
    //metric
    getKilometer() { return this.raw * 2.54e-5; }
    getMeter() { return this.raw * 0.0254; }
    getDecimeter() { return this.raw * 0.254; }
    getCentimeter() { return this.raw * 2.54; }
    getMillimeter() { return this.raw * 25.4; }
    getMicrometer() { return this.raw * 25400; }
    getNanometer() { return this.raw * 2.54e+7; }
    
    //----------setters----------
    
    //standard
    setNauticalMile(x) { this.raw = x * 72913; }
    setMile(x) { this.raw = x * 63360; }
    setYard(x) { this.raw = x * 36; }
    setFoot(x) { this.raw = x * 12; }
    setInch(x) { this.raw = x; }
    
    //metric
    setKilometer(x) { this.raw = x / 2.54e-5; }
    setMeter(x) { this.raw = x / 0.0254; }
    setDecimeter(x) { this.raw = x / 0.254; }
    setCentimeter(x) { this.raw = x / 2.54; }
    setMillimeter(x) { this.raw = x / 25.4; }
    setMicrometer(x) { this.raw = x / 25400; }
    setNanometer(x) { this.raw = x / 2.54e+7; }
}