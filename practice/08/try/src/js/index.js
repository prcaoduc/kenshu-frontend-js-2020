(function() {
    let URL = 'https://jsonplaceholder.typicode.com/posts';

    let parentListElement = $('#list');

    let ajaxCall = $.ajax({
            url: URL,
            contentType: "application/json",
            dataType: 'json',
            // success: (json) => {
            //     $.each(json, (_, item) => {
            //         parentListElement.append(newItem(item));
            //     });
            // }
        })
        .fail((er) => { throw new Error(er); })

    ajaxCall.done((json) => {
        $.each(json, (_, item) => {
            parentListElement.append(newItem(item));
        });
    });

    const newItem = (dataItem) => {
        let item = $('<li></li>');
        item.append($('<h4>' + dataItem.title + '</h4>'));
        item.append($('<p>' + dataItem.body + '</p>'));
        return item;
    };
})();