exports.wait = () =>{
return `⏳ Mohon tunggu sebentar`
}

exports.error = () =>{
return `❎ Error !!`
}

exports.very = (a,b,c,e,f) =>{
return `*⬡─〔  VERIFIKASI BERHASIL  〕─⬡*

◦ Nama : ${a}
◦ Id : ${b}
◦ Umur : ${c}
◦ Seri : ${e}
◦ Limit : ${f}`
}

exports.menuu = (a,b,c,d,e,f) =>{
return `${a} ${b}

╭─〔  BOT INFO  〕─⬡
│◦ Library : ${c}
│◦ Owner : ${d}
│◦ Runtime : ${e}
│◦ Terdaftar : ${f}
╰─────────┈ `
}

exports.noLimit = () =>{
return `Limit harian kamu sudah habis, limit akan reset setiap jam 00:00`
}

exports.done = () =>{
return `✅ Done`
}

exports.noAdmin = () =>{
return `Kamu bukan admin !!`
}

exports.botAdmin = () => {
return `Bot Bukan Admin !!`
}

exports.group = () => {
return `Perintah Ini Hanya Bisa Digunakan Di Group !!`
}

exports.owner = () =>{
return `Perintah Ini Hanya Bisa Digunakan Oleh Owner !!`
}

exports.chat = () =>{
return `Perintah Ini Hanya Bisa Digunakan Di Private Chat !!`
}

exports.admin = () =>{
return `Perintah Ini Hanya Bisa Digunakan Oleh Admin Grup`
}

exports.premium = () =>{
return `Akses Premium Diperlukan Untuk Fitur Ini`
}

exports.daftar = () =>{
return `Silahkan Verifikasi Terlebih Dahulu Sebelum Memakai Fitur Bot`
}

exports.linkAdmin = () =>{
return `Untung Admin 🗿`
}

exports.linkGc = () =>{
return `Nice 🗿`
}

exports.chatOwner = (botName) =>{
return `Itu ownerku bukan nomer robot, Owner hanya menjawab seputar *${botName}.* Utamakan chat to the point`
}

exports.noTeks = () =>{
return `Masukkan Teks !! `
}

exports.noLink = (command) =>{
return `Harap Sertakan Link
Format: .${command} _link_`
}

exports.noQuery = () =>{
return `Masukkan Query`
}

exports.smeme = (prefix,command) =>{
return `kirim gambar dengan caption ${prefix+command} atau balas gambar yang sudah dikirim`
}

exports.smeme2 = (prefix,command) =>{
return `kirim gambar dengan caption ${prefix+command} teks1+teks2 atau balas gambar yang sudah dikirim`
}

exports.apakah = (command) =>{
return `Contoh Penggunaan : .${command} text\n*.${command}* saya wibu`
}

exports.bagaimanakah = (command) =>{
return `Contoh Penggunaan : .${command} text\n*.${command}* cara menjadi wibu`
}

exports.kapanka = () =>{
return `Contoh Penggunaan : .kapankah text\n*.kapankah saya menjadi wibu*`
}

exports.bisakah = (prefix,command) =>{
return `Contoh Penggunaan : ${prefix}${command} emoji1+emoji2\n*${prefix}${command} 😭+😋*`
}

exports.mix2 = (prefix,command) =>{
return `Example : ${prefix + command} 😅`
}

exports.mix = (command) =>{
return `Contoh Penggunaan : ${command} emoji1+emoji2\ncontoh : .${command} 😜+😅`
}

exports.noMoji = () =>{
return `Itu Bukan Emoji`
}

exports.stik = (command) =>{
return `Kirim gambar dengan caption .${command} atau balas gambar yang sudah dikirim`
}

exports.mediaf = () =>{
return `Contoh Penggunaan : .mediafire link\n*.mediafire https://www.mediafire.com/file/451l493otr6zca4/V4.zip/file*`
}

exports.ytdl = (prefix,command) =>{
return `Contoh Penggunaan : ${prefix+command} link\n*${prefix+command} https://youtube.com/watch?v=Kkrryjr5_fU*`
}

exports.footer = () =>{
return `Contoh Penggunaan : .setfooter teks\n*.setfooter arulbot*`
}

exports.setli = () =>{
return `Contoh Penggunaan : .setlink link\n*.setlink https://github.com/Arulllllllllllll*`
}

exports.spcl = (command) =>{
return `Contoh Penggunaan : .${command} nomornya\n*.${command} 6289685632587*`
}

exports.audioc = (prefix,command) =>{
return `Reply Audio Yang Ingin Diubah Dengan Caption *${prefix+command}*`
}

exports.stc = () =>{
return `Kamu Tidak Didalam Roomchat, Silahkan Buat Room Terlebih Dahulu.

*Format :*
.menfess nomor|nama|pesan

*Contoh :*
.menfess 62895340684706|bot|hai

*Note:*
62895340684706 - benar (✅)
+62 895 3406 84706 - salah (❌)
`
}

exports.room1 = () =>{
return `[✓] Berhasil Memberhentikan Chat`
}

exports.room2 = () =>{
return `[✓] Room Chat Telah Dihentikan\nOleh Teman Chat Kamu👤`
}

exports.donedb = () =>{
return `Berhasil Membersihkan database.json & menfess.json`
}

exports.premm = (command) =>{
return `Contoh : .${command} 628xxx`
}

exports.ttdb = () =>{
return `User Tersebut Tidak Premium`
}

exports.tdb = () =>{
return `User Tersebut Tidak Terdaftar Di Database`
}

exports.forDaftar = (command,pushname) =>{
return `Format : .${command} nama,umur\nExample : .${command} ${pushname},18`
}

exports.nomen = () =>{
return `Kamu Sedang Didalam Roomchat!! Ketik *.stopchat* Untuk Menghapus Sesi Chat.`
}

exports.menpes = (prefix,command) =>{
return `Format :
${prefix+command} nmr tujuan|nama samaran|pesan lu

Contoh
${prefix+command} 62895340684706|bot|hai

Note :
Berawal Dari 628xxx Tanpa Spasi
62895340684706 - benar (✅)
+62 895 3406 84706 - salah (❌)
62 895 3406 84706 - salah (❌)
`
}

exports.hisi = (prefix,command,pushname) =>{
return `Harus Di Isi Semua !!\nex : ${prefix+command} 62895340684706|${pushname}|hallo`
}

exports.mese = () =>{
return `Menfes Ke Nomor Sendiri:V\nCapek Ya? Semangat🗿`
}

exports.umen = () =>{
return `Menfess Kamu Sudah Terkirim, Moga Aja Dibales🗿`
}

let A = '╭──⬡ '
let B = ''
let C = '├ ○ '
let D = '╰─────────┈ ⳻⳻\n'

exports.listmenu = (prefix,no) => {
return`${A}*Main Menu*${B}
${C}${prefix}afk
${C}${prefix}auto
${C}${prefix}dashboard 
${C}${prefix}reverse
${C}${prefix}server
${C}${prefix}song
${C}${prefix}sound
${C}${prefix}server
${C}${prefix}profile
${C}${prefix}menu
${C}${prefix}allmenu
${C}${prefix}allmenu2
${C}${prefix}rules
${C}${prefix}owner
${C}${prefix}infobot
${C}${prefix}donasi
${C}${prefix}sewabot
${C}${prefix}groupbot
${C}${prefix}respon
${D}
${A}*Anonymous Menu*${B}
${C}${prefix}buatroom 
${C}${prefix}room 
${C}${prefix}stopchat
${C}${prefix}confes
${C}${prefix}menfess 
${C}${prefix}menfess_gambar
${D}
${A}*User Menu*${B}
${C}${prefix}profile
${C}${prefix}verify
${C}${prefix}report
${C}${prefix}request
${C}${prefix}limit
${C}${prefix}limituser
${C}${prefix}menfess
${C}${prefix}buatroom
${C}${prefix}cekprem
${C}${prefix}daftarprem
${C}${prefix}changename
${C}${prefix}changeage
${D}
${A}*Download Menu*${B}
${C}${prefix}ssweb
${C}${prefix}ssweb2
${C}${prefix}tiktok
${C}${prefix}igphoto
${C}${prefix}igvideo
${C}${prefix}facebook
${C}${prefix}ytplay
${C}${prefix}ytsearch 
${C}${prefix}ytmp3
${C}${prefix}ytmp4
${C}${prefix}gitclone
${C}${prefix}mediafire
${D}
${A}*AI Menu*${B}
${C}${prefix}ai
${C}${prefix}jadianime
${C}${prefix}art
${C}${prefix}comics
${C}${prefix}disney
${C}${prefix}jojo
${C}${prefix}palette
${C}${prefix}retouch
${C}${prefix}yasuo
${C}${prefix}cartoon
${C}${prefix}arcane
${D}
${A}*Search Menu*${B}
${C}${prefix}ai
${C}${prefix}pixif
${C}${prefix}gimg
${C}${prefix}pinterest
${C}${prefix}kbbi
${C}${prefix}lirik
${D}
${A}*Group Menu*${B}
${C}${prefix}polling
${C}${prefix}fitnah
${C}${prefix}delete
${C}${prefix}tagall
${C}${prefix}hidetag
${C}${prefix}setdesc
${C}${prefix}linkgrup
${C}${prefix}infogroup
${C}${prefix}setppgrup
${C}${prefix}setnamegrup
${C}${prefix}group 
${C}${prefix}antilink 
${C}${prefix}welcome 
${C}${prefix}kick 
${C}${prefix}demote 
${C}${prefix}promote 
${D}
${A}*Kerang Menu*${B}
${C}${prefix}kerang
${C}${prefix}apakah
${C}${prefix}bagaimanakah
${C}${prefix}bisakah
${C}${prefix}kapankah
${D}
${A}*Fun Menu*${B}
${C}${prefix}truth
${C}${prefix}dare
${C}${prefix}fitnah
${D}
${A}*Anime Menu*${B}
${C}${prefix}loli
${C}${prefix}milf
${C}${prefix}husbu
${C}${prefix}cosplay
${C}${prefix}akira
${C}${prefix}akiyama
${C}${prefix}ana
${C}${prefix}asuna
${C}${prefix}ayuzawa
${C}${prefix}boruto
${C}${prefix}chitoge
${C}${prefix}deidara
${C}${prefix}doraemon
${C}${prefix}elaina
${C}${prefix}emilia
${C}${prefix}erza
${C}${prefix}gremory
${C}${prefix}hestia
${C}${prefix}hinata
${C}${prefix}inori
${C}${prefix}isuzu
${C}${prefix}itachi
${C}${prefix}itori
${C}${prefix}kaga
${C}${prefix}kagura
${C}${prefix}kakasih
${C}${prefix}kaori 
${C}${prefix}keneki
${C}${prefix}konachan
${C}${prefix}kotori
${C}${prefix}kurumi
${C}${prefix}madara
${C}${prefix}mikasa
${C}${prefix}miku
${C}${prefix}minato
${C}${prefix}naruto
${C}${prefix}nezuko
${C}${prefix}onepiece
${C}${prefix}pokemon
${C}${prefix}rize
${C}${prefix}sagiri
${C}${prefix}sakura
${C}${prefix}sasuke
${C}${prefix}sfw
${C}${prefix}shina
${C}${prefix}shinka
${C}${prefix}shizuka
${C}${prefix}shota
${C}${prefix}toukachan
${C}${prefix}tsunade
${C}${prefix}yuki 
${D}
${A}*Sticker Menu*${B}
${C}${prefix}sticker
${C}${prefix}take
${C}${prefix}wm
${C}${prefix}smeme
${C}${prefix}smeme2
${C}${prefix}doge
${C}${prefix}among
${C}${prefix}mukalu
${C}${prefix}animestick
${C}${prefix}animegif
${C}${prefix}paimon
${C}${prefix}patrickgif
${C}${prefix}random
${C}${prefix}patrick
${D}
${A}*Cek Menu*${B}
${C}${prefix}cekwaras
${C}${prefix}cantikcek
${C}${prefix}cekcantik 
${C}${prefix}cekganteng 
${C}${prefix}ceksange
${C}${prefix}cekgay
${C}${prefix}ceklesbi
${C}${prefix}cektolol
${C}${prefix}cekpintar
${C}${prefix}cekbodoh
${C}${prefix}cekgoblok
${C}${prefix}cekstres
${D}
${A}*Stalk Menu*${B}
${C}${prefix}stalkig
${C}${prefix}stalktiktok
${D}
${A}*Rpg Menu*${B}
${C}${prefix}slot
${D}
${A}*Store Menu*${B}
${C}${prefix}dellist 
${C}${prefix}addlist 
${C}${prefix}update 
${C}${prefix}done 
${C}${prefix}proses 
${C}${prefix}list 
${C}${prefix}shop 
${D}
${A}*Broadcast Menu*${B}
${C}${prefix}bc2
${C}${prefix}bctext 
${C}${prefix}bcuser 
${C}${prefix}bcloc 
${C}${prefix}bclink 
${C}${prefix}bcvideo 
${C}${prefix}bcimage 
${C}${prefix}bcaudio 
${C}${prefix}bcvn 
${D}
${A}*18+ Menu*${B}
${C}${prefix}bkpsearch
${C}${prefix}bkpdl
${C}${prefix}bkpimg
${C}${prefix}doujinsearch
${C}${prefix}doujindl
${D}
${A}*Nsfw Menu*${B}
${C}${prefix}ahegao
${C}${prefix}ass
${C}${prefix}bdsm
${C}${prefix}blowjob
${C}${prefix}cuckold
${C}${prefix}cum
${C}${prefix}femdom
${C}${prefix}foot
${C}${prefix}gangbang
${C}${prefix}gifs
${C}${prefix}glasses
${C}${prefix}hentai
${C}${prefix}kawaii
${C}${prefix}manga
${C}${prefix}masturbation
${C}${prefix}neko2
${C}${prefix}nekonime
${C}${prefix}nsfw2
${C}${prefix}orgy
${C}${prefix}panties
${C}${prefix}pussy
${C}${prefix}tentacles
${C}${prefix}thighs
${C}${prefix}zettai
${D}
${A}*Random Menu*${B}
${C}${prefix}senja
${C}${prefix}motivasi
${C}${prefix}nurhadi
${C}${prefix}ngawur
${C}${prefix}galau
${C}${prefix}gombal
${C}${prefix}nyindir
${C}${prefix}fiersa
${C}${prefix}bacot
${C}${prefix}quotes
${C}${prefix}bucin
${C}${prefix}fakta
${C}${prefix}crinj
${C}${prefix}quotes
${D}
${A}*Asupan Menu*${B}
${C}${prefix}asupan
${C}${prefix}cecan
${C}${prefix}cecan2
${C}${prefix}china
${C}${prefix}cogan
${C}${prefix}indonesia
${C}${prefix}japan
${C}${prefix}korea
${C}${prefix}malaysia
${C}${prefix}thailand
${C}${prefix}vietnam
${C}${prefix}santuy
${C}${prefix}bocil
${C}${prefix}harley
${C}${prefix}storywa
${C}${prefix}anony
${D}
${A}*Convert Menu*${B}
${C}${prefix}toqr
${C}${prefix}tourl
${C}${prefix}toimg
${C}${prefix}tomp3
${C}${prefix}toaudio
${C}${prefix}tomp4
${C}${prefix}emojimix
${C}${prefix}emojmix2
${D}
${A}*Bug Menu*${B}
${C}${prefix}sendbug 
${C}${prefix}bugpc
${C}${prefix}philips 
${C}${prefix}philips2 
${C}${prefix}philips3 
${C}${prefix}santet
${C}${prefix}santet2 
${C}${prefix}santet3 
${C}${prefix}virtex 
${C}${prefix}virtex2 
${C}${prefix}virtex3 
${C}${prefix}bug1 
${C}${prefix}bug2 
${C}${prefix}bug3 
${C}${prefix}bug4 
${C}${prefix}bug5 
${D}
${A}*Audio Menu*${B}
${C}${prefix}song
${C}${prefix}sound
${C}${prefix}fat
${C}${prefix}fast
${C}${prefix}slow
${C}${prefix}bass
${C}${prefix}deep
${C}${prefix}tupai
${C}${prefix}robot
${C}${prefix}blown
${C}${prefix}smooth
${C}${prefix}earrape
${C}${prefix}reverse
${C}${prefix}nightcore
${D}
${A}*Database Menu*
${C}${prefix}senddb addlist
${C}${prefix}senddb antilink
${C}${prefix}senddb error
${C}${prefix}senddb menfess
${C}${prefix}senddb pengguna
${C}${prefix}senddb session
${C}${prefix}resetdb error
${C}${prefix}resetdb menfess
${C}${prefix}resetdb pengguna
${D}
${A}*Owner Menu*${B}
${C}${prefix}listai
${C}${prefix}resetai
${C}${prefix}setlimit
${C}${prefix}resetlimit
${C}${prefix}odaftar
${C}${prefix}join
${C}${prefix}listpc
${C}${prefix}listgc
${C}${prefix}creategc
${C}${prefix}chat
${C}${prefix}error
${C}${prefix}set
${C}${prefix}get
${C}${prefix}addprem
${C}${prefix}delprem
${C}${prefix}bc
${C}${prefix}bctext 
${C}${prefix}bcuser 
${C}${prefix}bcloc 
${C}${prefix}bclink 
${C}${prefix}bcvideo 
${C}${prefix}bcimage 
${C}${prefix}bcaudio 
${C}${prefix}bcvn 
${D}
${A}*Goblok Menu*${B}
${C}${prefix}wangy
${D}
${A}*Convert Link*${B}
${C}${prefix}tinyurl
${C}${prefix}shortlink
${C}${prefix}isgd
${C}${prefix}vurl
${C}${prefix}clp
${D}
${A}*Sound Menu*${B}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${D}
${A}*Thanks To*${B}
${C}My God
${C}My Parents 
${C}DikaArdnt
${C}David
${C}Deff
${C}Lexxy
${C}Naze
${C}Xavior
${C}ZackMans
${C}ZeeoneOfc
${C}Penyedia Module
${C}And All Support
${D}`
}

exports.mainMenu = (prefix) =>{
return `${A}*Main Menu*${B}
${C}${prefix}afk
${C}${prefix}auto
${C}${prefix}dashboard 
${C}${prefix}reverse
${C}${prefix}server
${C}${prefix}song
${C}${prefix}sound
${C}${prefix}server
${C}${prefix}profile
${C}${prefix}menu
${C}${prefix}allmenu
${C}${prefix}allmenu2
${C}${prefix}rules
${C}${prefix}owner
${C}${prefix}infobot
${C}${prefix}donasi
${C}${prefix}sewabot
${C}${prefix}groupbot
${C}${prefix}respon
${D}`
}

exports.anonyMenu = (prefix) =>{
return `${A}*Anonymous Menu*${B}
${C}${prefix}buatroom 
${C}${prefix}room 
${C}${prefix}stopchat
${C}${prefix}confes
${C}${prefix}menfess 
${C}${prefix}menfess_gambar
${D}`
}

exports.userMenu = (prefix) =>{
return `${A}*User Menu*${B}
${C}${prefix}profile
${C}${prefix}verify
${C}${prefix}report
${C}${prefix}request
${C}${prefix}limit
${C}${prefix}limituser
${C}${prefix}menfess
${C}${prefix}buatroom
${C}${prefix}cekprem
${C}${prefix}daftarprem
${C}${prefix}changename
${C}${prefix}changeage
${D}`
}

exports.donlodMenu = (prefix) =>{
return `${A}*Download Menu*${B}
${C}${prefix}ssweb
${C}${prefix}ssweb2
${C}${prefix}tiktok
${C}${prefix}igphoto
${C}${prefix}igvideo
${C}${prefix}facebook
${C}${prefix}ytplay
${C}${prefix}ytsearch 
${C}${prefix}ytmp3
${C}${prefix}ytmp4
${C}${prefix}gitclone
${C}${prefix}mediafire
${D}`
}

exports.searchMenu = (prefix) =>{
return `${A}*Search Menu*${B}
${C}${prefix}ai
${C}${prefix}pixif
${C}${prefix}gimg
${C}${prefix}pinterest
${C}${prefix}kbbi
${C}${prefix}lirik
${D}`
}

exports.grupMenu = (prefix) =>{
return `${A}*Group Menu*${B}
${C}${prefix}polling
${C}${prefix}fitnah
${C}${prefix}delete
${C}${prefix}tagall
${C}${prefix}hidetag
${C}${prefix}setdesc
${C}${prefix}linkgrup
${C}${prefix}infogroup
${C}${prefix}setppgrup
${C}${prefix}setnamegrup
${C}${prefix}group 
${C}${prefix}antilink 
${C}${prefix}welcome 
${C}${prefix}kick 
${C}${prefix}demote 
${C}${prefix}promote 
${D}`
}

exports.kerangMenu = (prefix) =>{
return `${A}*Kerang Menu*${B}
${C}${prefix}kerang
${C}${prefix}apakah
${C}${prefix}bagaimanakah
${C}${prefix}bisakah
${C}${prefix}kapankah
${D}`
}

exports.funMenu = (prefix) =>{
return `${A}*Fun Menu*${B}
${C}${prefix}truth
${C}${prefix}dare
${C}${prefix}fitnah
${D}`
}

exports.animeMenu = (prefix) =>{
return `${A}*Anime Menu*${B}
${C}${prefix}loli
${C}${prefix}milf
${C}${prefix}husbu
${C}${prefix}cosplay
${C}${prefix}akira
${C}${prefix}akiyama
${C}${prefix}ana
${C}${prefix}asuna
${C}${prefix}ayuzawa
${C}${prefix}boruto
${C}${prefix}chitoge
${C}${prefix}deidara
${C}${prefix}doraemon
${C}${prefix}elaina
${C}${prefix}emilia
${C}${prefix}erza
${C}${prefix}gremory
${C}${prefix}hestia
${C}${prefix}hinata
${C}${prefix}inori
${C}${prefix}isuzu
${C}${prefix}itachi
${C}${prefix}itori
${C}${prefix}kaga
${C}${prefix}kagura
${C}${prefix}kakasih
${C}${prefix}kaori 
${C}${prefix}keneki
${C}${prefix}konachan
${C}${prefix}kotori
${C}${prefix}kurumi
${C}${prefix}madara
${C}${prefix}mikasa
${C}${prefix}miku
${C}${prefix}minato
${C}${prefix}naruto
${C}${prefix}nezuko
${C}${prefix}onepiece
${C}${prefix}pokemon
${C}${prefix}rize
${C}${prefix}sagiri
${C}${prefix}sakura
${C}${prefix}sasuke
${C}${prefix}sfw
${C}${prefix}shina
${C}${prefix}shinka
${C}${prefix}shizuka
${C}${prefix}shota
${C}${prefix}toukachan
${C}${prefix}tsunade
${C}${prefix}yuki 
${D}`
}

exports.sticMenu = (prefix) =>{
return `${A}*Sticker Menu*${B}
${C}${prefix}sticker
${C}${prefix}take
${C}${prefix}smeme
${C}${prefix}smeme2
${C}${prefix}wm
${C}${prefix}doge
${C}${prefix}among
${C}${prefix}mukalu
${C}${prefix}animestick
${C}${prefix}animegif
${C}${prefix}paimon
${C}${prefix}patrickgif
${C}${prefix}random
${C}${prefix}patrick
${D}`
}

exports.cekMenu = (prefix) =>{
return `${A}*Cek Menu*${B}
${C}${prefix}cekwaras
${C}${prefix}cantikcek
${C}${prefix}cekcantik 
${C}${prefix}cekganteng 
${C}${prefix}ceksange
${C}${prefix}cekgay
${C}${prefix}ceklesbi
${C}${prefix}cektolol
${C}${prefix}cekpintar
${C}${prefix}cekbodoh
${C}${prefix}cekgoblok
${C}${prefix}cekstres
${D}`
}

exports.stalkMenu = (prefix) =>{
return `${A}*Stalk Menu*${B}
${C}${prefix}stalkig
${C}${prefix}stalktiktok
${D}`
}

exports.rpgMenu = (prefix) =>{
return `${A}*Rpg Menu*${B}
${C}${prefix}slot
${D}`
}

exports.storeMenu = (prefix) =>{
return `${A}*Store Menu*${B}
${C}${prefix}dellist 
${C}${prefix}addlist 
${C}${prefix}update 
${C}${prefix}done 
${C}${prefix}proses 
${C}${prefix}list 
${C}${prefix}shop 
${D}`
}

exports.bcMenu = (prefix) =>{
return `${A}*Broadcast Menu*${B}
${C}${prefix}bc2
${C}${prefix}bctext 
${C}${prefix}bcuser 
${C}${prefix}bcloc 
${C}${prefix}bclink 
${C}${prefix}bcvideo 
${C}${prefix}bcimage 
${C}${prefix}bcaudio 
${C}${prefix}bcvn 
${D}`
}

exports.nsfwMenu = (prefix) =>{
return `${A}*Nsfw Menu*${B}
${C}${prefix}ahegao
${C}${prefix}ass
${C}${prefix}bdsm
${C}${prefix}blowjob
${C}${prefix}cuckold
${C}${prefix}cum
${C}${prefix}femdom
${C}${prefix}foot
${C}${prefix}gangbang
${C}${prefix}gifs
${C}${prefix}glasses
${C}${prefix}hentai
${C}${prefix}kawaii
${C}${prefix}manga
${C}${prefix}masturbation
${C}${prefix}neko2
${C}${prefix}nekonime
${C}${prefix}nsfw2
${C}${prefix}orgy
${C}${prefix}panties
${C}${prefix}pussy
${C}${prefix}tentacles
${C}${prefix}thighs
${C}${prefix}zettai
${D}`
}

exports.bkpMenu = (prefix) =>{
return `${A}*18+ Menu*${B}
${C}${prefix}bkpsearch
${C}${prefix}bkpdl
${C}${prefix}bkpimg
${C}${prefix}doujinsearch
${C}${prefix}doujindl
${D}`
}

exports.randomMenu = (prefix) =>{
return `${A}*Random Menu*${B}
${C}${prefix}senja
${C}${prefix}motivasi
${C}${prefix}nurhadi
${C}${prefix}ngawur
${C}${prefix}galau
${C}${prefix}gombal
${C}${prefix}nyindir
${C}${prefix}fiersa
${C}${prefix}bacot
${C}${prefix}quotes
${C}${prefix}bucin
${C}${prefix}fakta
${C}${prefix}crinj
${C}${prefix}quotes
${D}`
}

exports.asupanMenu = (prefix) =>{
return `${A}*Asupan Menu*${B}
${C}${prefix}asupan
${C}${prefix}cecan
${C}${prefix}cecan2
${C}${prefix}china
${C}${prefix}cogan
${C}${prefix}indonesia
${C}${prefix}japan
${C}${prefix}korea
${C}${prefix}malaysia
${C}${prefix}thailand
${C}${prefix}vietnam
${C}${prefix}santuy
${C}${prefix}bocil
${C}${prefix}harley
${C}${prefix}storywa
${C}${prefix}anony
${D}`
}

exports.convertMenu = (prefix) =>{
return `${A}*Convert Menu*${B}
${C}${prefix}toqr
${C}${prefix}tourl
${C}${prefix}toimg
${C}${prefix}tomp3
${C}${prefix}toaudio
${C}${prefix}tomp4
${C}${prefix}emojimix
${C}${prefix}emojmix2
${D}`
}

exports.bugMenu = (prefix) =>{
return `${A}*Bug Menu*${B}
${C}${prefix}sendbug 
${C}${prefix}bugpc
${C}${prefix}philips 
${C}${prefix}philips2 
${C}${prefix}philips3 
${C}${prefix}santet
${C}${prefix}santet2 
${C}${prefix}santet3 
${C}${prefix}virtex 
${C}${prefix}virtex2 
${C}${prefix}virtex3 
${C}${prefix}bug1 
${C}${prefix}bug2 
${C}${prefix}bug3 
${C}${prefix}bug4 
${C}${prefix}bug5 
${D}`
}

exports.audioMenu = (prefix) =>{
return `${A}*Audio Menu*${B}
${C}${prefix}song
${C}${prefix}sound
${C}${prefix}fat
${C}${prefix}fast
${C}${prefix}slow
${C}${prefix}bass
${C}${prefix}deep
${C}${prefix}tupai
${C}${prefix}robot
${C}${prefix}blown
${C}${prefix}smooth
${C}${prefix}earrape
${C}${prefix}reverse
${C}${prefix}nightcore
${D}`
}

exports.dbMenu = (prefix) =>{
return `${A}*Database Menu*
${C}${prefix}senddb addlist
${C}${prefix}senddb antilink
${C}${prefix}senddb error
${C}${prefix}senddb menfess
${C}${prefix}senddb pengguna
${C}${prefix}senddb session
${C}${prefix}resetdb error
${C}${prefix}resetdb menfess
${C}${prefix}resetdb pengguna
${D}`
}

exports.ownerMenu = (prefix) =>{
return `${A}*Owner Menu*${B}
${C}${prefix}listai
${C}${prefix}resetai
${C}${prefix}setlimit
${C}${prefix}resetlimit
${C}${prefix}odaftar
${C}${prefix}join
${C}${prefix}listpc
${C}${prefix}listgc
${C}${prefix}creategc
${C}${prefix}chat
${C}${prefix}error
${C}${prefix}set
${C}${prefix}get
${C}${prefix}addprem
${C}${prefix}delprem
${C}${prefix}bc
${C}${prefix}bctext 
${C}${prefix}bcuser 
${C}${prefix}bcloc 
${C}${prefix}bclink 
${C}${prefix}bcvideo 
${C}${prefix}bcimage 
${C}${prefix}bcaudio 
${C}${prefix}bcvn 
${D}`
}

exports.gblkMenu = (prefix) =>{
return `${A}*Goblok Menu*${B}
${C}${prefix}wangy
${D}`
}

exports.cvrtLinkMenu = (prefix) =>{
return `${A}*Convert Link*${B}
${C}${prefix}tinyurl
${C}${prefix}shortlink
${C}${prefix}isgd
${C}${prefix}vurl
${C}${prefix}clp
${D}`
}

exports.soundMenu = (prefix,no) =>{
return `${A}*Sound Menu*${B}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${D}`
}

exports.aiMenu = (prefix) =>{
return `${A}*AI Menu*${B}
${C}${prefix}ai
${C}${prefix}jadianime
${C}${prefix}art
${C}${prefix}comics
${C}${prefix}disney
${C}${prefix}jojo
${C}${prefix}palette
${C}${prefix}retouch
${C}${prefix}yasuo
${C}${prefix}cartoon
${C}${prefix}arcane
${D}`
}

exports.tqto = () =>{
return`⬡─〔  THANKS TO  〕─⬡

○ Arul
https://github.com/Arulllllllllllll

○ Adiwajshing
http://github.com/baileys

○ AtakBot
https://github.com/Atak676

○ David
http://github.com/xct007

○ Deff
https://github.com/DEFF-Y

○ DikaArdnt
https://github.com/DikaArdnt

○ Faruq
https://github.com/Faruq51

○ Hariyadin
https://github.com/dev-loverbest

○ Lexxy
https://github.com/Lexxy24

○ 4k Sanzz
https://github.com/4ksanzz

○ Miku
https://github.com/Miku21750
`
}

exports.rulesBot = (prefix) =>{
return`*── 「 RULES AND FAQ 」 ──*

1. Jangan spam bot. 🙅
2. Jangan telepon bot. ☎️
3. Jangan membandingkan bot 👍

🗯️ Bot tidak atau lambat merespon ?
➡️ Mungkin dipengaruhi oleh jaringan, signal, banned oleh Whatsapp dan beberapa asalan.

🗯️ Dimana saya bisa mendapatkan Script dari bot ini ?
➡️ Script ini bisa kalian beli ke owner Arulbot

🗯️ Boleh saya menambah ke grup?
➡️ Untuk itu tergantung dari owner bot sendiri

🗯️ Prefixnya apa ya?
➡️ Bot ini menggunakan prefix *.*

Jika sudah dipahami rules-nya, silakan ketik *.menu* untuk memulai!

⚠️ Segala kebijakan dan ketentuan bot dapat berubah kapan saja 

Terimakasih! `
}

exports.donasiBot = () =>{
return`*-------「 DONATE 」 -------*

Hai kak ☺️ 
Kalian bisa mendukung saya agar bot ini tetap up to date dengan cara donasi

Berapapun donasi kalian akan sangat berarti 👍
Buat kalian yang sudah donasi bisa kasih tau
ke owner agar bisa di masukkan ke list donasi 😊

Thanks!

• Tri : 0896-5233-3947
• Dana : 0895-3406-84706
• Saweria : https://saweria.co/arul09`
}

exports.source = () =>{
return`⬡─〔  Source Code  〕─⬡

Github:
https://tinyurl.com/2krqs7yy

Mediafire:
https://tinyurl.com/2ks5mnum
`
}

exports.sewabot = (ownerNumber) =>{
return`╭─❒ *Sewa Bot Ke Grup*
├ Rp. 5.000 / 1 Minggu
├ Rp. 10.000 / bulan
├ Rp. 20.000 / Permanen + premium 
╰──────────┈ ⳻⳻

╭─❒ *Fitur Bot*
├ Antilink 
├ Open/Close Grup 
├ Tagall
├ Hidetag 
├ Welcome 
├ Add/Kick
├ Nsfw 
├ Download
├ Dll
╰──────────┈ ⳻⳻

╭─❒ *Payment*
├ Dana : 0895-3406-84706
├ Tri : 0896-5233-3947
╰──────────┈ ⳻⳻

╭─❒ *Contact Owner*
├ wa.me/${ownerNumber}
╰──────────┈ ⳻⳻`
}

exports.buyPremium = (ownerNumber) =>{
return`╭─❒ *Paket Premium*
├ Rp.  5.000 / minggu
├ Rp. 10.000 / bulan
├ Rp. 15.000 Permanen  
╰──────────┈ ⳻⳻

╭─❒ *Keuntungan*
├ Unlock all fitur
├ Limit tanpa batas
├ Bot no delay
├ Bot on 24 jam
╰──────────┈ ⳻⳻

╭─❒ *Payment*
├ Dana : 0895-3406-84706
├ Tri : 0896-5233-3947
╰──────────┈ ⳻⳻

Tertarik? hubungi owner 
wa.me/${ownerNumber}
`
}