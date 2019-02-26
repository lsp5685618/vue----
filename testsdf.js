async function tiemout() {
  const s = await new Promise(resolve => {
    setTimeout(function () {
      resolve('dsaf')
    },5000)
  })
  console.log(s);
}

tiemout()


