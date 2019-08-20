import React from 'react';

// Home page intro paragraph
export const introString = (<p>I love to design and make things, I value the needs of user. <br />
    My dream is to develop world changing products with passion. <br />
    I'm a hybrid geek who loves arts, workout, business and the world of tech.</p>);

// Home page skill set obj
export const skillSet = {
    "Front-end": [
        {
            tech: "React",
            level: 5
        },
        {
            tech: "CSS Module",
            level: 4
        },
        {
            tech: "Styled Component",
            level: 4
        },
        {
            tech: "SASS",
            level: 4
        },
        {
            tech: "Axure RP",
            level: 4
        }
    ],
    "Server-side": [
        {
            tech: "ASP.NET Core",
            level: 5
        },
        {
            tech: "Go",
            level: 3
        }
    ],
    "DB & DevOps": [
        {
            tech: "MSSQL",
            level: 5
        },
        {
            tech: "MongoDB",
            level: 5
        },
        {
            tech: "Azure",
            level: 5
        }
    ],
    "Others": [
        {
            tech: "Git",
            level: 5
        }
    ]
};

// Home page recent works obj
export const workSet = {
    "Streamy": {
        des: "A streaming SPA",
        techs: [
            {
                name: "Front-end",
                items: ["React", "Redux"]
            },
            {
                name: "Back-end",
                items: ["Node.js", "MongoDB"]
            }
        ],
        link: "https://github.com/sailor95/streamy"
    },
    "Mello ": {
        des: "Mock Trello SPA",
        techs: [
            {
                name: "Front-end",
                items: ["React", "Redux", "CSS module"]
            },
            {
                name: "Back-end",
                items: ["ASP.NET Core 2.2", "Azure BLOB"]
            }
        ],
        link: "https://github.com/sailor95/AspNetMvc-WebStore"
    },
    "Dave's Store": {
        des: "Web shop project",
        techs: [
            {
                name: "Front-end",
                items: ["Razor", "jQuery"]
            },
            {
                name: "Back-end",
                items: ["ASP.NET MVC 5", "MSSQL"]
            }
        ],
        link: "https://github.com/sailor95/AspNetMvc-WebStore"
    },
}