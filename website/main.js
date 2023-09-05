const calculateButton = document.querySelector('#calculate-button')
const speed = document.querySelector('#speed')
const rangeSpeed = document.querySelector('#range-value')
const result = document.querySelector("#result")

calculateButton.addEventListener("click", () => {
    const capacity = parseInt(document.querySelector("#capacity").value)
    if(capacity < 0 || capacity > 5000){
        alert("Csak 0 és 5000 közötti értéket adhat meg!")
        return
    }
    const capacitySelect = document.querySelector("#capacity-select").value
    const speed = parseInt(document.querySelector("#speed").value)
    const speedSelect = document.querySelector("#speed-select").value

    const convertedValue = Math.round(convert(capacity, capacitySelect, speed, speedSelect))
    result.innerHTML = secondToMinute(convertedValue)
})

speed.addEventListener('input', (e) => {
    rangeSpeed.innerHTML = e.target.value
})


const secondToMinute = (second) => {
    if(second < 60){
        return `${second} másodperc`
    } else {
        minutes = Math.floor(second / 60)
        seconds = second - minutes * 60
        return `${minutes} perc ${seconds} másodperc`
    }
}

const convert = (capacity, capacitySelect, speed, speedSelect) => {
    let result = 0
    switch(capacitySelect){
        case "Mb":
            switch(speedSelect){
                case "mbps":
                    result = capacity / (speed / 8)
                    break
                case "Kbps":
                    result = capacity / (speed / 1000)
                    break
                case "Mbps":
                    result = capacity / speed
                    break
                case "Gbps":
                    result = capacity / (speed * 1000)
                    break
            }
            break
        case "Gb":
            switch(speedSelect){
                case "mbps":
                    result = capacity / (speed / 1000 / 8)
                    break
                case "Kbps":
                    result = capacity / (speed / 1000 / 1000)
                    break
                case "Mbps":
                    result = capacity / (speed / 1000)
                    break
                case "Gbps":
                    result = capacity / speed
                    break
            }
            break
        case "Tb":
            switch(speedSelect){
                case "mbps":
                    result = capacity / (speed / 1000 / 1000 / 8)
                    break
                case "Kbps":
                    result = capacity / (speed / 1000 / 1000 / 1000)
                    break
                case "Mbps":
                    result = capacity / (speed / 1000 / 1000)
                    break
                case "Gbps":
                    result = capacity / (speed / 1000)
                    break
            }
            break
    }

    return result
}