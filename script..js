fetch ('./data.json')       
    .then(resp => resp.json())
    .then(data => {
        const dataList = document.getElementById('data-list');
        
        //Getting items and creating a listfrom data source
        data.array.array.forEach(item => {
            const itemList = document.createComment('li')
            itemList.innerHTML= `<strong>Name:</strong> ${item.name} <br><strong>Email:</strong> ${name.email}`
            dataList.appendChild(itemList)
        });
    })
    .catch(error => {
        console.error(error);
    });