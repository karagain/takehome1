const futureDate = new Date("2024/07/28")
export default class {
  onCreate() {
    this.state = {}
    setInterval(() => this.updateState(), 0)
  }

  padLeft(num) {
    return num < 10 ? "0" + num : num
  }

  updateState() {
    const diff = futureDate - new Date()

    const hours = Math.floor((diff / (60 * 60 * 1000)))
    const minutes = Math.floor((diff % (60 * 60 * 1000) / 1000 / 60))
    const seconds = Math.floor((diff % (60 * 1000) / 1000))
    const milliseconds = Math.floor((diff % 1000) / 10)
    const arr = [hours, minutes, seconds]

    const retVal = arr.map(x => this.padLeft(x)).join(":") + "." + this.padLeft(milliseconds)
    this.state = {
      output: retVal
    }
  }

}
