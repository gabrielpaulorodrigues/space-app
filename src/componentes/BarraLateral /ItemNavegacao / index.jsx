const ItemNavegacao = ( {children, IconeAtivo, IconeInativo, ativo = false} ) => {
    return <> 
        <img src={ativo ? iconeAtivo : iconeInativo} alt="" />
        {children}
    </>
}

export default ItemNavegacao