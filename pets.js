const data = [
  {
    name: "Katrine",
    img: "./images/photo/katrine.png",
    imgpopup: "./images/popup/katrine.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    age: "6 months",
    inoculations: ["panleukopenia"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Jennifer",
    img: "./images/photo/jennifer.png",
    imgpopup: "./images/popup/jennifer.png",
    type: "Dog",
    breed: "Labrador",
    description:
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: "2 months",
    inoculations: ["none"],
    diseases: ["none"],
    parasites: ["none"],
  },

  {
    name: "Woody",
    img: "./images/photo/woody.png",
    imgpopup: "./images/popup/woody.png",
    type: "Dog",
    breed: "Golden Retriever",
    description:
      "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    age: "3 years 6 months",
    inoculations: ["adenovirus", "distemper"],
    diseases: ["right back leg mobility reduced"],
    parasites: ["none"],
  },
  {
    name: "Sophia",
    img: "./images/photo/sophia.png",
    imgpopup: "./images/popup/sophia.png",
    type: "Dog",
    breed: "Shih tzu",
    description:
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: "1 month",
    inoculations: ["parvovirus"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Timmy",
    img: "./images/photo/timmy.png",
    imgpopup: "./images/popup/timmy.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    age: "2 years 3 months",
    inoculations: ["calicivirus", "viral rhinotracheitis"],
    diseases: ["kidney stones"],
    parasites: ["none"],
  },

  {
    name: "Charly",
    img: "./images/photo/charly.png",
    imgpopup: "./images/popup/charly.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "8 years",
    inoculations: ["bordetella bronchiseptica", "leptospirosis"],
    diseases: ["deafness", "blindness"],
    parasites: ["lice", "fleas"],
  },

  {
    name: "Scarlett",
    img: "./images/photo/scarlett.png",
    imgpopup: "./images/popup/scarlett.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    age: "3 months",
    inoculations: ["parainfluenza"],
    diseases: ["none"],
    parasites: ["none"],
  },

  {
    name: "Freddie",
    img: "./images/photo/freddie.png",
    imgpopup: "./images/popup/freddie.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    age: "2 months",
    inoculations: ["rabies"],
    diseases: ["none"],
    parasites: ["none"],
  },
];

class Modal {
  constructor(classes) {
    this.classes = classes;
    this.modal = "";
    this.modalContant = "";
    this.modalCloseBtn = "";
    this.overlay = "";
  }

  buildModal(content) {
    //overlay
    this.overlay = this.createDomNode(
      this.overlay,
      "div",
      "overlay",
      "overlay-modal"
    );
    //Modal
    this.modal = this.createDomNode(this.modal, "div", "modal", this.classes);

    //Modal contant
    this.modalContent = this.createDomNode(
      this.modalContent,
      "div",
      /*"modal",*/
      "modal-content"
    );

    //Close Button
    this.modalCloseBtn = this.createDomNode(
      this.modalCloseBtn,
      "button",
      "circle_button_cross"
    );
    this.modalCloseBtn.innerHTML = "&#x2A09;";

    this.setContent(content);

    this.appendModalElements();

    //Bind events
    this.bindEvents();

    //Open modal
    this.openModal();
  }

  createDomNode(node, element, ...classes) {
    node = document.createElement(element);
    node.classList.add(...classes);
    return node;
  }

  setContent(content) {
    if (typeof content === "string") {
      this.modalContent.innerHTML = content;
    } else {
      this.modalContent.innerHTML = "";
      this.modalContent.appendChild(content);
    }
  }

  appendModalElements() {
    this.modal.append(this.modalCloseBtn);
    this.modal.append(this.modalContent);
    this.overlay.append(this.modal);
  }

  bindEvents() {
    this.modalCloseBtn.addEventListener("click", this.closeModal);
    this.overlay.addEventListener("click", this.closeModal);
  }

  openModal() {
    document.body.append(this.overlay);
  }

  closeModal(e) {
    let classes = e.target.classList;
    if (
      classes.contains("overlay") ||
      classes.contains("circle_button_cross")
    ) {
      document.querySelector(".overlay").remove();
    }
  }
}

class ArticleModal extends Modal {
  constructor(
    classes,
    {
      name,
      imgpopup,
      type,
      breed,
      description,
      age,
      inoculations,
      diseases,
      parasites,
    }
  ) {
    super(classes);
    this.name = name;
    this.img = imgpopup;
    this.type = type;
    this.breed = breed;
    this.description = description;
    this.age = age;
    this.inoculations = inoculations;
    this.diseases = diseases;
    this.parasites = parasites;
  }

  // articleOurFriends generate2
  generateContent() {
    let template = "";
    let article = document.createElement("div");
    article.className = "popup";

    if (
      this.img ||
      this.name ||
      this.breed ||
      this.description ||
      this.age ||
      this.inoculations ||
      this.diseases ||
      this.parasites
    ) {
      template += `<div class="popup_pets">`;
      this.img &&
        (template += `<div class="popup_img"> 
      <img src=${this.img} alt=${this.type}>
      </div>`);
      this.name &&
        (template += `<div class="popup_text">
        <h3>${this.name}</h3>
        <h4>${this.breed}</h4>
        <h5>${this.description}</h5>
        <ul class=popup_ul>
           <li><b>Age:</b>${this.age}</li>
           <li><b>Inoculations:</b> ${this.inoculations}</li>
           <li><b>Diseases:</b> ${this.diseases}</li>
           <li><b>Parasites:</b> ${this.parasites}</li>                          
        </ul>
        </div>`);

      template += `</div>`;
    }
    article.innerHTML = template;
    return article;
  }
  renderModal() {
    let content = this.generateContent();

    super.buildModal(content);
  }
}
const renderSectionOurFriendsToDom = () => {
  const ourFriendsDom = getOurFriendsDom();
  generateArticles(data).forEach((article) => {
    ourFriendsDom.append(article.generateArticle());
  });

  addStrategyClickHandler();
};
const getOurFriendsDom = () => {
  const ourFriendsContainer = document.querySelector(".our_friends_card");
  ourFriendsContainer.innerHTML = "";
  return ourFriendsContainer;
};
const generateArticles = (data) => {
  let articles = [];
  data.forEach((article) => {
    articles.push(new Article(article));
  });
  return articles;
};

const addToolsClickHandler = () => {
  document.querySelector(".our_friends_name").addEventListener("click", () => {
    generateToolsModal();
  });
};

const generateToolsModal = () => {
  renderModalWindow();
};

const renderModalWindow = (content) => {
  let modal = new Modal("tools-modal");
  modal.buildModal(content);
};

const addStrategyClickHandler = () => {
  document.querySelector(".our_friends_name").addEventListener("click", (e) => {
    if (e.target.closest(".our_friends_card")) {
      let clickedStrategyName = e.target
        .closest(".our_friends_card")
        .getAttribute("data-name");
      let clickedStrategyData = getClickedData(clickedStrategyName);

      renderArticleModalWindow(clickedStrategyData);
    }
  });
};

const getClickedData = (name) => {
  return data.find((article) => article.name == name);
};

const renderArticleModalWindow = (article) => {
  let modal = new ArticleModal("article-modal", article);

  modal.renderModal();
};

//Hamburger

const hamburgerBtn = document.getElementById("hamburger-btn");
const hamburgerMenu = document.getElementById("hamburger-menu");

hamburgerBtn.addEventListener("click", function () {
  hamburgerBtn.classList.toggle("rotate");
  hamburgerMenu.classList.toggle("active");

  if (hamburgerMenu.style.display === "block") {
    hamburgerMenu.style.display = "none";
  } else {
    hamburgerMenu.style.display = "block";
  }
});

hamburgerMenu.addEventListener("click", function () {
  hamburgerBtn.classList.toggle("rotate");
  hamburgerMenu.classList.toggle("active");

  if (hamburgerMenu.style.display === "block") {
    hamburgerMenu.style.display = "none";
  } else {
    hamburgerMenu.style.display = "block";
  }
});

//popup
