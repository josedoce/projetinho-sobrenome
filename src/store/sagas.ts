import { all, call, put, takeLatest} from 'redux-saga/effects';
import { acao } from './actions';

async function meuNome(){
   return '';
}

function* exibaNome(action: any){
   yield put({
      type: 'NOME_DO_MEIO_UPDATE',
      payload: {
         nomeMeio: 'Aguiar da',
         acao: 'O nome do meio foi adicionado'
      }
   })
}

function* trocaNome(action: any){
   // //call resolve uma promise ou uma funcao qualquer
   let api = yield call<any>(meuNome, action.botao);
   
   yield put({
      type: 'NOME_DO_MEIO_UPDATE',
      payload: {
         nomeMeio: api,
         acao: 'O nome do meio foi removido.'
      }
   })
}

//para executar uma função generator usa-se yield
//essa é a saga raiz que fará intermedio entre os filhos
export default function* rootSaga(){
   yield all([
      yield takeLatest(acao.COMPLETO, exibaNome),
      yield takeLatest(acao.NOME_SOBRENOME, trocaNome)
   ]);
}