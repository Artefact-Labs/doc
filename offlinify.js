const path = require('path')
const fs = require('fs')
const process = require('process')

const docsPath = process.argv[2]
let scriptList = ""

if (!docsPath) {
  throw new Error('No path specified')
}

const distPath = path.resolve(docsPath, '.vuepress', 'dist')
const assetsPath = path.resolve(distPath, 'assets')
const stylesPath = path.resolve(assetsPath, 'css')
const scriptsPath = path.resolve(assetsPath, 'js')

const processData = (filePath, process) => {
  const data = fs.readFileSync(filePath, 'utf8')
  const processesdData = process(data)

  fs.writeFileSync(filePath, processesdData, { encoding: 'utf8' })
}

const offlinifyPage = (fileName, deph, travelledPath) => {
  
  const m_scripts = fs.readdirSync(scriptsPath)
  scriptList = ""
  m_scripts.forEach(script => {
    scriptList += `<script charset="utf-8" src="./${deph}assets/js/${script}"></script>`
  })

  processData(fileName, data => {
    // Regular internal links

    const bodyMatch = data.match(/<body>(.*)<\/body>/ms)
    if (bodyMatch) {
      // If we have a link with a html at the end
      let body = bodyMatch[1].replace(/(href)="\/([^"#]*)\.html(\/#[^"]*)?"/gm, (_, p1, p2, p3) => { 
        let tmp = (`${p1}="/${p2}.html${p3 || ''}"`);
        tmp = tmp.replace('//', '/');
        
        if(travelledPath.length>0 && (tmp.match(travelledPath) !== null)){
          tmp = tmp.replace(new RegExp('(href)="' + travelledPath), '(href)="');
        } else {
          tmp = (`${p1}="${deph}${p2}.html${p3 || ''}"`)
        }
        return tmp.replace('//', '/')
      })

      // else
      body = body.replace(/(href)="\/([^"#]*)(#[^"]*)?"/gm, (_, p1, p2, p3) => { 
        let tmp = (`${p1}="/${p2}/index.html${p3 || ''}"`);
        tmp = tmp.replace('//', '/');

        if(travelledPath.length>0 && (tmp.match(travelledPath) !== null)){
          tmp = tmp.replace(new RegExp('(href)="' + travelledPath), 'href="');
        } else {
          tmp = (`${p1}="${deph}${p2}/index.html${p3 || ''}"`);
        }
        return tmp.replace('//', '/')
      })

      data = data.replace(/(<body>).*(<\/body>)/ms, `$1${body.replace(/\$/g, '$$$$')}$2`)
      data = data.replace(/(<\/head>\s*<body>)/gm, scriptList + "\n</head>\n<body>")
    }
    
    // Other links (styles and scripts)
    data = data.replace(/(href|src)="(\/[^"]*)"/g, (_, p1, p2) => {
      let tmp = `${p1}="./${deph}${p2}"`;
      return tmp.replace('//', '/')
    })

    return data
  })

  console.log(`Page offlinified: ${fileName}`)
}

const offlinifyStyle = fileName => {
  processData(path.resolve(stylesPath, fileName), data => {
    // Links to assets
    return data.replace(/url\((\/assets\/[^)]*)\)/g, 'url(../..$1)')
  })

  console.log(`Style offlinified: ${fileName}`)
}

const offlinifyAppScript = fileName => {
  processData(path.resolve(scriptsPath, fileName), data => {
    // Used for scripts path
    data = data.replace(/(Object\.prototype\.hasOwnProperty.call\([^\)]+\)},)([a-z]\.p)="\/"(\W)/g, '$1$2=window.location.href.replace(/\\/[^\\/]*$$/, "/")$3')
    // Initial page path
    data = data.replace(/window\.location\.pathname/g, '(window.location.origin+window.location.pathname).replace(/^.*?(\\/[^\\/]*)$$/,"$$1")')
    // Relative href for links overrided by vue router
    data = data.replace(/([a-z]=[a-z]\.route,)([a-z])=([a-z]\.href)(\W)/g, '$1$2=($3.startsWith("/")?"."+(/^\\/(#.*)?$$/.test($3)?$3.replace(/^\\//,"/index.html"):$3):$3)$4')
    // Absolute path for vue router navigation
    // data = data.replace(/(var )([a-z])(=window.history;)/g, '$1$2$3t=window.location.href.replace(/\\/[^\\/]*$$/,"")+(t.match(/^\\/(#.*)?$$/)?t.replace(/^\\/(.*)$$/,"/index.html$$1"):t);')
    data = data.replace(/(var )([a-z])(=window.history;)/g, '$1$2$3return;\n')

    return data
  })

  console.log(`Script offlinified: ${fileName}`)
}

const offlinifyBarsScript = fileName => {
  processData(path.resolve(scriptsPath, fileName), data => {
    // Search results links for pages
    data = data.replace(/(\.title\)&&)([a-z].push)\((s)\)(\W)/g, '$1$2(Object.assign({},$3,{path:"."+($3.path==="/"?"/index.html":$3.path)}))$4')
    // Search results links for chapters
    data = data.replace(/(\Wpath):([a-z]\.path)(\+"#"\+[a-z]\.slug)(,children:)/g, '$1:"."+($2==="/"?"/index.html":$2)$3$4')

    return data
  })

  console.log(`Script offlinified: ${fileName}`)
}


function transformPage(dPath, deph="", travelledPath="") {
  const pages = fs.readdirSync(dPath)
  pages.forEach(page => {
    let resolvePath = path.resolve(dPath, page)

    fs.stat(resolvePath, (_, stats) => {
      if (stats.isFile()) {
        if (resolvePath.endsWith('.html')) {
          offlinifyPage(resolvePath, deph, travelledPath + '/' + page)
        }
      } else {        
        transformPage(resolvePath, deph + "../", travelledPath + '/' + page)
      }
    })
  })
}

transformPage(distPath)

const styles = fs.readdirSync(stylesPath)
styles.forEach(style => offlinifyStyle(style))

const scripts = fs.readdirSync(scriptsPath)
scripts.forEach(script => {
  if (script.startsWith('app.')) {
    offlinifyAppScript(script)
  } else if (script.startsWith('2.')) {
    // Hopefully that script keeps to be named this way no matter what
    offlinifyBarsScript(script)
  }
})
