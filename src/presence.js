module.exports = function pre(client, body) {

    if (body.action === "set") {

        if (body.details === "www.youtube.com") {
            if (body.smallText === "https://www.youtube.com/") {
                body.state = "Viewing Home Page";
                client.setActivity({

                    state: body.state,
                    details: body.largeText,
                    largeImageKey: "ytdark",
                    largeImageText: body.largeText || body.title,
                    smallImageKey: 'chrome',
                    smallImageText: body.smallText,
                    instance: true,
                    type: 2,
                }).then(console.log, console.error);
            } else {
                client.setActivity({

                    state: body.state,
                    details: body.largeText,
                    startTimestamp: new Date(),
                    largeImageKey: "ytdark",
                    largeImageText: body.largeText || body.title,
                    smallImageKey: 'chrome',
                    smallImageText: body.smallText,
                    instance: true,
                    type: 2,
                    buttons: [{ label: "View", url: body.smallText }]
                }).then(console.log, console.error);
            }


        }

        else


            if (body.details === "music.youtube.com") {

                client.setActivity({

                    state: body.state,
                    details: body.largeText,
                    startTimestamp: new Date(),
                    largeImageKey: "ytdark",
                    largeImageText: body.largeText || body.title,
                    smallImageKey: 'chrome',
                    smallImageText: body.smallText,
                    instance: true,
                    type: 2,
                    buttons: [{ label: "View", url: body.smallText }]

                }).then(console.log, console.error);

            }

            else

                if (body.details === "github.com") {

                    client.setActivity({

                        state: body.state,
                        details: body.details,
                        startTimestamp: new Date(),
                        largeImageKey: "github",
                        largeImageText: body.largeText || body.title,
                        smallImageKey: 'chrome',
                        smallImageText: body.smallText.includes("search") && body.smallText.length >= 128 ? body.title : body.smallText,
                        instance: true,
                        buttons: [{ label: "Repository", url: body.smallText }]

                    }).then(console.log, console.error);

                } else {

                    client.setActivity({

                        state: body.state,
                        details: body.details,
                        startTimestamp: new Date(),
                        largeImageKey: "chrome",
                        largeImageText: body.largeText || body.title,
                        smallImageKey: 'chromeium',
                        smallImageText: body.smallText.includes("search") && body.smallText.length >= 128 ? body.title : body.smallText,
                        instance: true

                    }).then(console.log, console.error);
                }




    } else if (body.action === "clear") {
        client.clearActivity();
    }

}