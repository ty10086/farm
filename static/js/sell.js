(function(){
    farm.page_go({old_page: old_page, query: "{}", return_url: "/sell"});
   

    $('#first_page').live('click', function(){
        location.href="/sell";  
    });
    
    $('#search_button').click(function(){
        farm.search({
        url:"/sell",
        query: {
            search_value: $("#search_value").val(),
            start_price: $("#start_price").val(),
            end_price: $("#end_price").val(),
            pay_type: $("input:radio[name='pay_type']:checked").val(),
            type: $("input:radio[name='type']:checked").val(),
            province: $("#province").find("option:selected").text(),
            money_type: $("input:radio[name='money_type']:checked").val(), 
            city: $("#city").find("option:selected").text(),
            area: $("#area").find("option:selected").text()
        }
        });
    });
}).call(this)
