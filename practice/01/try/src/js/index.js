(function() {
    const company = {
        company_id: 1234,
        company_name: '会社名'
    };
    const article = {
        article_id: 9876,
        article_title: 'タイトル'
    };

    console.log(company);
    console.log(article);

    const mergeObj = {...company, ...article };
    console.log(mergeObj);
})()