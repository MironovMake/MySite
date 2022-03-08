var arrLang = {
  en: {
    Logo: "About me",
    schedule: "Schedule",
    formuls: "Formulas",
    AboutMe: "About me",
    physicIntro: "Physic and prossec education",
    intro: "Imagine a circle, all what you know are inside of the circle and all out edge are unknown. So each human can see the circle of his knowledge and if human not very smart edge is small and person self-confident that he know's almost everything in the world. Smart guy has a big circle of knowledge and he understand that he doesn't know a lot of stuff. So I have a some skills but I know that there are even more stuff wich I need to learn. And here you can see some my abilities.",
    physic: "For now I work as physics tutor. That's interesting because the subject avery logical and of course it's fun to work with children. It's fine to have some primar knowledge wich almost wont be changed in future because nobody can break or change physics law. And also I am interesting in process of teaching another human because I learn something new every day and it's very important for me to be productive.",
    printingTex: "My 3d printing",
    tex3d: "I have 3d printer Anet e10. I use 3d printing for different projects and sometimes I print something useless just for fun. I thing that it's amazing and very useful hobby which allow you expand possibility of your craft skills and very important instrument for home recover or custom made things. So sometimes I public my 3d stuff in my Intagramm and thingiverse, but not often. ",
    webHead: "My expirience in web programming",
    webText: "I kind of pretty good in understanding HTML and css, it's easy but from time to time I still use google. I use SASS but there a some functional which I didn't try yet. Sometimes I use JS but it always Сopy-Paste stuff and dancing with a tambourine. This site made by me and sometimes I make sites for control Esp8266/Esp32.",
    arduino_StuffHeader: "c++, arduino esp8266 and another stuff like this",
    arduino_StuffText: "For some years I have worked as teacher or Arduino. Now I use Esp32/Esp8266 in my projects. I know C++ and use Visual Studio Code. I use GIT, but just for publish my projects, because all my projects I do alone so I don't need to use branches. You can look at my GitHub, link is active. In addition to coding I can solder. If I need some PCB I can use EasyEDA for getting PCB from factory. And I can change the socket or some stuff in switch box)",
    contactHeader1: "Contact",
    finalText: "According to the above every time when I make some project I meet new technology or stuff like JSON, MQTT, LoRa, SQL Firebase etc. I have a big passion to learn this technology but I don't have time. So if you have something interesting job for me or need  some help in making project, write me, I'll answer you.",
    contactHeader2: "leave your contacts, I will contact you",
    contactName: "Name",
    contactPhone: "Phone",
    contactSend: "Submit",
  },
  ru: {
    Logo: "Обо мне",
    schedule: "Расписание",
    formuls: "Формулы",
    AboutMe: "Обо мне",
    physicIntro: "Физика и процесс обучения",
    intro: "Представьте себе круг, внутри этого круга находятся Ваши знания, за его пределами неизвестность. Вы видите границу своего знания и у глупого человека она маленькая, поэтому он уверен в том, что знает почти все на свете. У умного - круг знаний огромный и он понимает, многое ему неизвестно. В общем у меня есть некий набор навыков которыми я пользуюсь и здесь, Вы можете ознакомиться с ними.",
    physic: "На данный момент я работаю репетитором по физике. Это интересно потому что предмет очень логичный и работать с детьми - здорово. Так же это позволяет периодически тренировать свою логику и иногда попадаются действительно интересные задачи. Помимо всего прочего меня интересует как происходит процесс обучения у человека, ведь я постоянно нахожусь в процессе обучения, получения новой информации.",
    printingTex: "3д принтер - инструмент, а не роскошь",
    tex3d: "Являюсь обладателем 3д принтера Anet e10. Использую 3д печать для реализации школьных проектов, а так же для личных бытовых целей. Считаю, что 3д печать - замечательное хобби, позволяющее расширить возможности крафта и очень важный инструмент для ремонта или создания крафтовых вещей для дома. Можете посмотреть мою печать в инсте или моем профиле в thingiverse, но я редко что-то выкладываю.",
    webHead: "Web программирование",
    webText: "С недавнего времени я освоил html и css, но некоторые элементы все еще гуглю. SASS пользу, но явно не знаю многие фишки, да и не думаю, что мне это пока необходимо. JS понимаю на уровне интуиции, если надо что-то обработать, типа показания кнопки, то это только копипаста с дальнейшими танцами с бубном. Этот сайт написан мной, а так же я иногда пишу сайты для управления  Esp8266/Esp32.",
    arduino_StuffHeader: "c++, arduino esp8266 и другие штуки",
    arduino_StuffText: "Несколько лет я работал педагогом доп образования, вел робототехнику на базе ардуино, сейчас перешел на esp8266. Пишу на С++ в Visual Studio Code. Знаю Git, но на базовом уровне. Необходимости ветвить проект и сращивать  ветки просто отсутствует, ссылка на мой гитхаб активна, можете ознакомиться. Помимо кодинга свободно собираю, спаиваю схемы, которые мне необходимы. При необходимости могу развести плату в EasyEDA и потом заказать ee c завода. ",
    contactHeader1: "Обратная связь",
    finalText: "Согласно вышесказанному когда я делаю какой-то проект, я натыкаюсь на смежные технологии типа JSON, MQTT, LoRa, SQL, FireBase и много другое. У меня всегда появляется желание освоить эту технологию, но у меня не хватает на это времени. И если у Вас есть интересная работа или Вам нужная в чем то моя помощь, обращайтесь.",
    contactHeader2: "Обратная связь",
    contactName: "Имя:",
    contactPhone: "Тел:",
    contactSend: "Отправить",
  },
};

// Process translation
$(function () {
  $(".translate").click(function () {
    var lang = $(this).attr("id");

    $(".lang").each(function (index, item) {
      $(this).text(arrLang[lang][$(this).attr("key")]);
    });
  });
});

// button translate show/hide
function RusOn() {
  document.getElementById("rus").style.display = "none";
  document.getElementById("eng").style.display = "block";
} function EngOn() {
  document.getElementById("eng").style.display = "none";
  document.getElementById("rus").style.display = "block";
}
