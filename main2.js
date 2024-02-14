import { Retroarch } from "./retroarch-core/src/Retroarch.js"
import { createRetroarch } from "./retroarch-core/src/createRetroarch.js"
//import { log } from "./log.js"

const registerUIHandlers = retroarch => {

  /* START HANDLER */
  const button = document.getElementById("start")
  button.addEventListener("click", () => {
    retroarch.start()
  })

  /* UNLOAD HANDLER*/
  const unloadBtn = document.getElementById("unload")
  unloadBtn.addEventListener("click", () => {
    console.log("unload clicked")
    retroarch.destroy()

    // remove event listeners from start button
    const startBtn = document.getElementById("start")
    startBtn.replaceWith(startBtn.cloneNode(true))
  })
}

const main = async () => {
  let rom
  //const inputLoad = document.getElementById("input")
  //inputLoad.addEventListener("change", async () => {
//alert("Abner");
  //})
  /* LOAD HANDLER */
  /*const loadBtn = document.getElementById("load")
  loadBtn.addEventListener("click", async () => {
    const core = document.getElementById("core").value

    const retroarch = await createRetroarch({
      canvas: document.getElementById("canvas"),
      coreUrl: `https://cdn.jsdelivr.net/gh/dimitrikarpov/retroarch-js/packages/retroarch-core/cores/${core}.js`,
      romBinary: rom,
      beforeLoad: () => {
        console.log("🎬🎬🎬 Starting to load core 🎬🎬🎬")
      },
      onReady: () => {
        console.log("🏋️🏋️🏋️ Core loaded and we ready to start 🏋️🏋️🏋️")
      },
      onStart: () => {
        console.log("🚀🚀🚀 ROM started 🚀🚀🚀")
      },
      onDestroy: () => {
        console.log("💀💀💀 Core destroyed succefully 💀💀💀")
      }
    })

    registerUIHandlers(retroarch)
  })*/

  

  const romInput = document.getElementById("input")
  romInput.addEventListener("change", async function() {
    const url = new Blob([this.files[0]])
  
                const parts = input.files[0].name.split(".")

                const core = await (async (ext) => {
                    if (["fds", "nes", "unif", "unf"].includes(ext))
                        return "nes"

                    if (["smc", "fig", "sfc", "gd3", "gd7", "dx2", "bsx", "swc"].includes(ext))
                        return "snes"

                    if (["z64", "n64"].includes(ext))
                        return "n64"

                    if (["pce"].includes(ext))
                        return "pce"

                    if (["ngp", "ngc"].includes(ext))
                        return "ngp"

                    if (["ws", "wsc"].includes(ext))
                        return "ws"

                    if (["col", "cv"].includes(ext))
                        return "coleco"

                    if (["d64"].includes(ext))
                        return "vice_x64sc"

                    if (["nds", "gba", "gb", "z64", "n64"].includes(ext))
                        return ext

                    return await new Promise(resolve => {
                        var coreValues = {
                            "Nintendo 64": "n64",
                            "Nintendo Game Boy": "gb",
                            "Nintendo Game Boy Advance": "gba",
                            "Nintendo DS": "nds",
                            "Nintendo Entertainment System": "nes",
                            "Super Nintendo Entertainment System": "snes",
                            "PlayStation": "psx",
                            "Virtual Boy": "vb",
                            "Sega Mega Drive": "segaMD",
                            "Sega Master System": "segaMS",
                            "Sega CD": "segaCD",
                            "Atari Lynx": "lynx",
                            "Sega 32X": "sega32x",
                            "Atari Jaguar": "jaguar",
                            "Sega Game Gear": "segaGG",
                            "Sega Saturn": "segaSaturn",
                            "Atari 7800": "atari7800",
                            "Atari 2600": "atari2600",
                            "NEC TurboGrafx-16/SuperGrafx/PC Engine": "pce",
                            "NEC PC-FX": "pcfx",
                            "SNK NeoGeo Pocket (Color)": "ngp",
                            "Bandai WonderSwan (Color)": "ws",
                            "ColecoVision": "coleco",
                            "Commodore 64": "vice_x64sc",
                            "Commodore 128": "vice_x128",
                            "Commodore VIC20": "vice_xvic",
                            "Commodore Plus/4": "vice_xplus4",
                            "Commodore PET": "vice_xpet"
                        }

                        const cores = Object.keys(coreValues).sort().reduce(
                            (obj, key) => { 
                                obj[key] = coreValues[key]; 
                                return obj;
                            }, 
                            {}
                        );

                        const button = document.createElement("button")
                        const select = document.createElement("select")

                        for (const type in cores) {
                            const option = document.createElement("option")

                            option.value = cores[type]
                            option.textContent = type
                            select.appendChild(option)
                        }

                        button.onclick = () => resolve(select[select.selectedIndex].value)
                        button.textContent = "Load game"
                        box.innerHTML = ""

                        box.appendChild(select)
                        box.appendChild(button)
                    })
                })(parts.pop())
                
                const div = document.createElement("div")
                const sub = document.createElement("div")
                const script = document.createElement("script")

                sub.id = "game"
                div.id = "display"

                const top = document.getElementById("top");
                top.remove();
                box.remove()
                div.appendChild(sub)
                document.body.appendChild(div)
                //alert();
                window.EJS_player = "#game";
                window.EJS_gameName = parts.shift();
                window.EJS_biosUrl = "";
                window.EJS_gameUrl = url;
                window.EJS_core = core;
                window.EJS_pathtodata = "data/";
                window.nome = "Abner";
                window.EJS_startOnLoaded = true;
                window.EJS_DEBUG_XX = enableDebug;
                window.EJS_disableDatabases = true;
                window.EJS_threads = enableThreads;
                //window.EJS_language = "pt-BR";

               // script.src = "js/loader.js";
               // document.body.appendChild(script);
//alert(getCore(false,core));
const buff = await this.files[0].arrayBuffer()
rom = new Uint8Array(buff)

const retroarch = await createRetroarch({
  canvas: document.getElementById("canvas"),
  coreUrl: `https://predadorbr.github.io/retroarch-js/data/cores/${getCore(false,core)}_libretro.js`,
  romBinary: rom,
  beforeLoad: () => {
    console.log("🎬🎬🎬 Starting to load core 🎬🎬🎬")
  },
  onReady: () => {
    console.log("🏋️🏋️🏋️ Core loaded and we ready to start 🏋️🏋️🏋️")
   
 
  },
  onStart: () => {
    console.log("🚀🚀🚀 ROM started 🚀🚀🚀")
  },
  onDestroy: () => {
    console.log("💀💀💀 Core destroyed succefully 💀💀💀")
  }
})


   
  })
}

const getCore=  (generic,core) => {
  if (generic) {
    const options = {
        'a5200': 'atari5200',
        'beetle_vb': 'vb',
        'desmume': 'nds',
        'desmume2015': 'nds',
        'fbalpha2012_cps1': 'arcade',
        'fbalpha2012_cps2': 'arcade',
        'fbneo': 'arcade',
        'fceumm': 'nes',
        'gambatte': 'gb',
        'gearcoleco': 'coleco',
        'genesis_plus_gx': 'sega',
        'handy': 'lynx',
        'mame2003': 'mame',
        'mame2003_plus': 'mame',
        'mednafen_ngp': 'ngp',
        'mednafen_pce': 'pce',
        'mednafen_pcfx': 'pcfx',
        'mednafen_psx_hw': 'psx',
        'mednafen_wswan': 'ws',
        'melonds': 'nds',
        'mgba': 'gba',
        'mupen64plus_next': 'n64',
        'nestopia': 'nes',
        'opera': '3do',
        'parallel_n64': 'n64',
        'pcsx_rearmed': 'psx',
        'picodrive': 'sega',
        'ppsspp': 'psp',
        'prosystem': 'atari7800',
        'snes9x': 'snes',
        'stella2014': 'atari2600',
        'virtualjaguar': 'jaguar',
        'yabause': 'segaSaturn',
        'puae': 'amiga',
        'vice_x64sc': 'c64',
        'vice_x128': 'c128',
        'vice_xpet': 'pet',
        'vice_xplus4': 'plus4',
        'vice_xvic': 'vic20'
    }
    return options[core] || core;
}
const options = {
  'jaguar': 'virtualjaguar',
  'lynx': 'handy',
  'segaSaturn': 'yabause',
  'segaMS': 'smsplus',
  'segaMD': 'genesis_plus_gx',
  'segaGG': 'genesis_plus_gx',
  'segaCD': 'genesis_plus_gx',
  'sega32x': 'picodrive',
  'atari2600': 'stella2014',
  'atari7800': 'prosystem',
  'nes': 'fceumm',
  'snes': 'snes9x',
  'atari5200': 'a5200',
  'gb': 'gambatte',
  'gba': 'mgba',
  'vb': 'beetle_vb',
  'n64': 'mupen64plus_next',
  'nds': 'melonds',
  'mame': 'mame2003_plus',
  'arcade': 'fbneo',
  'psx': 'pcsx_rearmed',
  '3do': 'opera',
  'psp': 'ppsspp',
  'pce': 'mednafen_pce',
  'pcfx': 'mednafen_pcfx',
  'ngp': 'mednafen_ngp',
  'ws': 'mednafen_wswan',
  'coleco': 'gearcoleco',
  'amiga': 'puae',
  'c64': 'vice_x64sc',
  'c128': 'vice_x128',
  'pet': 'vice_xpet',
  'plus4': 'vice_xplus4',
  'vic20': 'vice_xvic'
}
//if (this.isSafari && this.isMobile && this.getCore(true) === "n64") {
 // return "parallel_n64";
//}
//if (!this.supportsWebgl2 && this.getCore(true) === "psx") {
 // return "mednafen_psx_hw";
//}
return options[core] || core;

}
main()
