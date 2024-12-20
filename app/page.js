"use server"
import { MongoClient } from "mongodb"
//import dotenv from "dotenv"
//dotenv.config()


const Page = async () => {
    
    let i = 1
    const uri = process.env.MONGODB_URI
    const client = new MongoClient(uri)
    client.connect()
    const db1 = await client.db("mili")
    const db = await db1.collection("people10")
    const query = await db.find().toArray()
    console.log("Oamenii mei sunt: ", query)
    const lol = () => {
        return query.map(elem => <li key={i++}>{elem.firstname}---{elem.lastname}---{elem.location}---{elem.city}---{elem.street}</li>)
    }
    return (
        <div>
            <p>Welcome to Home page!</p>
            <ul>{lol()}</ul>

        </div>
    )
}
export default Page