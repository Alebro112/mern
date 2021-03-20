import React from 'react'

export const LinkCard = ({ link }) => {
    return (
        <> 
            <h2> Ссылка </h2>
            <p>Сокращенная ссылка: <a href={link.to} target="_blank" rel="noopener noreferrer">{link.to}</a></p>
            <p>Оригинальная ссылка: <a href={link.from} target="_blank" rel="noopener noreferrer">{link.from}</a></p>
            <p>Количество переходов по ссылке: <strong>{link.clicks}</strong></p>
        </>
    )
}