const parseArgs = () => {
    const args = process.argv.slice(2);

    const formattedArgs = args.reduce((acc, arg, index, array) => {
        if (arg.startsWith("--")) {
          acc[arg.slice(2)] = array[index + 1] || ""; 
        }
        return acc;
    }, {});

    const outputArgs = Object.entries(formattedArgs)
        .map(([argName, value]) => `${argName} is ${value}`)
        .join(', ');

    console.log(outputArgs);  
};

parseArgs();