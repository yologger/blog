module.exports = function (data) {
  const fs = require("fs");
  const yamlFront = require("yaml-front-matter");

  const { title, collapsable, dirName } = data;
  const listsNesting = [""];
  const nesting = [];
  const once = [];

  function getFiles(dir, isDir) {
    const all = fs.readdirSync(dir);
    const filtersDir = all.filter(file => !file.includes("index.js"));
    const nestingObj = {
      collapsable: collapsable,
      title: "",
      children: []
    };

    filtersDir.forEach((file, index) => {
      if (file === "README.md") {
        return;
      }

      if (fs.statSync(`${dir}/${file}`).isDirectory()) {
        getFiles(`${dir}/${file}`, true);
      } else {
        const fileData = fs.readFileSync(`${dir}/${file}`);
        const { showOnSidebar } = yamlFront.loadFront(fileData);
        if (showOnSidebar) {
          const deleteSrc = dir.split("./src")[1];
          const fileName =
            file === "README.md"
              ? `${deleteSrc}/`
              : `${deleteSrc}/${file.split(".")[0]}`;

          if (isDir) {
            const splitDir = dir.split("/");
            nestingObj.title = splitDir[splitDir.length - 1].slice(3);
            nestingObj.children.push(fileName);

            if (filtersDir.length - 1 === index) {
              nesting.push(nestingObj);
            }
          } else {
            once.push(fileName);
          }
        }
      }
    });
  }

  getFiles(`./src/post/${dirName}`, false);

  return {
    [`${title}`]: listsNesting.concat(nesting).concat(once)
  };
};
