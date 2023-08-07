import mongoose from 'mongoose';

export default function connectToDatabase() {
    // const connectionParams = {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    //   }; 
    
      // Set the NODE_TLS_REJECT_UNAUTHORIZED environment variable to '0'
        process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '1';
    
      try {
        mongoose.connect(`mongodb+srv://adhikarihemanta932:qQT0BERqxQBVtKl3@cluster0.pwshqpo.mongodb.net/Inventory?retryWrites=true&w=majority`);
        console.log('Connected to Database Successfully');
      } catch (error) {
        console.log(error);
        console.log("Couldn't connect to the database!");
      }
}
