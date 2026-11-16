import fs from 'fs/promises'; 
import path from 'path';

try {
    const url = path.join(".","NodeCode", "info.json");
    const text = await fs.readFile(url, "utf8");

    var object = JSON.parse(text);

    // Setting Object Values
    object.school = "University of Buea";
    object.id = 11002;
    object.activeStatus = "inactive";
    object.infoDirectory = url;

    console.log("The object is :",object,"\nAnd it is called", path.basename(url, path.extname(url)))

    fs.writeFile(url, JSON.stringify(object));

} catch (error) {
    if (error && error.code === "ENOENT") {
        console.log("Well, Thats an error", error)
    }
}