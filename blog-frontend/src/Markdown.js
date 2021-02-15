import React, {useState} from 'react'
import "./Markdown.css"

function Markdown() {
    const labels = {
        p: "Paragraph",
        h: "Heading"
    }
    const [inputLists, setInputList] = useState([{
        input: "",
        tag: "p"
    }]);

    const handleChange = (e, index) => {
        // e.preventDefault()
        const {value} = e.target
        setInputList(prevList => prevList.map((list, i) => {
            if (i === index) {
                return {...list, input: value}
            }else {
                return list
            }
        }))
    }

    const handleForm = (e, tag) => {
        // e.preventDefault()
        setInputList([
            ...inputLists, {
                input: "",
                tag: tag
            }
        ])
    }

    console.log(inputLists)

    return (
        <div className="app__markdown">

            <div className="app__markdownButton">
                <button onClick={(e) => handleForm(e, "p")}>Add paragraph</button>
                <button onClick={(e) => handleForm(e, "h")}>Add Heading</button>
            </div>

            <div className="app__markdownForms">
                {
                    inputLists.map((inputList, i) => {
                        return (
                            <div key={i} className="app__markdownForm">
                                <label htmlFor={inputList.input}>Add {labels[inputList.tag]}</label>
                                <div classname="app__markdownFormContent">
                                {   
                                    (inputList.tag === "h") ? 
                                        (
                                            <input 
                                                type="text" 
                                                name={inputList.tag}
                                                value={inputList.input}
                                                placeholder="Enter text" 
                                                onChange={(e) => handleChange(e, i)}
                                            />
                                        ):
                                            
                                    (
                                        <textarea
                                            cols="60"
                                            rows="10" 
                                            type="text" 
                                            name={inputList.tag}
                                            value={inputList.input}
                                            placeholder="Enter text" 
                                            onChange={(e) => handleChange(e, i)}
                                        />
                                    )                                    
                                }
                                    <button>Remove</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Markdown
