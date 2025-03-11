document.addEventListener("DOMContentLoaded", function () {
    const teamSelect = document.getElementById("team-select");
    const matchResult = document.getElementById("match-result");
    const highlightVideo = document.getElementById("highlight-video");

    const teamLogo = document.getElementById("team-logo");


    const teamData = {
        "Manchester-United": {
            result: "Manchester United 1 - 1 Arsenal",
            video: "https://www.youtube.com/watch?v=4LrOC6srPkw&ab_channel=ManchesterUnited",
            logo: "manu_logo.jpg"
        },
        "Manchester-City": {
            result: "Nottingham Forrest 1 - 0 Manchester City",
            video: "https://www.youtube.com/watch?v=uAbSGH10wGA&ab_channel=ManCity",
            logo: "mancity_logo.jpg"
        },
        "Liverpool": {
            result: "Liverpool 3 - 1 Southampton",
            video: "https://www.youtube.com/watch?v=OL25VR6e-9Y&ab_channel=LiverpoolFC",
            logo: "liverpool_logo.jpg"
        },
        "Chelsea": {
            result: "Chelsea 1 - 0 Leicester City",
            video: "https://www.youtube.com/watch?v=_ay7-I18Iqk&ab_channel=ChelseaFootballClub",
            logo: "chelsea_logo.jpg"
        }
    };

    function convertToEmbed(url) {
        const videoIdMatch = url.match(/v=([^&]+)/);
        return videoIdMatch ? `https://www.youtube.com/embed/${videoIdMatch[1]}` : url;
    }

    function updateTeamInfo() {
        const selectedTeam = teamSelect.value;
        const embeddedVideoURL = convertToEmbed(teamData[selectedTeam].video);
        teamLogo.src = teamData[selectedTeam].logo;
        matchResult.innerHTML = `<h3>Last Match Result:</h3><p>${teamData[selectedTeam].result}</p>`;
        highlightVideo.innerHTML = `<h3>Match Highlights:</h3>
                                    <iframe width="560" height="315" 
                                    src="${embeddedVideoURL}" 
                                    frameborder="0" allowfullscreen></iframe>`;
    }

    teamSelect.addEventListener("change", updateTeamInfo);
    updateTeamInfo();
});
