const { connect, disconnect } = require("./src/db/db");
const Project = require("./src/models/project-model");
async function main() {
  // await Project.deleteMany();
  const project = [
    {
      title: "Smart home",
      description:
        "ards in the VLE. There are some contentious issues in the discipline that students historically have found problematic to analyse, these topics will be used to provide a stimulus for the literature searching activity and will then form the subject of the class debates in weeks 6 and 7. Students will be required to submit a reflective report on their literature search with an annotated bibliography to demonstrate their assessment of the quality of the resources they have found.",
      gitHub: "https://github.com/cyberspacedk/Git-commands",
      url: "https://yandex.ru/pogoda/moscow?lat=55.706898&lon=37.597745",
      twitter: "https://twitter.com/kirillnemkov",
      instagram: "https://www.instagram.com/kirillnemkov/",
      facebook: "https://www.facebook.com/public/%D0%9A%D0%B8%D1%80%D0%B8%D0%BB%D0%BB-%D0%9D%D0%B5%D0%BC%D0%BA%D0%BE%D0%B2",
      image: ["https://s00.yaplakal.com/pics/pics_original/7/9/0/9197097.jpg","https://cdn22.img.ria.ru/images/07e5/04/11/1728680670_69:0:702:356_1920x0_80_0_0_52075a1fd589d6abe4a5b56f7c48d63c.png", "https://cdn22.img.ria.ru/images/07e5/04/11/1728680670_69:0:702:356_1920x0_80_0_0_52075a1fd589d6abe4a5b56f7c48d63c.png"],
      date: "July 2021 - leopards",
      likes: 37,
      hashtags: ['sadsadsa', 'sadsadsa'],
      views: 200,
    },
    {
      title: "Smart home",
      description:
        "ards in the VLE. There are some contentious issues in the discipline that students historically have found problematic to analyse, these topics will be used to provide a stimulus for the literature searching activity and will then form the subject of the class debates in weeks 6 and 7. Students will be required to submit a reflective report on their literature search with an annotated bibliography to demonstrate their assessment of the quality of the resources they have found.",
      gitHub: "https://github.com/cyberspacedk/Git-commands",
      url: "https://yandex.ru/pogoda/moscow?lat=55.706898&lon=37.597745",
      twitter: "https://twitter.com/kirillnemkov",
      instagram: "https://www.instagram.com/kirillnemkov/",
      facebook: "https://www.facebook.com/public/%D0%9A%D0%B8%D1%80%D0%B8%D0%BB%D0%BB-%D0%9D%D0%B5%D0%BC%D0%BA%D0%BE%D0%B2",
      image: ["https://s00.yaplakal.com/pics/pics_original/7/9/0/9197097.jpg","https://cdn22.img.ria.ru/images/07e5/04/11/1728680670_69:0:702:356_1920x0_80_0_0_52075a1fd589d6abe4a5b56f7c48d63c.png", "https://cdn22.img.ria.ru/images/07e5/04/11/1728680670_69:0:702:356_1920x0_80_0_0_52075a1fd589d6abe4a5b56f7c48d63c.png"],
      date: "July 2021 - leopards",
      likes: 37,
      hashtags: ['sadsadsa', 'sadsadsa'],
      views: 200,
    },
    {
      title: "Smart home",
      description:
        "ards in the VLE. There are some contentious issues in the discipline that students historically have found problematic to analyse, these topics will be used to provide a stimulus for the literature searching activity and will then form the subject of the class debates in weeks 6 and 7. Students will be required to submit a reflective report on their literature search with an annotated bibliography to demonstrate their assessment of the quality of the resources they have found.",
      gitHub: "https://github.com/cyberspacedk/Git-commands",
      url: "https://yandex.ru/pogoda/moscow?lat=55.706898&lon=37.597745",
      twitter: "https://twitter.com/kirillnemkov",
      instagram: "https://www.instagram.com/kirillnemkov/",
      facebook: "https://www.facebook.com/public/%D0%9A%D0%B8%D1%80%D0%B8%D0%BB%D0%BB-%D0%9D%D0%B5%D0%BC%D0%BA%D0%BE%D0%B2",
      image: "https://cdn22.img.ria.ru/images/07e5/04/11/1728680670_69:0:702:356_1920x0_80_0_0_52075a1fd589d6abe4a5b56f7c48d63c.png",
      date: "July 2021 - leopards",
      likes: 37,
      hashtags: ['sadsadsa', 'sadsadsa'],
      views: 200,
    },
    {
      title: "Smart home",
      description:
        "ards in the VLE. There are some contentious issues in the discipline that students historically have found problematic to analyse, these topics will be used to provide a stimulus for the literature searching activity and will then form the subject of the class debates in weeks 6 and 7. Students will be required to submit a reflective report on their literature search with an annotated bibliography to demonstrate their assessment of the quality of the resources they have found.",
      gitHub: "https://github.com/cyberspacedk/Git-commands",
      url: "https://yandex.ru/pogoda/moscow?lat=55.706898&lon=37.597745",
      twitter: "https://twitter.com/kirillnemkov",
      instagram: "https://www.instagram.com/kirillnemkov/",
      facebook: "https://www.facebook.com/public/%D0%9A%D0%B8%D1%80%D0%B8%D0%BB%D0%BB-%D0%9D%D0%B5%D0%BC%D0%BA%D0%BE%D0%B2",
      image: "https://cdn22.img.ria.ru/images/07e5/04/11/1728680670_69:0:702:356_1920x0_80_0_0_52075a1fd589d6abe4a5b56f7c48d63c.png",
      date: "July 2021 - leopards",
      likes: 37,
      hashtags: ['sadsadsa', 'sadsadsa'],
      views: 200,
    },
  ];
  await Project.insertMany(project);
}
connect();
main().then(() => {
  disconnect();
});
