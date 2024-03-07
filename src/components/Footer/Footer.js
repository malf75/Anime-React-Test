import './Footer.css'

function Footer(){
    return(
        <section className='footer'>
            <div className='socials'>
                <a href='https://github.com/malf75' className='gh'><img src='/imagens/github.png' alt='Logo do Github'/></a>
                <a href='https://twitter.com/lMalfl'><img src='/imagens/tw.png' alt='Logo do Twitter'/></a>
                <a href='https://instagram.com/l.no.gods.no.masters.l' className='ig'><img src='/imagens/ig.png' alt='Logo do Instagram'/></a>
            </div>
            <div className='text'>
                <h4>Desenvolvido por MaLf</h4>
            </div>
            <div className='logo'>
                <img src='/imagens/paw.gif' alt='Gif'/>
            </div>
        </section>   
    )
}

export default Footer