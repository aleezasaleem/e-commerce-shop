import  ImageUrlBuilder  from '@sanity/image-url'
import { createClient } from "next-sanity";

export const client =createClient({
    projectId:'efoeraaf',
    dataset:'production',
    apiVersion:'2024-05-20',
    useCdn:true
})
const builder= ImageUrlBuilder(client)
export function urlFor(source:any){
    return builder.image(source)
}