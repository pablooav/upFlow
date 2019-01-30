$('#myModal').on('shown.bs.modal', function () {
$('#myInput').trigger('focus');
});

$("#btnGerarCampos").click(function() {
$("#container-campos").html("");
$(".resultado-modal").html("");
var numCampos = $("#numCampos").val();

for (var i = 0; i < numCampos; i++) {
  $("#container-campos").append("<input type='text' class='form-control campo"+i+"' onkeyup='somenteNumeros(this)' placeholder='Digite um valor'><br>");
}
$("#contCampos").val(numCampos);
});

$("#somarTudo").click(function() {
  $(".resultado-modal").html("");
var numCampos = $("#contCampos").val();
var total = 0;
for (var i = 0; i < numCampos; i++) {
  if($(".campo"+i).val() != "")
  {
  total += parseInt($(".campo"+i).val() || 0);
  }
  else{
    total = -1;
    i = numCampos+1;
  }

}
if(total == -1){
$(".resultado-modal").append("<p>Preencha todos os campos antes de somar!</p>");
}
else
{
$(".resultado-modal").append("<h1>"+total+"</h1>");
}
});

 function somenteNumeros(num) {
        var er = /[^0-9.]/;
        er.lastIndex = 0;
        var campo = num;
        if (er.test(campo.value)) {
          campo.value = "";
        }
    }
