import React from 'react'
import { useHistory } from 'react-router-dom'
const About = () => {
  let history = useHistory();

  const Gotohome=()=>{
    history.push("/");
    
  }

  const Goback=()=>{
    history.goBack()
    
  }


  return (
    <div>A
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit in tempora asperiores a hic placeat quos commodi quaerat culpa! Sunt at est earum repudiandae amet sint cumque modi quasi asperiores eius. Maiores sapiente neque veniam tempora magnam iusto eligendi autem vero dolor ab esse temporibus, pariatur quidem excepturi placeat in necessitatibus officia deserunt. Odio autem neque officiis, aperiam beatae dicta vitae incidunt veritatis possimus impedit! Repudiandae delectus aperiam, sunt atque recusandae hic quas ducimus tempore architecto consequuntur eligendi pariatur molestias rerum excepturi id nulla iste iure praesentium illum consectetur aspernatur omnis placeat minus. Corporis, harum vitae incidunt facere iure deserunt. Quia harum quidem culpa aliquid provident odit perspiciatis similique tempora officia! Repudiandae dolores vero harum, quidem sit ducimus unde! Soluta rem quasi tempore itaque id quo temporibus fugiat maiores quod.
        </p>
  <button onClick={Gotohome}>Go to Home</button>
  <button onClick={Goback}>Go back</button>

    </div>
  )
}

export default About