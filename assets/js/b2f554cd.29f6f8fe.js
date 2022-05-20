"use strict";(self.webpackChunkreact_note_book=self.webpackChunkreact_note_book||[]).push([[1477],{10:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"array-flat-methods","metadata":{"permalink":"/blog/array-flat-methods","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/array-flat-methods.md","source":"@site/blog/array-flat-methods.md","title":"\u6570\u7ec4\u6241\u5e73\u5316\u65b9\u6cd5","description":"es6 flat(depth)","date":"2022-05-20T05:55:54.000Z","formattedDate":"2022\u5e745\u670820\u65e5","tags":[{"label":"array","permalink":"/blog/tags/array"},{"label":"flat","permalink":"/blog/tags/flat"}],"readingTime":1.015,"truncated":false,"authors":[{"name":"jiyongjia","title":"blog author","url":"https://blog.szlife.xyz","imageURL":"https://github.com/skdream.png","key":"jsir"}],"frontMatter":{"slug":"array-flat-methods","title":"\u6570\u7ec4\u6241\u5e73\u5316\u65b9\u6cd5","authors":"jsir","tags":["array","flat"]},"nextItem":{"title":"Welcome","permalink":"/blog/welcome"}},"content":"### es6 flat(depth)\\r\\n\\r\\n``` javascript\\r\\n\\r\\nlet a = [1,[2,3]]\\r\\n\\r\\na.flat() // [1,2,3]\\r\\na.flat(1) // [1,2,3]\\r\\n\\r\\n```\\r\\n\\r\\n### for \u5faa\u73af\\r\\n\\r\\n``` javascript\\r\\nlet a = [1,[2,3]]\\r\\n\\r\\nfunction flatten(arr){\\r\\n\\r\\n  let arr = [];\\r\\n  for(var i = 0; i<a.length; i++){\\r\\n\\r\\n    if( Array.isArray(arr[i]) ){\\r\\n      arr.concat(...arr[i])\\r\\n    }else{\\r\\n      arr.push(arr[i])\\r\\n    }\\r\\n  }\\r\\n\\r\\n  return arr;\\r\\n}\\r\\n\\r\\n\\r\\n```\\r\\n\\r\\n### while \u5faa\u73af\\r\\n\\r\\n``` javascript\\r\\n\\r\\nlet arr = [1,[2,3],[4,5,6]];\\r\\n\\r\\nfunction flatten(arr){\\r\\n\\r\\n  while( arr.some( (item) => Array.isArray(item) )){\\r\\n\\r\\n    arr = [].concat(...arr);\\r\\n  }\\r\\n\\r\\n  return arr;\\r\\n\\r\\n}\\r\\n\\r\\nflatten(arr) // [1,2,3,4,5,6]\\r\\n\\r\\n\\r\\n```\\r\\n\\r\\n\\r\\n### ES6 reduce\\r\\n\\r\\n\\r\\n``` javascript\\r\\n\\r\\nvar arr = [1,[2,3],[4,5,6]]\\r\\n\\r\\nfunction flatten(arr){\\r\\n\\r\\n return arr.reduce((res,current) => {\\r\\n\\r\\n    return res.concat( Array.isArray(current) ? flatten(current) : current);\\r\\n    \\r\\n  },[])\\r\\n\\r\\n}\\r\\n\\r\\nconsole.log(flatten(arr)) // Array [1, 2, 3, 4, 5, 6]\\r\\n```\\r\\n\\r\\n### \u4f7f\u7528 stack \u65e0\u9650\u53cd\u5d4c\u5957\u591a\u5c42\u5d4c\u5957\u6570\u7ec4\\r\\n\\r\\n``` javascript\\r\\n\\r\\nvar arr = [1,[2,3],[4,5,6]]\\r\\n\\r\\nfunction flatten(arr) {\\r\\n  var stack = [...arr];\\r\\n\\r\\n  var res = [];\\r\\n  while(stack.length){\\r\\n    \\r\\n    let first = stack.shift();\\r\\n    if( Array.isArray(first) ){\\r\\n      stack.unshift(...first);\\r\\n    }else{\\r\\n      res.push(first);\\r\\n    }\\r\\n\\r\\n  }\\r\\n  return res;\\r\\n}\\r\\n\\r\\nconsole.log(flatten( arr)) //  Array [1, 2, 3, 4, 5, 6]\\r\\n```\\r\\n\\r\\n\\r\\n### \u6570\u7ec4\u5168\u4e3a\u6570\u5b57\uff0c\u53ef\u4ee5\u4f7f\u7528join(), toString();\\r\\n\\r\\n``` javascript\\r\\nvar arr = [1,[2,3],[4,5,6]]\\r\\nfunction flatten(arr){\\r\\n // return arr.toString().split(\',\').map(item => +item)\\r\\n\\r\\n  return arr.join(\',\').split(\',\').map(item => +item)\\r\\n}\\r\\n\\r\\nconsole.log(flatten( arr))\\r\\n\\r\\n```"},{"id":"welcome","metadata":{"permalink":"/blog/welcome","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-08-26-welcome/index.md","source":"@site/blog/2021-08-26-welcome/index.md","title":"Welcome","description":"Docusaurus blogging features are powered by the blog plugin.","date":"2021-08-26T00:00:00.000Z","formattedDate":"2021\u5e748\u670826\u65e5","tags":[{"label":"facebook","permalink":"/blog/tags/facebook"},{"label":"hello","permalink":"/blog/tags/hello"},{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":0.405,"truncated":false,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","imageURL":"https://github.com/slorber.png","key":"slorber"},{"name":"Yangshun Tay","title":"Front End Engineer @ Facebook","url":"https://github.com/yangshun","imageURL":"https://github.com/yangshun.png","key":"yangshun"}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":["slorber","yangshun"],"tags":["facebook","hello","docusaurus"]},"prevItem":{"title":"\u6570\u7ec4\u6241\u5e73\u5316\u65b9\u6cd5","permalink":"/blog/array-flat-methods"},"nextItem":{"title":"MDX Blog Post","permalink":"/blog/mdx-blog-post"}},"content":"[Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).\\n\\nSimply add Markdown files (or folders) to the `blog` directory.\\n\\nRegular blog authors can be added to `authors.yml`.\\n\\nThe blog post date can be extracted from filenames, such as:\\n\\n- `2019-05-30-welcome.md`\\n- `2019-05-30-welcome/index.md`\\n\\nA blog post folder can be convenient to co-locate blog post images:\\n\\n![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)\\n\\nThe blog supports tags as well!\\n\\n**And if you don\'t want a blog**: just delete this directory, and use `blog: false` in your Docusaurus config."},{"id":"mdx-blog-post","metadata":{"permalink":"/blog/mdx-blog-post","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-08-01-mdx-blog-post.mdx","source":"@site/blog/2021-08-01-mdx-blog-post.mdx","title":"MDX Blog Post","description":"Blog posts support Docusaurus Markdown features, such as MDX.","date":"2021-08-01T00:00:00.000Z","formattedDate":"2021\u5e748\u67081\u65e5","tags":[{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":0.175,"truncated":false,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","imageURL":"https://github.com/slorber.png","key":"slorber"}],"frontMatter":{"slug":"mdx-blog-post","title":"MDX Blog Post","authors":["slorber"],"tags":["docusaurus"]},"prevItem":{"title":"Welcome","permalink":"/blog/welcome"},"nextItem":{"title":"Long Blog Post","permalink":"/blog/long-blog-post"}},"content":"Blog posts support [Docusaurus Markdown features](https://docusaurus.io/docs/markdown-features), such as [MDX](https://mdxjs.com/).\\n\\n:::tip\\n\\nUse the power of React to create interactive blog posts.\\n\\n```js\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\n```\\n\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\n\\n:::"},{"id":"long-blog-post","metadata":{"permalink":"/blog/long-blog-post","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2019-05-29-long-blog-post.md","source":"@site/blog/2019-05-29-long-blog-post.md","title":"Long Blog Post","description":"This is the summary of a very long blog post,","date":"2019-05-29T00:00:00.000Z","formattedDate":"2019\u5e745\u670829\u65e5","tags":[{"label":"hello","permalink":"/blog/tags/hello"},{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":2.05,"truncated":true,"authors":[{"name":"Endilie Yacop Sucipto","title":"Maintainer of Docusaurus","url":"https://github.com/endiliey","imageURL":"https://github.com/endiliey.png","key":"endi"}],"frontMatter":{"slug":"long-blog-post","title":"Long Blog Post","authors":"endi","tags":["hello","docusaurus"]},"prevItem":{"title":"MDX Blog Post","permalink":"/blog/mdx-blog-post"},"nextItem":{"title":"First Blog Post","permalink":"/blog/first-blog-post"}},"content":"This is the summary of a very long blog post,\\n\\nUse a `\x3c!--` `truncate` `--\x3e` comment to limit blog post size in the list view.\\n\\n\x3c!--truncate--\x3e\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"},{"id":"first-blog-post","metadata":{"permalink":"/blog/first-blog-post","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2019-05-28-first-blog-post.md","source":"@site/blog/2019-05-28-first-blog-post.md","title":"First Blog Post","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet","date":"2019-05-28T00:00:00.000Z","formattedDate":"2019\u5e745\u670828\u65e5","tags":[{"label":"hola","permalink":"/blog/tags/hola"},{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":0.12,"truncated":false,"authors":[{"name":"Gao Wei","title":"Docusaurus Core Team","url":"https://github.com/wgao19","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"}],"frontMatter":{"slug":"first-blog-post","title":"First Blog Post","authors":{"name":"Gao Wei","title":"Docusaurus Core Team","url":"https://github.com/wgao19","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"},"tags":["hola","docusaurus"]},"prevItem":{"title":"Long Blog Post","permalink":"/blog/long-blog-post"}},"content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"}]}')}}]);