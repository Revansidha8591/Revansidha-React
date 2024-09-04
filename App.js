const parent=React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"This is Revan Tag"),
         React.createElement("h2",{},"This is Aaadya Tag")   
        ]),
        React.createElement("div",{id:"child2"},
            [React.createElement("h1",{},"This is Revan Tag"),
             React.createElement("h2",{},"This is Aaadya Tag")   
            ])
    
    );

console.log(parent);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
