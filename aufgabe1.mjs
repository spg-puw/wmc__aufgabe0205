/* Your implementation */



function main() {
    for(let year = 2020; year < 2040; year++) {
        const date = Date.schoolyearBegin(year);
        console.log(date?.toGermanDateString());
    }
}

export default { main }
if (import.meta.url.endsWith(process.argv[1])) {
    main();
}
