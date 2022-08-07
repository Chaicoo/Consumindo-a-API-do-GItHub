const ul = document.querySelector('ul');
const div = document.querySelector('div');

function getApiGithub() {
    fetch('https://api.github.com/users/Chaicoo/repos')
        .then(async answer => {

            if (!answer.ok) {
                throw new Error('Erro');
            }

            var data = await answer.json();

            data.map(repo => {
                let li = document.createElement('li');
                li.innerHTML = `
                    <strong><h2 id="name_repo">${repo.name.toUpperCase()}</h2></strong>
                    <span>URL: <a href="${repo.url}">${repo.url}</a></span>
                    <span>Linguagem: ${repo.language}</span>
                    <span>Data de criação:
                        ${Intl.DateTimeFormat('pt-BR').format(new Date(repo.created_at))}
                    </span>
                    <span>Data de atualização:
                        ${Intl.DateTimeFormat('pt-BR').format(new Date(repo.updated_at))}
                    </span>
                    <hr>
                    
                `;

                ul.appendChild(li);

                div.innerHTML = `
                    <img id="image" src="${repo.owner.avatar_url}" alt="${repo.owner.login}">
                    <div id="info">
                    <strong id="name">${repo.owner.login}</strong>
                    <span id="amount">${data.length} repositórios</span>
                    <span id="repo_link"><a href="${repo.owner.html_url}">github.com/Chaicoo</a></span>
                    </div>
                `;


            });

        }).catch(error => console.log(error));
};


getApiGithub();