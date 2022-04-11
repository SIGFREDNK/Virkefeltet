export default async (username, password, cluster, database, mongoose) => {
    try {
        const connection = await mongoose.connect(
            `mongodb+srv://${username}:${password}@${cluster}.xvltk.mongodb.net/${database}?retryWrites=true&w=majority`,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        );
        console.log(
            `SUCCESSFULLY CONNECTED TO DATABASE [${connection.connections[0].name.toUpperCase()}]`
        );
        return connection;
    } catch (error) {
        console.log('💥💥💥 UNABLE TO CONNECT TO DATABASE 💥💥💥');
        console.log(error.name, error.message, error.stack.split(/\r\n|\n/)[1]);

        process.exit(1);
    }
};
