
window.onload = printSave;

$('#currentDay').text(`${moment().format("ddd, h:mmA")}`)
setInterval(() => {
  $('#currentDay').text(`${moment().format("ddd, h:mmA")}`)
}, 20000);

$('.saveCell').hover(event => {
  let hoveringCell = ('#' + event.target.id)
  $(`${hoveringCell}`).css("background-color", "red")
})

$(".saveCell").mouseout(event => {
  let hoveringCell = ('#' + event.target.id)
  $(`${hoveringCell}`).css("background-color", "wheat")
})

$('.saveCell').click(event => {
  let place = ('#inputCell' + event.target.parentNode.id)
  let response = $(`${place}`).val()
  $(`${place}`).val(response)
  storeItems(response, place)
})

let hour = moment().format("hA")
let hourFound = false

function storeItems(submission, location) {

  let input1 = localStorage.getItem(`${location}`) || []
  input1[0] = submission
  localStorage.setItem(`${location}`, submission)
}
function printSave() {
  for (let i = 1; i < 10; i++) {
    let index = '#inputCell' + i

    switch (i) {
      case 1:
        console.log(hour)
        if (hour === '9AM') {
          $(`${index}`).css('background-color', 'rgb(2, 153, 153)')
          hourFound = true
        } else if (hourFound) {
          $(`${index}`).css('background-color', 'aqua')
        } else {
          $(`${index}`).css('background-color', 'rgb(175, 255, 255)')
        }
        break;

      case 2:
        if (hour === '10AM') {
          $(`${index}`).css('background-color', 'rgb(2, 153, 153)')
          hourFound = true
        } else if (hourFound) {
          $(`${index}`).css('background-color', 'aqua')
        } else {
          $(`${index}`).css('background-color', 'rgb(175, 255, 255)')
        }
        break;

      case 3:
        if (hour === '11AM') {
          $(`${index}`).css('background-color', 'rgb(2, 153, 153)')
          hourFound = true
        } else if (hourFound) {
          $(`${index}`).css('background-color', 'aqua')
        } else {
          $(`${index}`).css('background-color', 'rgb(175, 255, 255)')
        }
        break;

      case 4:
        if (hour === '12PM') {
          $(`${index}`).css('background-color', 'rgb(2, 153, 153)')
          hourFound = true
        } else if (hourFound) {
          $(`${index}`).css('background-color', 'aqua')
        } else {
          $(`${index}`).css('background-color', 'rgb(175, 255, 255)')
        }
        break;
      case 5:
        if (hour === '1PM') {
          $(`${index}`).css('background-color', 'rgb(2, 153, 153)')
          hourFound = true
        } else if (hourFound) {
          $(`${index}`).css('background-color', 'aqua')
        } else {
          $(`${index}`).css('background-color', 'rgb(175, 255, 255)')
        }
        break;
      case 6:
        if (hour === '2PM') {
          $(`${index}`).css('background-color', 'rgb(2, 153, 153)')
          hourFound = true
        } else if (hourFound) {
          $(`${index}`).css('background-color', 'aqua')
        } else {
          $(`${index}`).css('background-color', 'rgb(175, 255, 255)')
        }
        break;
      case 7:
        if (hour === '3PM') {
          $(`${index}`).css('background-color', 'rgb(2, 153, 153)')
          hourFound = true
        } else if (hourFound) {
          $(`${index}`).css('background-color', 'aqua')
        } else {
          $(`${index}`).css('background-color', 'rgb(175, 255, 255)')
        }
        break;
      case 8:
        if (hour === '4PM') {
          $(`${index}`).css('background-color', 'rgb(2, 153, 153)')
          hourFound = true
        } else if (hourFound) {
          $(`${index}`).css('background-color', 'aqua')
        } else {
          $(`${index}`).css('background-color', 'rgb(175, 255, 255)')
        }
        break;
      case 9:
        if (hour === '5PM') {
          $(`${index}`).css('background-color', 'rgb(2, 153, 153)')
          hourFound = true
        } else if (hourFound) {
          $(`${index}`).css('background-color', 'aqua')
        } else {
          $(`${index}`).css('background-color', 'rgb(175, 255, 255)')
        }
        break;
    }
    $(`${index}`).val(localStorage.getItem(`${index}`))
  }
}