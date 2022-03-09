var arrLang = {
  ru: {
    Logo: "About me",
    schedule: "Schedule",
    formuls: "Formulas",
    AboutMe: "About me",
    physicIntro: "General job experience",
    intro: "My name is Mironov Aleksandr. In 2018 I graduated from the Institute of Oil and Natural Gas engineering. Besides technical specifications of my institute my majority was related to IT. I did physical modeling unstable modes in pipe trucks by Matlab. I had other additional benefits during institut such as grants and scholarships. An opus magnum of such activity was a program for making mathematical calculations at an oil transport company. Working under this project I become familiar with the basics of automatization and control systems. After this I was working as a teacher of robotics based on arduino. At this job I got experience of working with microcontrollers, sensors, screens, motors etc. Here I bought a 3d printer and contributed to develop 3d printing at the studio where I worked. For now I am a freelancer: I take orders for making different arduino’s gadgets like automatization of gardens, making custom led advertisements etc. Also I still teach children arduino and physics online. My last pleasure is esp8266, for using it I learn HTML, CSS and JavaScript.",
    webHead: "Programing skills",
    webText: "I like the idea of the internet of things, like combining different electronic devices in a single control system which may control home. For using electronics elements I use esp8266 or similar microcontrollers, which I program by C++. Also for making user interfaces I use HTML, CSS and JavaScript. Since recently I have been doing websites. Additionally I use github (link is active), but just as storage for my projects.",
    printingTex: "Additional skills",
    tex3d: "Besides all my programming skills I like physics, doing online classes, preparing children for exams and helping them feel confident. I can make a parametric 3d model and print it with my 3d printer, I have Anet e10. I can 	easily make some electronic prototypes by prototyping boards and soldering. If I need some manufacturing of good quality custom PCB I do it by an online service EasyEDA. Summary I can do anything - my hobby is watching DIY YouTube content and making it by myself, I can paint, work with wood and more.",
    gallery: "Gallery",
    contactHeader1: "Contact",
    contactHeader2: "Write to me here or connect through some social network",
    message: "message:",
    contactSend: "Submit",
  },
  en: {
    Logo: "Обо мне",
    schedule: "Расписание",
    formuls: "Формулы",
    AboutMe: "Обо мне",
    physicIntro: "Основной опыт рабоыт",
    intro: "Меня зовут Миронов Александр, в 2018 я окончил институт нефти и газа. Несмотря на то что я окончил инженерную специальность, моя основная институтская деятельность была скорее связана с информационными технологиями. Я занимался физическим моделированием неустановившихся процессов в магистральных нефтепроводах. В результате обучения была разработана-программа симулятор для компании занимающиеся транспортировкой нефтепродуктов. Работая над данным проектом я ознакомился с основами алгоритмики автоматических системам управления. В конце бакалавриата я стал преподавать робототехнику для детей на базе Ардуино. На этой работе я научился работать с датчиками, моторами, микроконтроллерами, экранов и тд. Овладел навыками 3д моделирования, приобрел 3д принтер и способствовал развитию 3д печати в студии где я работал. На данный момент я работаю фрилансером, выполняю заказы на изготовление кастомных гаджетов основанных на ардуино: автоматизация для теплицы, изготовление рекламной вывески и тд. Учу детей основам ардуино онлайн. Параллельно осваиваю esp8266 и все что с этим связано, а именно HTML, CSS, JS.",
    webHead: "Навыки програмирования",
    webText: "Меня интересует интернет вещей и интеграция различных электронных устройств в единую систему управления домом. Для контроля электронных устройств я использую esp8266, которые программирую на языке С++. Для этого я так же использую HTML, css, JavaScript. GitHub к сожалению я использую в основном как хранилище для кода своих проектов.",
    printingTex: "Дополнительные скилы",
    tex3d: "Помимо программирования я увлекаюсь физикой, веду занятия онлайн, готовлю детей к экзаменам, помогаю им чувствовать себя уверенно на занятиях. Так же я владею также навыками параметрического 3д моделирования, с целью дальнейшей печати моделей на 3д принтере (являюсь обладателем Anet e10). Не испытываю сложностей с пайкой, собираю временные прототипы плат. В случае необходимости масштабирования проектов, развожу платы на онлайн сервисе EasyEDA.",
    gallery: "Галерея",
    contactHeader1: "Контакты",
    contactHeader2: "Напишите мне здесь или в соц сетях",
    message: "Сообщение:",
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
