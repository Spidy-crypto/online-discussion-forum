

function summer() {
    $(document).ready(function() {
        $('#summernote').summernote();
    });
    $('#summernote').summernote({
        height: 300,
        minHeight: null,
        maxHeight: null,
        focus: true,
        placeholder: 'write here...'
    });

}
function admin(){
    swal("To remove any User click on that ");
    $(document).ready(function() {
        $("#search").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $(".table tr").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });

        $("tbody tr").click(function(){
        	$(this).remove();
        });
    });
}