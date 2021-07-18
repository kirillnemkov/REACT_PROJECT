const { connect, disconnect } = require("./src/db/db");
const Project = require("./src/models/project-model");
async function main() {
  await Project.deleteMany();
  const project = [
    {
      name: "Smart home",
      about:
        "This project will develop a module offered to level 2 Undergraduate students and will seek to develop student’s skills in collaborative working and information literacy while still advancing their discipline knowledge.",
      gitHub: "https://github.com/cyberspacedk/Git-commands",
      url: "https://yandex.ru/pogoda/moscow?lat=55.706898&lon=37.597745",
      twitter: "https://twitter.com/kirillnemkov",
      instagram: "https://www.instagram.com/kirillnemkov/",
      facebook: "https://www.facebook.com/public/%D0%9A%D0%B8%D1%80%D0%B8%D0%BB%D0%BB-%D0%9D%D0%B5%D0%BC%D0%BA%D0%BE%D0%B2",
      image: "https://s00.yaplakal.com/pics/pics_original/7/9/0/9197097.jpg",
      date: "July 2021 - leopards",
      likes: 37,
    },
    {
      name: "CRM",
      about:
        "This project will develop a module offered to level 2 Undergraduate students and will seek to develop student’s skills in collaborative working and information literacy while still advancing their discipline knowledge.",
      gitHub: "https://github.com/cyberspacedk/Git-commands",
      url: "https://yandex.ru/pogoda/moscow?lat=55.706898&lon=37.597745",
      twitter: "https://twitter.com/mikmorrone",
      instagram: "https://www.instagram.com/mi_am0re_/",
      facebook: "https://ru-ru.facebook.com/michelemorroneofficial",
      image:
        "https://sun9-77.userapi.com/impg/_lK9X_XdCkHEXZZp8mqVucWLoj0kMUTB8LUStA/Xa9I1GX33wo.jpg?size=2560x1728&quality=96&sign=c47390e0bfc192b7728399eb5addca7b&type=album",
      date: "July 2021 - leopards",
      likes: 234,
    },
    {
      name: "Made by Elbrus",
      about:
        "This project will develop a module offered to level 2 Undergraduate students and will seek to develop student’s skills in collaborative working and information literacy while still advancing their discipline knowledge.",
      gitHub: "https://github.com/cyberspacedk/Git-commands",
      url: "https://yandex.ru/pogoda/moscow?lat=55.706898&lon=37.597745",
      twitter: "https://twitter.com/kirillnemkov",
      instagram: "https://www.instagram.com/kirillnemkov/",
      facebook: "https://www.facebook.com/public/%D0%9A%D0%B8%D1%80%D0%B8%D0%BB%D0%BB-%D0%9D%D0%B5%D0%BC%D0%BA%D0%BE%D0%B2",
      image: "https://avatars.githubusercontent.com/u/64837940?v=4",
      date: "July 2021 - leopards",
      likes: 37,
    },
  ];
  await Project.insertMany(project);
}
connect();
main().then(() => {
  disconnect();
});
