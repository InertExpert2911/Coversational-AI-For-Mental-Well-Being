function calcscore(){
    var score = 0;
    $(".form-check-input table1:checked").each(function(){
        score+=Number(this.value);
    });
    $("input[name=sum]").val(score)
}
$().ready(function(){
    $(".form-check-input table1").change(function(){
        calcscore()
    });
});