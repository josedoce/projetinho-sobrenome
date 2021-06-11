const stateInicial = {
    nome: 'Angela',
    nomeMeio: '',
    sobrenome: 'Silva',
    acao: 'Escolha uma ação'
}

const reducer = (state=stateInicial, action: any)=>{
    switch (action.type) {
        case 'NOME_DO_MEIO':
            return {
                ...state,
            }
        case 'NOME_E_SOBRENOME':
            return {
                ...state,
            }
        case 'NOME_DO_MEIO_UPDATE':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export default reducer;