import std from 'std'

std.read('developers.yaml').then(developers => {
  for (const dev of developers) {
    std.log(dev.name);
  }
});
