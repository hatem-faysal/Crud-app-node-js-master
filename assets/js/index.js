$('#add_user').submit(()=>{
    alert("Data Inserted Successfully!");
});

$('#update_user').submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data={};
    $.map(unindexed_array,function(n,i){
        data[n['name']] = n['value']
    })
    var request={
        "url":`http://localhost:3000/api/users/${data.id}`,
        "method":"PUT",
        "data":data
    }
    $.ajax(request).done(function(response){
        alert("data updated Successfully!");
    })
});

    console.log('window.location.pathname: ', window.location.pathname);
if(window.location.pathname == "/"){
    $(".table tbody td a.delete").click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:3000/api/users/${id}`,
            "method" : "DELETE"
        }

        if(confirm("Do you really want to delete this record?")){
            $.ajax(request).done(function(response){
                alert("Data Deleted Successfully!");
                location.reload();
            })
        }

    })
}