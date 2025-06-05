// Access all elements using id
const nameEle = document.getElementById("name");
const emailEle = document.getElementById("email");
const messageEle = document.getElementById("message");

const nameErrorEle = document.getElementById("nameerror");
const mailErrorEle = document.getElementById("mailerror");
const msgErrorEle = document.getElementById("msgerror");
const formErrorEle = document.getElementById("formError");

// Patterns
const namePattern = /^[A-Za-z ]{2,50}$/;
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Add input listeners
nameEle.addEventListener("input", () => validateName());
emailEle.addEventListener("input", () => validateEmail());
messageEle.addEventListener("input", () => validateMessage());

function validateName() {
  const name = nameEle.value.trim();
  if (name === "") {
    nameErrorEle.textContent = "Name is required";
    return false;
  } else if (!namePattern.test(name)) {
    nameErrorEle.textContent = "Name must be 2-50 letters only";
    return false;
  } else {
    nameErrorEle.textContent = "";
    return true;
  }
}

function validateEmail() {
  const email = emailEle.value.trim();
  if (email === "") {
    mailErrorEle.textContent = "Email is required";
    return false;
  } else if (!emailPattern.test(email)) {
    mailErrorEle.textContent = "Invalid email format";
    return false;
  } else {
    mailErrorEle.textContent = "";
    return true;
  }
}

function validateMessage() {
  const message = messageEle.value.trim();
  if (message === "") {
    msgErrorEle.textContent = "Message is required";
    return false;
  } else if (message.length < 10) {
    msgErrorEle.textContent = "Message should be at least 10 characters";
    return false;
  } else {
    msgErrorEle.textContent = "";
    return true;
  }
}

// Final validation before submission
function validateAll() {
  const validName = validateName();
  const validEmail = validateEmail();
  const validMsg = validateMessage();

  const isFormValid = validName && validEmail && validMsg;

  if (!isFormValid) {
    formErrorEle.textContent = "Please fix the errors above before submitting.";
  } else {
    formErrorEle.textContent = "";
  }

  return isFormValid;
}


document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); 

  if (validateAll()) {
    this.submit(); 
  }
});



const images=[
            {
                imagePath: "./RESOURCES/bhavesh Gondane Merit_Certificate_page-0001.jpg",
                imageCaption:"Full Stack Development – Seed Infotech"
            },
            {
                imagePath: "./RESOURCES/IMG_20250602_094218.jpg",
                imageCaption: "Java Full Stack Development – CDAC"
                
            },
            {
                imagePath:"./RESOURCES/Udemy.jpg",
                imageCaption: "HTML, CSS, & JavaScript – Udemy"
            }
        ];
        setInterval(()=>{
            slideShow();
        },3000);

        let i=-1;
        const imageNode=document.getElementById("image1");
        const figNode=document.getElementById("imgCaption");
        function slideShow(){
            i++;
            if(i==images.length)
            i=0;
            let image=images[i];
            imageNode.src=image.imagePath;
            figNode.textContent=image.imageCaption;
        }