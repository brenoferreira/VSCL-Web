var Speaker = require('./Speaker');
var Talk = require('./Talk');

console.log(Talk);

var Event = {
    Talks: [
        new Talk({
            id: 1,
            title: 'Programação assíncrona com C#5',
            description: 'Como programar de maneira assíncrona com as novas features do C# 5 - async e await',
            start: '10:00',
            end: '10:50',
            speaker: new Speaker({
                id: 5,
                name: 'Juan Lopes',
                twitter: '@juanplopes',
                profile: 'Desenvolvedor @intellie. Maratonista de programação.'
            })
        }),

        new Talk({
            id: 2,
            title: 'Programação funcional com F#',
            description: 'Programando no paradigma funcional com a linguagem F#',
            start: '11:00',
            end: '11:50',
            speaker: new Speaker({
                id: 2,
                name: 'Rodrigo Vidal',
                twitter: '@rodrigovidal',
                profile: 'Desenvolvedor @lambdatres. Microsoft F# MVP',
            })
        }),

        new Talk({
            id: 3,
            title: 'ALM no TFS12',
            description: 'Novas features de Application Lifecycle Management do Team Foundation Server 12',
            start: '12:00',
            end: '12:50',
            speaker: new Speaker({
                name: 'Claudio Leite',
                id: 4,
                twitter: '@claudioleite',
                profile: 'Especialista ALM @lambdatres'
            })
        }),

        new Talk({
            id: 4,
            title: 'RESTful WebAPIs com ASP.NET WebAPI',
            description: 'Como criar APIs RESTful utilizando o novo ASP.NET WebAPI.',
            start: '14:30',
            end: '15:20',
            speaker: new Speaker({
                id: 3,
                name: 'Rodrigo Andrade',
                twitter: '@rodrigobenkyo',
                profile: 'Desenvolvedor @lambdatres.',
            })
        }),

        new Talk({
            id: 5,
            title: 'Todo o poder do Windows Azure',
            description: 'Conheça a plataforma de Cloud Computing da Microsoft, o Windows Azure, e veja todas as novas possibilidades de aplicações hospedadas na nuvem',
            start: '15:30',
            end: '16:20',
            speaker: new Speaker({
                name:'Breno Ferreira',
                id: 1,
                twitter: '@breno_ferreira',
                profile: 'Desenvolvedor @lambdatres. Curte desenvolvimento web, javascript, REST e Cloud. Apple fanboy!'
            })
        }),

        new Talk({
            id: 6,
            title: 'TBD',
            description: 'TBD',
            start: '16:30',
            end: '17:20',
            speaker: new Speaker({
                name:'TBD',
                id: 6,
                twitter: 'TBD',
                profile: 'TBD'
            })
        })
    ]
};

module.exports = Event;