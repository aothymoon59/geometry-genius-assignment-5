//=================================== Get input value by id ==================================

function getInputValueById(inputId) {
  const inputField = document.getElementById(inputId);
  const inputValueStr = inputField.value;
  const inputValue = parseFloat(inputValueStr);
  inputField.value = "";
  return inputValue;
}

//================================ set element on calculation area ===========================

function setElement(count, title, area) {
  const table = document.getElementById("area-calculations");

  const tr = document.createElement("tr");

  tr.innerHTML = `
    <td class="pt-4 text-sm">${count}. </td>
    <td class="pr-2 sm:pr-5 pt-4 text-sm">${title} </td>
    <td class="pr-2 sm:pr-5 pt-4 text-sm"><span>${area}</span>cm<sup>2</sup> </td>

    <td class="pr-2 sm:pr-5 pt-4 text-sm">
        <button
            class="convert-to-m font-medium text-sm p-2 text-white bg-btnColor w-full rounded-lg hover:bg-sky-700">Covert to m<sup>2</sup> 
        </button>
    </td>
    <td class=" pt-4 text-red-600">
        <button class="hover:bg-slate-200 p-1 rounded-[50%]">
            <i class="fa-solid fa-xmark del-btn"></i>
        </button>
    </td>
    `;

  table.appendChild(tr);
}

//================================ random card bg ==================================

function randomBgColor(selector) {
  const cards = document.getElementsByClassName(selector);
  for (const card of cards) {
    card.addEventListener("mouseover", function () {
      const rgbNumber1 = Math.floor(Math.random() * 255);
      const rgbNumber2 = Math.floor(Math.random() * 255);
      const rgbNumber3 = Math.floor(Math.random() * 255);
      card.style.backgroundColor = `rgb(${rgbNumber1}, ${rgbNumber2}, ${rgbNumber3})`;
    });
    card.addEventListener("mouseout", function () {
      card.style.backgroundColor = "rgb(255, 255, 255)";
    });
  }
}

// set element on editing filed

function setValueById(id1, value1, id2, value2) {
  const editVal1 = document.getElementById(id1);
  const editVal2 = document.getElementById(id2);

  editVal1.innerText = value1;
  editVal2.innerText = value2;
}
// set input value by id

function setInputValueById(id1, value1, id2, value2) {
  const editVal1 = document.getElementById(id1);
  const editVal2 = document.getElementById(id2);

  editVal1.value = value1;
  editVal2.value = value2;
}

// get element value by id

function getElementValueById(id) {
  const element1 = document.getElementById(id);
  const element1ValueStr = element1.innerText;
  const element1Value = parseFloat(element1ValueStr);

  return element1Value;
}
