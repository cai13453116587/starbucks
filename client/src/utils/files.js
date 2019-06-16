class Files{
    constructor(type,opense){
        this.type = type;
        this.opense = opense;
    }
    isSize(){
       return (this.opense.size * 1024 * 1024) > this.type.size
    }
    isType(){
        let type = this.type.type.match(/\/(\w+)$/i)[1];
        return this.opense.type.includes(type)
    }
}
export default Files;