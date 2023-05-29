function runActivity() {
  let area = Number(
    prompt(
      "What shape would you like to get the area? press 1 for triangle 2 for circle 3 for rectangle"
    )
  );
  switch (area) {
    case 1:
      let base = Number(prompt("Enter Base"));
      if (base / base == 1) {
        console.log(base);
      } else {
        alert("not a number");
        console.error("not a number");
        break;
      }

      let height = Number(prompt("Enter Height"));
      if (height / height == 1) {
        console.log(height);
      } else {
        alert("not a number");
        console.error("not a number");
        break;
      }
      area = (base * height) / 2;
      alert("The Area of the Triangle is " + area + "");
      console.log("The Area of the Triangle is " + area + "");
      break;
    case 2:
      let radius = Number(prompt("Enter Radius"));
      if (radius / radius == 1) {
        console.log(radius);
      } else {
        alert("not a number");
        console.error("not a number");
        break;
      }
      area = radius * radius * 3.1416;
      alert("The Area of the Circle is " + area + "");
      console.log("The Area of the Circle is " + area + "");
      break;

    case 3:
      let lenght = Number(prompt("Enter Length"));
      if (lenght / lenght == 1) {
        console.log(lenght);
      } else {
        alert("not a number");
        console.error("not a number");
        break;
      }

      let width = Number(prompt("Enter Width"));
      if (width / width == 1) {
        console.log(width);
      } else {
        alert("not a number");
        console.error("not a number");
        break;
      }
      area = lenght * width;
      alert("The Area of the Rectangle is " + area + "");
      console.log("The Area of the Rectangle is " + area + "");
      break;
    default:
      console.error("Not an appropriate selection of shape!");
      alert("Not an appropriate selection of shape!");
  }
}
