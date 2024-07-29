
const mail = document.querySelector(".mail").value;
const amount = document.querySelector(".amount").value;

const btn = document.querySelector(".btn");

btn.addEventListener("click", ()=>{
    let handler = PaystackPop.setup({
       
        key: 'pk_test_d3194fee7f007b3480990d06a7f2c16978dbd3b4',
        email: document.querySelector(".mail").value,
        amount: document.querySelector(".amount").value * 100,
        onSuccess: (transaction) => {
            console.log(transaction);
        },
        onLoad: (response) => {
            console.log("onLoad: ", response);
        },
        onCancel: () => {
            console.log("onCancel");
        },
        onError: (error) => {
            console.log("Error: ", error.message);
        }
})

handler.openIframe()
})
