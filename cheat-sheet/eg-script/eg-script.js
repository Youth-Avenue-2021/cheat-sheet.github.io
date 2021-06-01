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
let waitingSeconds = 10;

function addAds() {
    /*
    let createAd = document.createElement('div')
    // createAd.setAttribute('class', 'ads-section')
    // createAd.setAttribute('align', 'center')
    createAd.innerHTML = `
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    <!-- long-width -->
    <ins class="adsbygoogle" style="display:block;width:100%;height:300px;margin:20px auto;"
    data-ad-client="ca-pub-6036528993346308" data-ad-slot="6037331449" data-ad-format="auto"
    data-full-width-responsive="true"></ins>
    <script>
    (adsbygoogle = window.adsbygoogle || []).push({});
    </script>
    `
    downloadMaterialsDiv.append(createAd)
    */
    window.google_ad_client = "ca-pub-6036528993346308";
    window.google_ad_slot = "6037331449";
    window.google_ad_width = 200;
    window.google_ad_height = 200;

    // container is where you want the ad to be inserted
    var container = document.getElementById('ad_container');
    var w = document.write;
    document.write = function (content) {
        container.innerHTML = content;
        document.write = w;
    };

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.setAttribute('async', 'async');
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
    document.body.appendChild(script);
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
    egWaitingNote.innerText = `Please wait ${waitingSeconds} seconds for download all EG-Materials...`
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
