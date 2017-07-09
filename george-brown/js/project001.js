$(document).ready(function () {

    (function ($) {

        $('#filter').keyup(function () {

            var rex = new RegExp($(this).val(), 'i');
            $('.searchable tr').hide();
            $('.searchable tr').filter(function () {
                return rex.test($(this).text());
            }).show();

        });
        
        $('#filter2').on('click', function(){
            
            if(this.checked){
                $('.searchable tr').hide();
                $('.searchable tr').filter(function() {
                    return $(this).find('td').eq('').text()== "EUR"
                }).show();
            }else{
                $('.searchable tr').show();
            }
            
            
        });
/*Left Navigation Refind Search End*/		
        
        $('#filter3').on('click', function(){
            
            if(this.checked){
                $('.searchable tr').hide();
                $('.searchable tr').filter(function() {
                    return $(this).find('td').eq('').text()== "GBP"
                }).show();
            }else{
                $('.searchable tr').show();
            }
            
            
        });		

        $('#filter4').click(function () {/*Business Group*/

            var rex = new RegExp($(this).val(), 'i');
            $('.searchable tr').hide();
            $('.searchable tr').filter(function () {
                return rex.test($(this).text());
            }).show();

        });		
        $('#filter5').click(function () { /*Equipment*/

            var rex = new RegExp($(this).val(), 'i');
            $('.searchable tr').hide();
            $('.searchable tr').filter(function () {
                return rex.test($(this).text());
            }).show();

        });	
        $('#filter6').click(function () { /*External Organization*/

            var rex = new RegExp($(this).val(), 'i');
            $('.searchable tr').hide();
            $('.searchable tr').filter(function () {
                return rex.test($(this).text());
            }).show();

        });		
        $('#filter7').click(function () { /*Location*/

            var rex = new RegExp($(this).val(), 'i');
            $('.searchable tr').hide();
            $('.searchable tr').filter(function () {
                return rex.test($(this).text());
            }).show();

        });	
        $('#filter8').click(function () { /*Type*/

            var rex = new RegExp($(this).val(), 'i');
            $('.searchable tr').hide();
            $('.searchable tr').filter(function () {
                return rex.test($(this).text());
            }).show();

        });			
    }(jQuery));

});
</script>

<script>
function myFunction() {
    var x = document.getElementById("filter").value;
    document.getElementById("demo").innerHTML = x;
}
function myFunction004() {
    var x = document.getElementById("filter4").value;
    document.getElementById("demo4").innerHTML = x;
}
function myFunction005() {
    var x = document.getElementById("filter5").value;
    document.getElementById("demo4").innerHTML = x;
}
function myFunction006() {
    var x = document.getElementById("filter6").value;
    document.getElementById("demo6").innerHTML = x;
}
function myFunction007() {
    var x = document.getElementById("filter7").value;
    document.getElementById("demo7").innerHTML = x;
}
function myFunction008() {
    var x = document.getElementById("filter8").value;
    document.getElementById("demo8").innerHTML = x;
}