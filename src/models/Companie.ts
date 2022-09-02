export class Companie {
    public id: number;
    public corporate_name: string;
    public cnpj: string;


    constructor(props: Omit<Companie, 'id'>, id?: string) {
        this.corporate_name = props.corporate_name;
        this.cnpj = props.cnpj
    }

}