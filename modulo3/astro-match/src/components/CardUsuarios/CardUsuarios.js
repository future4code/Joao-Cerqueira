import React from "react";
import { useEffect } from "react";
import styles from './styles.css'

const CardUsuarios = (props) => {

    const aluno2 = props.aluno


    return (
        <div className="CardUsuarios-div">
        <img className="FotoPerfil" src={props.profile.photo} />
        <p>{props.profile.name}</p>
        <p>{props.profile.age} anos</p>
            <p>{props.profile.bio}</p>
            <div className="BotaoMatch">
                <img className="ImagemMatch" src="https://icones.pro/wp-content/uploads/2021/08/icone-x-avec-cercle-rouge.png" onClick={() => props.disMatch()} />
                <img className="ImagemMatch" src="https://i.pinimg.com/originals/e6/67/00/e6670020a3b45158631763a246cf1742.png" onClick={() => props.choosePerson(props.profile.id, true)} />
            </div>
        </div>
    )
}
export default CardUsuarios