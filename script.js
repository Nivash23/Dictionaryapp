const Dictionary = async () => {
    let Word=document.getElementById('word')
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${Word.value}`)
    const data = await response.json();
    let List1 = document.getElementById('list');
    // let listItems1 = document.querySelector(li);
    // List1.removeChild(listItems1);
    List1.innerHTML = '';
    if (response.status == 200)
    {
        let pofspeech = document.getElementById('partsofspeech');
        pofspeech.innerText = 'PartsOfSpeech :' + data[0].meanings[0].partOfSpeech;
        let Defi = document.getElementById('defi');
        Defi.innerText = 'Definition';
        let definit = [];
        definit = data[0].meanings[0].definitions;
        let List = document.getElementById('list');
        definit.forEach(def => {
            let listItems = document.createElement('li');
            listItems.innerText = def.definition;
            List.appendChild(listItems);
        });

        }
    // console.log('hello')
}
const Form = document.getElementById('formcontainer');
Form.addEventListener('submit', (e) => {
    e.preventDefault();
    Dictionary();
})
