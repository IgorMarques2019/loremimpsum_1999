$(document).ready(function () {
  $('.info-results').hide()

  function calc() {

    let valProd = $("#precoProd").val();
    let faturamento = $("#faturamento").val();
    let lucroDesejado = $("#lucroDesejado").val();
    let despFixas = $("#despFixas").val()
    let despVar = $("#despVar").val();

    let porcentTotal = (((despFixas / faturamento) * 100) + parseInt(lucroDesejado) + parseInt(despVar))
    let varImp = parseInt(lucroDesejado) + parseInt(despVar);
    let markup = (100 - porcentTotal) / 100;
    let sell = valProd / markup
    let meuLucro = (((lucroDesejado / 100) * sell))
    let mc = ((sell - ((varImp / 100) * sell)) / sell)
    let pe = despFixas / mc

    let nv = (faturamento / meuLucro) + 3;
    let fatLiquida = meuLucro * nv;



    function convMoney(value) {
      let moneyCoin = value;
      return moneyCoin.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
      })
    }



    $('#pv').text(convMoney(sell));
    $('#lc').text(convMoney(meuLucro));
    $('#mkp').text(markup.toFixed(2));
    $('#mc').text(parseFloat(mc).toFixed(2));
    $('#pe').text(convMoney(pe));
    $('#nv').text(`Você precisa vender ${parseInt(nv + 1)} (und) para faturar ${convMoney(fatLiquida)} líquido`);

    if (sell < 0 || sell === NaN) {
      $('.alerta-error').fadeIn()
    } else {
      $('.alerta-error').fadeOut()
    }



  }




  $('#calcular').click(function () {
    calc();
    $('.info-results').fadeIn('slow')

  });

  let anoAtual = new Date();
  $('#yearCopy').text(anoAtual.getFullYear());
});