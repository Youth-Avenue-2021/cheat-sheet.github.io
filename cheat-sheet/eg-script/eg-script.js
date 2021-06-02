let filesData = [
    {
        'fileName': 'EG Syllabus',
        'fileData': 'EG_Syllabus.pdf'
    },
    {
        'fileName': 'EG Scales 1',
        'fileData': 'Engineering_Scales_I.pdf'
    },
    {
        'fileName': 'EG Scales 2',
        'fileData': 'Engineering_Scales_II.pdf'
    },
    {
        'fileName': 'EG Manual',
        'fileData': 'EG_MANUAL_2021.pdf'
    },
    {
        'fileName': 'EG Curves',
        'fileData': 'Engineering_Curves_I.pdf'
    },
    {
        'fileName': 'Orthographic Projection 1',
        'fileData': 'Orthographic_Projection_I.pdf'
    },
    {
        'fileName': 'Orthographic Projection 2',
        'fileData': 'Orthographic_Projection_II.pdf'
    },
    {
        'fileName': 'SECTIONAL VIEWS Students (ppt)',
        'fileData': 'SECTIONAL_VIEWS_Students.ppt'
    }
]

const downloadMaterialsDiv = document.querySelector('.download-materials');
let waitingSeconds = 20;

function addAds() {

    let createAdDiv=document.createElement('div')
    createAdDiv.setAttribute('align','center')
    createAdDiv.setAttribute('style','width: 100%;margin:40px auto;')

    let createScript1=document.createElement('script')
    createScript1.setAttribute('async','async')
    createScript1.setAttribute('src','https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js')

    let ins=document.createElement('ins')
    ins.setAttribute('class','adsbygoogle')
    // ins.setAttribute('id','adsStyling')
    ins.setAttribute('style','display:block;width:80%;height:300px;')
    ins.setAttribute('data-ad-client','ca-pub-6036528993346308')
    ins.setAttribute('data-ad-slot','6037331449')
    ins.setAttribute('data-ad-format','auto')
    ins.setAttribute('data-full-width-responsive','true')
    
    let createScript2=document.createElement('script')
    createScript2.innerText='(adsbygoogle = window.adsbygoogle || []).push({});'

    createAdDiv.append(createScript1)
    createAdDiv.append(ins)
    createAdDiv.append(createScript2)
    downloadMaterialsDiv.append(createAdDiv)

}

function getFileData(fileName, fileData) {

    let createFileData = document.createElement('div')
    createFileData.setAttribute('class', 'saparate-eg-file flex-column')

    let createfileDesc = document.createElement('p')
    createfileDesc.setAttribute('class', 'file-desc')
    createfileDesc.innerText = fileName
    createFileData.append(createfileDesc)

    let createfileDownload = document.createElement('a')
    createfileDownload.setAttribute('class', 'eg-download-btn')
    createfileDownload.setAttribute('href', `../pdf/EG-Materials/${fileData}`)
    createfileDownload.innerText = 'Download'
    createFileData.append(createfileDownload)

    downloadMaterialsDiv.append(createFileData);

}
const progressBarTimer = document.getElementById('progress_bar_timer');
const egWaitingNote = document.getElementById('eg-waiting-note');
const waitingTimerDiv = document.querySelector('.waiting-timer-div');

let i = 0;

let timerOfInterval = setInterval(() => {
    progressBarTimer.innerText = waitingSeconds
    egWaitingNote.innerText = `Please wait for ${waitingSeconds} seconds while the data is fetched from the server to download EG-Materials...`
    if (waitingSeconds == -1) {
        waitingTimerDiv.style.display = 'none';
        document.getElementById('topAd').style.display = 'none';
        clearInterval(timerOfInterval);
    }
    waitingSeconds--
}, 1000);

setTimeout(() => {
    filesData.forEach(file => {
        getFileData(file.fileName, file.fileData)
        if (i % 2 == 0) {
            addAds()
        }
        i++
    })
}, (waitingSeconds + 2) * 1000);
