<template>
  <div>
    <canvas ref="matrixCanvas" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      canvas: null,
      ctx: null,
      columns: 100,
      drops: [],
      fontSize: 24,
    }
  },
  mounted() {
    this.initCanvas()
    this.initMatrix()
    setInterval(this.drawMatrix, 100)
  },
  methods: {
    initCanvas() {
      this.canvas = this.$refs.matrixCanvas
      this.ctx = this.canvas.getContext("2d")
      this.canvas.width = window.innerWidth
      this.canvas.height = window.innerHeight
    },
    initMatrix() {
      for (let i = 0; i < this.columns; i++) {
        this.drops[i] = Math.floor(
          Math.random() * (this.canvas.height / this.fontSize)
        )
      }
    },
    getRandomColor() {
      const letters = "0123456789ABCDEF"
      let color = "#"
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
      }
      return color
    },
    drawMatrix() {
      this.ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)

      for (let i = 0; i < this.columns; i++) {
        const text = String.fromCharCode(Math.floor(Math.random() * 2) + 48) // Zufällig '0' oder '1'
        const color = "#40c057"

        this.ctx.fillStyle = color
        this.ctx.font = `${this.fontSize}px monospace`
        this.ctx.fillText(
          text,
          i * this.fontSize,
          this.drops[i] * this.fontSize
        )

        if (
          this.drops[i] * this.fontSize > this.canvas.height &&
          Math.random() > 0.975
        ) {
          this.drops[i] = 0
        }

        this.drops[i]++
      }
    },
  },
}
</script>

<style lang="sass" scoped>
canvas
  display: block
  position: fixed
  z-index: -1
  top: 0
  left: 0
</style>
