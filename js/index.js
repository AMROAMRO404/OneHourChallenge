document.getElementById('main-color').addEventListener('input', () => {
    let mainColor = document.getElementById('main-color').value;
    let seconderyColor = document.getElementById('secondery-color').value;
    document.documentElement.style.setProperty('--main-color', mainColor)
    document.documentElement.style.setProperty('--secondery-color', seconderyColor)
    document.getElementById('text-color-main').value = mainColor
    document.getElementById('text-color-secondery').value = seconderyColor

});
document.getElementById('secondery-color').addEventListener('input', () => {
    let mainColor = document.getElementById('main-color').value;
    let seconderyColor = document.getElementById('secondery-color').value;
    document.documentElement.style.setProperty('--main-color', mainColor)
    document.documentElement.style.setProperty('--secondery-color', seconderyColor)
    document.getElementById('text-color-main').value = mainColor
    document.getElementById('text-color-secondery').value = seconderyColor
});
document.getElementById('reset').addEventListener('click', () => {
    document.getElementById('main-color').value = "#f336e3"
    document.getElementById('secondery-color').value = "#ac51a4"
    document.documentElement.style.setProperty('--main-color', "#f336e3")
    document.documentElement.style.setProperty('--secondery-color', "#ac51a4")
    document.getElementById('text-color-main').value = "#f336e3"
    document.getElementById('text-color-secondery').value = "#ac51a4"
});