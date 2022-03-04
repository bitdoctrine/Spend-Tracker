const dailyExpenditure = [
  { 
    expenseTime: "7:37:55 AM", 
    name: "234565643", 
    price: "34567876543" },
  {
    expenseTime: "7:41:01 AM",
    name: "76543",
    price: "3245675432",
  },
];

const mainRecord = [];
/*an expenditure is an object which represents instances of spending in key , value pairs. And each instance of spending contains other useful informations like date, time, amounts spent e.t.c */
const form = document.getElementById("add-form");
const addExpenseHandler = document.getElementById("submit");
const closeModalHandler = document.getElementById("close-modal");
const showModalHandler = document.getElementById("add");
const modal = document.getElementById("modal");

function showModal() {
  modal.classList.remove("hidden");
}
function hideModal() {
  modal.classList.add("hidden");
}

if (showModalHandler) {
  showModalHandler.addEventListener("click", showModal);
}

if (closeModalHandler) {
  closeModalHandler.addEventListener("click", hideModal);
}

if (addExpenseHandler) {
  addExpenseHandler.addEventListener("click", function (e) {
    e.preventDefault();
    const expensePrice = document.getElementById("price").value;
    const expenseName = document.getElementById("name").value;
    if (expenseName.length <= 0 || expensePrice.length <= 0) {
      alert("Name and Price are both required for this to work");
      return;
    } else {
      const expenseData = {
        name: expenseName,
        price: expensePrice,
        expenseTime: `${new Date().toLocaleTimeString()}`,
      };

      dailyExpenditure.push(expenseData);
      console.log(dailyExpenditure);
      form.reset();
      hideModal();
    }
  });
}

function MainRecordHandler() {
  const date = new Date();

    const record = dailyExpenditure;
    const EntryDate = date.toLocaleDateString();

    const entryObject = {
      date: EntryDate,
      entryRecord: record,
    };

    mainRecord.push(entryObject);
    console.log(dailyExpenditure);
    console.log(mainRecord);

  
}

MainRecordHandler();


// setInterval( MainRecordHandler(), 60000);

const entries = document.getElementById("entries-section");

function entriesHandler() {
  if (mainRecord.length === 0) {
    entries.innerHTML = `<h1>
  Still waiting for your first entry
                         </h1>`;
  } else {
    mainRecord.forEach(item => {
      const entry = document.createElement("div");
      const toolTip = document.createElement('div');
      toolTip.className = 'tooltip hidden';
      console.log(toolTip);
      
      entry.className = "entry";
      entry.id = 'entry';

      
      entry.innerHTML = `<h3 class="entry-date"><a href="#">${item.date}</a></h3> <p class="entry-info"><a href="#">${item.entryRecord.length} expenditures<\a><p>`;
      const toolTipItems = item.entryRecord;
      console.log(toolTipItems)
      toolTipItems.forEach(item => {
        toolTip.innerHTML = `<ul class="expenditure-list>
        <li class="expenditure-name">${item.expenseTime};
        </ul>`
      })

      entries.append(entry);
    });
  }
}



if (entries) {
  window.addEventListener("load", entriesHandler);
}
