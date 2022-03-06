$('#select_online')
  .change(function () {
    $('#select_online option:selected').each(function () {
      $('#valor_mensal').text($(this).val())
    })
  })
  .change()

$('#select_presencial')
  .change(function () {
    $('#select_presencial option:selected').each(function () {
      $('#valor_mensal-presencial').text($(this).val())
    })
  })
  .change()

//Aparecer outros alunos no clique do botão "Conhecer todos"
$(document).ready(function () {
  $('.resultado_alunos-conhecer-todos').hide()
  $('#btn-sumir-todos').hide()
})

$('#btn-conhecer-todos').click(function () {
  $('.resultado_alunos-conhecer-todos').show()
  $('#btn-sumir-todos').show()
  $('#btn-conhecer-todos').hide()
})

$('#btn-sumir-todos').click(function () {
  $('.resultado_alunos-conhecer-todos').hide()
  $('#btn-sumir-todos').hide()
  $('#btn-conhecer-todos').show()
})
