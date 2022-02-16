console.log('home js has loaded')
$.get('/hungryusers').then(function(data) {
    console.log(data);
    $('#numEntries').text(data.length)
})