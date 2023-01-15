

export function fetchVehicle() {
    return new Promise<{data:number}>((resolve) => 
        setTimeout(()=> resolve({data:1}), 500)
    )
}