/* Your implementation */



function main() {
    for(let year = 2020; year < 2040; year++) {
        const date = Date.schoolyearBegin(year);
        console.log(date?.toGermanDateString());
    }
}

export default { main }
import { pathToFileURL as _path } from 'url'
if (import.meta.url === _path(process.argv[1]).href) {
    main();
}
