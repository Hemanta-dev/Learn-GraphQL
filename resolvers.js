import {users,quotes} from './fakeDB.js';
const resolvers ={
    Query:{
        /**to find the all users */
        users:()=> users,
        /*** to find the individual user */
        user:(_,args)=> users.find(user=>user.id==args.id),
        /**to find the all quotes */
        quotes:()=>quotes,
         /**to find the individual quote */
        quote:(_,args)=>quotes.filter(quote=>quote.by == args.by),
    },
    User:{
        quotes:(user)=>quotes.filter(quote=>quote.by === user.id)
        /** above code explain that we used the quotes here first user arguments gives us quotes parents that is user we take id of parent or user and check it for*/
    }
}
export default resolvers;