import React, {ChangeEvent, useEffect, useState} from 'react';
import * as C from './components/styled1/AppStyles';
import {Post} from './components/types/Post';


const App = () => { 

  const [posts, setPosts] = useState<Post[]>([]);
  const loadPosts = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();
    setPosts(json);
  }
  const [addTitleText, setAddTitleText] = useState(['']);
  const [addBodyText, setAddBodyText] = useState(['']);

  useEffect(() => {
    loadPosts();
  }, []);

  const handleAddTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddTitleText(e.target.value);
  }
  const handleAddBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAddBodyText(e.target.value);
  }
  const handleAddClick = () => {
    alert(addTitleText+' - '+addBodyText);
  }
  return(  
    <div className="
    bg-blue-900
      p-3
      w-screen
      h-11
      fixed
      top-0
      left-0
      uppercase
      font-bold
    ">
      <div className="fixed top-auto left-3">   
        <div className="bg-cyan-300 w-7 p-[2px] mb-1"></div>
        <div className="bg-cyan-300 w-7 p-[2px] mb-1"></div>
        <div className="bg-cyan-300 w-7 p-[2px]"></div>
      </div>
      <div className="
        
        right-0 
      text-cyan-300
        mr-3

      ">        
        <a href='#' className='no-underline'>ARTIGOS</a> 

        <fieldset className="border-2 mb-3 p-3 mt-7">
            <legend>Adicionar Novo Post</legend>
            <input className="block border m-3"
              value={addTitleText}
              onChange={handleAddTitleChange}
              type="text" 
              placeholder="Digite um título"
             />
            <textarea className="block border
              m-3"
              value={addBodyText}
              onChange={handleAddBodyChange} 
             ></textarea>
            <button className="block border
             text-blue-700 m-3"
                onClick={handleAddClick}
             >
              Adicionar
            </button>
        </fieldset>

        <div className="mt-7">            
            Total de posts: {posts.length}
        </div>
        <div>
          {posts.map((item, index) => (
            <div key={index}>
              <h4 
                className="
                  text-blue-400
                  text-[1.4rem]                  
                "
              >{item.title}</h4>
              <small 
                className="
                  text-yellow-400                    
                "
              >#{item.id} - Usuário {item.userId}</small>
              <p 
                className="
                  text-white
                  text-[0.7rem]
                  mb-5
                "
              >{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>      
  );
}
export default App;