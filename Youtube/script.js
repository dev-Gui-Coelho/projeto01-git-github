let body = document.getElementsByTagName("body")
function ocultarMenu(){
    let btn = document.getElementById("menuLateral")
    btn.classList.toggle("hiddenMenu")
    if(btn.classList.contains("hiddenMenu")){
        btn.style.display = "none"
        btn.style.transition = "all 2s"
    }else{
        btn.style.display = "flex"
        btn.style.transition = "all 2s"
    }
}
function openVideo(){
    let card_1 = document.getElementById("img-01")
    card_1.classList.toggle("open-video-01")
    if(card_1.classList.contains("open-video-01")){
        card_1.innerHTML = `<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExIVFRUXFxUXFxUXFxUXFxcXFxUXFxUVFxcYHSggGBolHRcXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NFQ8PFSsZFRktLS0tLSstLS0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS03Lf/AABEIAMkA+gMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAABAAIHA//EACcQAQEBAAECAwkBAQAAAAAAAAABEQISMSFB8ANRYXGBkcHR4aGx/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEF/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A6Wly7JgtVcYeSSolAUVBqM1UCNURVIrFatBKmKqjPJKJFISAYToVFSuQwVVWaDEFA0KqKghFMBiviqCoWnqRWqOxooGtRggtWmUVQqwSGiKCLVoCmKU4DOGKqT3iqnRiogtNBRUpBjSoKNhrNRWosHEqiqGKApFaRABNYRWjjNi314qNMtCoESrTICQaggVSsUSBkQRUFUWDTYyitWs6VKColVqwDDoOAJFTxFAyIQiLSBqhVo5EGGghTAYtRCK15M0U4oNVgLGpBKKBWI4IEkokkC1QVVFSxaqAaZwgq1IMVioiKqApgOAJSqsBUETuCVLNBatKz4f7RWoqorRBDayQESkMiKsMQxURZa0BRpioKA6MRUpCgGKqEQRGIFqsI5RRVDCBgqIBQSGQByUqtVBQVHpvwBoIIqOskFviqqgKBgCr5kYCPFLkADUFgCNCqKKwqsxA0s1qKGgiCGdxalYCBQEURIq4mBKiXVSAVUWLEVQqxkE1ENVEpEUUVREBYZVqBSKDVqorDGSKrCrV8UAoqgWmKVVUUVDQCKhQVQqIRBSHAB6ayRTEkgkloi5MyLTgpiqkQgxKgUkGAPFHVYCSwKhoikSKpFTRRDi4oUCpVqoDFDEolFKgRtCALYcHSitMtcRy8QQinyaAI1miHRpiopZxq1lUWJHUUU2AwRWDDoFPSL4rVIIuLTOLAQpxUVYqNUoNRVmNYICLEKqoWRDp1HIoFCLEUyCoiKKDTAGKHQBkZWrQMTOtAlitVoFmnirAQOsitAGQEsUMECxRUECoAqhsIMwmhQValvwRWoKRIDUUS0Rkw2MyiqlRQBotNM+YA6rVAUVNrN7KhtZxqKoDSOPFWijTyqQFk0TwAoWKgqryNjNAnBpEForVqopkSlZtVG6DaKimA1kQ2riKRVyWmCAFjUABpnpQjQpQM4sNX2FUCNAQabRIDUCit0F0rFECxTiZPFWqg6TjMboMVWtUWIDV9TYJRWjg5dh7Pt9kGhGqPOfT8qDCeP7/AOLj3EZ5VC/n9t/wUUWDn6/xqdgZ1N8fyx7PtPkBhkZ5d/s9OXf6CMUWKte715iiRQcmvP17gVEN/QgCitea/oDVg8vXuU7A1QYqIJDjP9aFGG0f0ezA1nGkD//Z"> `
    }else{
        
    }
}
