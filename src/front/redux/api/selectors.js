export const locationSelector = (data) => {
    let filteredData = {
        businessLocations: [],
        readPoints: []
    };
    if (!!data && data.length > 0) {
        data.forEach(location => {
            if (location.readPoint)
                filteredData.readPoints.push(location)
            else
                filteredData.businessLocations.push(location)
        });
    }
    return filteredData;
}