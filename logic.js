function createPage() {
  //create header
  let element;
  let label;

  header = document.createElement("h1");
  header.innerHTML = "Warranty Information";
  document.body.append(header);

  //label function
  function createLabel(labelName, content) {
    label = document.createElement(labelName);
    label.textContent = content;
    document.body.appendChild(label);
  }

  //textBox function
  function createInput(elementName) {
    element = document.createElement(elementName);
    element.setAttribute("type", "text");
    document.body.appendChild(element);
  }

  //create input boxes
  createLabel("label", "First Name");
  createInput("input");

  createLabel("label", "Last Name");
  createInput("input");

  createLabel("label", "Company Name");
  createInput("input");

  createLabel("label", "Email");
  createInput("input");

  createLabel("label", "Phone Number");
  createInput("input");

  createLabel("label", "Fax Number");
  createInput("input");

  createLabel("label", "Address");
  createInput("input");

  createLabel("label", "City");
  createInput("input");

  createLabel("label", "State");
  createInput("input");

  createLabel("label", "Zip");
  createInput("input");

  createLabel("label", "Country");
  createInput("input");

  createLabel("label", "Unit Information");
  createInput("input");

  createLabel("label", "Date of Purchase");
  createInput("input");

  createLabel("label", "Model");
  createInput("input");

  createLabel("label", "Warranty Serial Number");
  createInput("input");

  //Save/close buttons
  element = document.createElement("input");
  element.setAttribute("type", "button");
  element.setAttribute("value", "Save");
  element.style.display = "inline";

  document.body.appendChild(element);

  element = document.createElement("input");
  element.setAttribute("type", "button");
  element.setAttribute("value", "Close");
  element.style.display = "inline";
  document.body.appendChild(element);
}
