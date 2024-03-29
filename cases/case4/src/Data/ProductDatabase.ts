import ProductRepository from "../Business/ProductRepository";
import Product from "../Model/Product";
import { BaseDatabase } from "./BaseDatabase";
import { CustomError } from "../error/CustomError";

export default class ProductDatabase extends BaseDatabase implements ProductRepository {
    public insertProduct = async (input: Product): Promise<Product> => {
        try {
            await this.getConnection()
                .insert({
                    id: input.getId(),
                    name: input.getName()
                    // tags: input.getTags()
                })
                .into("Products")

            return input
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public insertTags = async (input: Product, tag: string): Promise<Product> => {
        try {
            await this.getConnection()
                .insert({
                    product_id: input.getId(),
                    tags: tag
                })
                .into("Tags")

            return input
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }



    public verifyProductByName = async (name: string): Promise<any> => {
        try {
            const result = await this.getConnection()
                .select("*")
                .from("Products")
                .where({ name })



            return result[0]
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public getProductById = async (id: string): Promise<any> => {
        try {

            const result = await this.getConnection().raw(`
                SELECT id, name, tags FROM Products JOIN Tags ON Products.id = Tags.product_id
                WHERE id = "${id}";
                `)

            if (result[0].length === 0) {
                throw new CustomError(400, "Product not found")
            }



            let tags: string[] = []

            for (let i = 0; i <= result[0].length - 1; i++) {
                tags.push(result[0][i].tags)
            }

            const result2 = {
                id: result[0][0].id,
                name: result[0][0].name,
                tags: tags
            }

            return result2
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
    public getProductsByName = async (name: string): Promise<any> => {
        try {

            const result = await this.getConnection().raw(`
                SELECT id, name, tags FROM Products JOIN Tags ON Products.id = Tags.product_id
                WHERE name LIKE "%${name}%" ORDER BY id;
            `)

            console.log(result)

            if (result[0].length === 0) {
                throw new CustomError(400, "Product not found")
            }


            let result3: any[] = []

            let lastId: string = result[0][0].id
            // console.log(result[0])

            for (const id of result[0]) {
                if (id.id !== lastId) {
                    let product = await this.getProductById(lastId)
                    console.log("id", id)
                    result3.push(product)

                    lastId = id.id
                }
            }
            result3.push(await this.getProductById(lastId))

            return result3
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }


    public getProductsByTags= async (tags: string): Promise<any> => {
        try {

            const result = await this.getConnection().raw(`
                SELECT id, name, tags FROM Products JOIN Tags ON Products.id = Tags.product_id
                WHERE tags LIKE "%${tags}%" ORDER BY id;
            `)
            console.log(result[0])

            if(result[0].length === 0){
                throw new CustomError(400, "Product not found")
            }

            let result2: any[] = []


            for(const product of result[0]){
                result2.push(await this.getProductById(product.id))
            }


            return result2
            
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

}