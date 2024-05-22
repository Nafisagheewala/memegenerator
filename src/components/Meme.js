
import { useState, useEffect } from 'react';

export default function Meme() {
    let [allMemesData, setAllMemesData] = useState([]);
    useEffect(() => {
        async function getMeme() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json();
            setAllMemesData(data.data.memes);
        }
        getMeme();
        // fetch("https://api.imgflip.com/get_memes")
        // .then((res) => res.json())
        // .then((data) => setAllMemesData(data.data.memes))
    }, [])

    let [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        image: "http://i.imgflip.com/1bij.jpg",
    })

    // let [memeImage, setImage] = useState("http://i.imgflip.com/1bij.jpg");
    function generateMeme() {
        // const memesArr = allMemesData.data.memes;
        const randomNum = Math.floor(Math.random() * allMemesData.length);
        // url = memesArr[randomNum].url;
        // console.log(url);
        const url = allMemesData[randomNum].url;
        console.log(url);
        setMeme(prevMeme => ({
            ...prevMeme,
            image: url,
        }));
    }

    console.log(allMemesData.url);
    function handleChange(event) {
        const { name, value } = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    
    return (
        <div>
            <div className="meme">
                <div className="meme-input">
                    <p>Top text</p><br />
                    <input
                        type="text"
                        placeholder="Top text"
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange} />
                </div>
                <div className="meme-input">
                    <p>Bottom text</p><br />
                    <input type="text"
                        placeholder="Bottom text"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange} />
                </div>
            </div>
            <div className="meme-button">
                <button onClick={generateMeme}>Get a new meme image</button>
            </div>
            <div className="meme">
                <img src={meme.image} className="meme--image" alt='meme' />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}

// import { useState, useEffect } from 'react';

// export default function Meme() {
//     let [meme, setMeme] = useState({
//         topText: "",
//         bottomText: "",
//         image: "http://i.imgflip.com/1bij.jpg",
//     })
//     let [allMemes, setAllMemes] = useState([]);
//     function generateMeme() {
//         const randomNum = Math.floor(Math.random() * allMemes.length);
//         const url = allMemes[randomNum].url;
//         setMeme((prevMeme) =>({
//             ...prevMeme,
//             image : url,
//         }))
//     }
//     function handleChange(event) {
//         const {name, value} = event.target;
//         setMeme((prevMeme) => ({
//             ...prevMeme,
//             [name] : value,
//         }))
//     }
//     useEffect(() => {
//         fetch("https://api.imgflip.com/get_memes")
//         .then((res) => res.json())
//         .then((data) => setAllMemes(data.data.memes))
//     },[])
//     return (
//         <div>
//             <div className="meme">
//                 <div className="meme-input">
//                     <p>Top text</p><br />
//                     <input
//                         type="text"
//                         placeholder="Top text"
//                         name="topText"
//                         value={meme.topText}
//                         onChange={handleChange} />
//                 </div>
//                 <div className="meme-input">
//                     <p>Bottom text</p><br />
//                     <input type="text"
//                         placeholder="Bottom text"
//                         name="bottomText"
//                         value={meme.bottomText}
//                         onChange={handleChange} />
//                 </div>
//             </div>
//             <div className="meme-button">
//                 <button onClick={generateMeme}>Get a new meme image</button>
//             </div>
//             <div className="meme">
//                 <img src={meme.image} className="meme--image" alt='meme' />
//                 <h2 className="meme--text top">{meme.topText}</h2>
//                 <h2 className="meme--text bottom">{meme.bottomText}</h2>
//             </div>
//         </div>


//     )
// }