const { connect, disconnect } = require("./src/db/db");
const Project = require("./src/models/project-model");
async function main() {
  await Project.deleteMany();
  const project = [
    {
      name: "Smart home",
      about:
        "This project will develop a module offered to level 2 Undergraduate students and will seek to develop student’s skills in collaborative working and information literacy while still advancing their discipline knowledge. The subject librarian will be invited to conduct an inquiry-based workshop with the students at the start of the module to prepare them for a literature search activity and will also provide ongoing support for students via discussion boards in the VLE. There are some contentious issues in the discipline that students historically have found problematic to analyse, these topics will be used to provide a stimulus for the literature searching activity and will then form the subject of the class debates in weeks 6 and 7. Students will be required to submit a reflective report on their literature search with an annotated bibliography to demonstrate their assessment of the quality of the resources they have found.",
      gitHub: "https://github.com/cyberspacedk/Git-commands",
      url: "https://yandex.ru/pogoda/moscow?lat=55.706898&lon=37.597745",
      twitter: "https://twitter.com/kirillnemkov",
      instagram: "https://www.instagram.com/kirillnemkov/",
      facebook: "https://www.facebook.com/public/%D0%9A%D0%B8%D1%80%D0%B8%D0%BB%D0%BB-%D0%9D%D0%B5%D0%BC%D0%BA%D0%BE%D0%B2",
      image: "https://cdn22.img.ria.ru/images/07e5/04/11/1728680670_69:0:702:356_1920x0_80_0_0_52075a1fd589d6abe4a5b56f7c48d63c.png",
      date: "July 2021 - leopards",
      likes: 5,
    },
    {
      name: "Made by Elbrus",
      about:
        "This project will develop a module offered to level 2 Undergraduate students and will seek to develop student’s skills in collaborative working and information literacy while still advancing their discipline knowledge. The subject librarian will be invited to conduct an inquiry-based workshop with the students at the start of the module to prepare them for a literature search activity and will also provide ongoing support for students via discussion boards in the VLE. There are some contentious issues in the discipline that students historically have found problematic to analyse, these topics will be used to provide a stimulus for the literature searching activity and will then form the subject of the class debates in weeks 6 and 7. Students will be required to submit a reflective report on their literature search with an annotated bibliography to demonstrate their assessment of the quality of the resources they have found.",
      gitHub: "https://github.com/cyberspacedk/Git-commands",
      url: "https://yandex.ru/pogoda/moscow?lat=55.706898&lon=37.597745",
      twitter: "https://twitter.com/mikmorrone",
      instagram: "https://www.instagram.com/iammichelemorroneofficial/?hl=ru",
      facebook: "https://ru-ru.facebook.com/michelemorroneofficial",
      image: "https://i.pinimg.com/originals/8e/60/6d/8e606dd037c25ad8cb39f415034fe074.jpg",
      date: "July 2021 - leopards",
      likes: 371,
    },
  ];
  await Project.insertMany(project);
}
connect();
main().then(() => {
  disconnect();
});
