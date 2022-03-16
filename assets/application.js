const renderResponse = (res) => {
    if (res.errors) {
        copyInput.value = "Sorry, couldn't format your URL. Try again :(";
    } else {
        copyInput.value = `${res.shortUrl}`;
    }
}

const renderRawResponse = (res) => {
    if (res.errors) {
        copyInput.value = "Sorry, couldn't format your URL. Try again :(";
    } else {
        let structuredRes = JSON.stringify(res).replace(/,/g, ", \n");
        structuredRes = `<pre>${structuredRes}</pre>`;
        copyInput.value = `${structuredRes}`;
    }
}
