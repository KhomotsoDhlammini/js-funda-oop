fetch ('./data.json')       
    .then(resp => resp.json())
    .then(data => {
        const dataList = document.getElementById('data-list');
        
        //Getting items and creating a listfrom data source
        data.forEach(item => {
            const itemList = document.createComment('li')
            itemList.innerHTML= `<strong>Name:</strong> ${item.name} <br><strong>Email:</strong> ${item.email}`
            dataList.appendChild(itemList)
            console.log(itemList)
        });
    })
    .catch(error => {
        console.error('error loading data from data source', error);
    });