let weatherdata;
let c=0, i=0, j=0;
$.get('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-027?Authorization=CWB-45D01851-728A-4B8B-91CC-DD3AD318A828', function(data) {
    weatherdata=data;
    
    let city = weatherdata.records.locations[0].locationsName;
    let area = weatherdata.records.locations[0].location[c].locationName;

    let starttime = weatherdata.records.locations[0].location[c].weatherElement[i].time[j].startTime;
    let endtime = weatherdata.records.locations[0].location[c].weatherElement[i].time[j].endTime;
    let avg_temp = weatherdata.records.locations[0].location[c].weatherElement[1].time[j].elementValue[0].value;
    let rel_mo = weatherdata.records.locations[0].location[c].weatherElement[2].time[j].elementValue[0].value;
    let high_temp = weatherdata.records.locations[0].location[c].weatherElement[12].time[j].elementValue[0].value;
    let low_temp = weatherdata.records.locations[0].location[c].weatherElement[8].time[j].elementValue[0].value;
    let wind = weatherdata.records.locations[0].location[c].weatherElement[13].time[j].elementValue[0].value;
    let weather = weatherdata.records.locations[0].location[c].weatherElement[6].time[j].elementValue[0].value;

    console.log(data);

    c+=1;
    i+=1;
    j+=1;
});

function showinfo(){  
    let city;
    let area;
    let starttime;
    let endtime;
    let avg_temp;
    let rel_mo;
    let high_temp;
    let low_temp;
    let wind;
    let weather;
/*
    if($("#select_city").val() == "17"){
        area = weatherdata.records.locations[0].location[17].locationName;
        city = weatherdata.records.locations[0].locationsName;
        starttime = weatherdata.records.locations[0].location[17].weatherElement[0].time[j].startTime;
        endtime = weatherdata.records.locations[0].location[17].weatherElement[0].time[j].endTime;
        avg_temp = weatherdata.records.locations[0].location[17].weatherElement[1].time[j].elementValue[0].value;
        rel_mo = weatherdata.records.locations[0].location[17].weatherElement[2].time[j].elementValue[0].value;
        high_temp = weatherdata.records.locations[0].location[17].weatherElement[12].time[j].elementValue[0].value;
        low_temp = weatherdata.records.locations[0].location[17].weatherElement[8].time[j].elementValue[0].value;
        wind = weatherdata.records.locations[0].location[17].weatherElement[13].time[j].elementValue[0].value;
        weather = weatherdata.records.locations[0].location[17].weatherElement[6].time[j].elementValue[0].value;
        break;
    }

    switch($("#select_city").val()){
        case "17": 
            area = weatherdata.records.locations[0].location[17].locationName;
            city = weatherdata.records.locations[0].locationsName;
            starttime = weatherdata.records.locations[0].location[17].weatherElement[0].time[j].startTime;
            endtime = weatherdata.records.locations[0].location[17].weatherElement[0].time[j].endTime;
            avg_temp = weatherdata.records.locations[0].location[17].weatherElement[1].time[j].elementValue[0].value;
            rel_mo = weatherdata.records.locations[0].location[17].weatherElement[2].time[j].elementValue[0].value;
            high_temp = weatherdata.records.locations[0].location[17].weatherElement[12].time[j].elementValue[0].value;
            low_temp = weatherdata.records.locations[0].location[17].weatherElement[8].time[j].elementValue[0].value;
            wind = weatherdata.records.locations[0].location[17].weatherElement[13].time[j].elementValue[0].value;
            weather = weatherdata.records.locations[0].location[17].weatherElement[6].time[j].elementValue[0].value;
            break;

        case "8": 
            area = weatherdata.records.locations[0].location[8].locationName;
            city = weatherdata.records.locations[0].locationsName;
            starttime = weatherdata.records.locations[0].location[8].weatherElement[0].time[j].startTime;
            endtime = weatherdata.records.locations[0].location[8].weatherElement[0].time[j].endTime;
            avg_temp = weatherdata.records.locations[0].location[8].weatherElement[1].time[j].elementValue[0].value;
            rel_mo = weatherdata.records.locations[0].location[8].weatherElement[2].time[j].elementValue[0].value;
            high_temp = weatherdata.records.locations[0].location[8].weatherElement[12].time[j].elementValue[0].value;
            low_temp = weatherdata.records.locations[0].location[8].weatherElement[8].time[j].elementValue[0].value;
            wind = weatherdata.records.locations[0].location[8].weatherElement[13].time[j].elementValue[0].value;
            weather = weatherdata.records.locations[0].location[8].weatherElement[6].time[j].elementValue[0].value;
            break;

        case "18": 
            area = weatherdata.records.locations[0].location[18].locationName;
            city = weatherdata.records.locations[0].locationsName;
            starttime = weatherdata.records.locations[0].location[18].weatherElement[0].time[j].startTime;
            endtime = weatherdata.records.locations[0].location[18].weatherElement[0].time[j].endTime;
            avg_temp = weatherdata.records.locations[0].location[18].weatherElement[1].time[j].elementValue[0].value;
            rel_mo = weatherdata.records.locations[0].location[18].weatherElement[2].time[j].elementValue[0].value;
            high_temp = weatherdata.records.locations[0].location[18].weatherElement[12].time[j].elementValue[0].value;
            low_temp = weatherdata.records.locations[0].location[18].weatherElement[8].time[j].elementValue[0].value;
            wind = weatherdata.records.locations[0].location[18].weatherElement[13].time[j].elementValue[0].value;
            weather = weatherdata.records.locations[0].location[18].weatherElement[6].time[j].elementValue[0].value;
            break;

        case "19": 
            area = weatherdata.records.locations[0].location[19].locationName;
            city = weatherdata.records.locations[0].locationsName;
            starttime = weatherdata.records.locations[0].location[19].weatherElement[0].time[j].startTime;
            endtime = weatherdata.records.locations[0].location[19].weatherElement[0].time[j].endTime;
            avg_temp = weatherdata.records.locations[0].location[19].weatherElement[1].time[j].elementValue[0].value;
            rel_mo = weatherdata.records.locations[0].location[19].weatherElement[2].time[j].elementValue[0].value;
            high_temp = weatherdata.records.locations[0].location[19].weatherElement[12].time[j].elementValue[0].value;
            low_temp = weatherdata.records.locations[0].location[19].weatherElement[8].time[j].elementValue[0].value;
            wind = weatherdata.records.locations[0].location[19].weatherElement[13].time[j].elementValue[0].value;
            weather = weatherdata.records.locations[0].location[19].weatherElement[6].time[j].elementValue[0].value;
            break;
    }
*/
    area = weatherdata.records.locations[0].location[$("#select_city").val()].locationName;
    city = weatherdata.records.locations[0].locationsName;
    starttime = weatherdata.records.locations[0].location[$("#select_city").val()].weatherElement[0].time[$("#select_time").val()].startTime;
    endtime = weatherdata.records.locations[0].location[$("#select_city").val()].weatherElement[0].time[$("#select_time").val()].endTime;
    avg_temp = weatherdata.records.locations[0].location[$("#select_city").val()].weatherElement[1].time[$("#select_time").val()].elementValue[0].value;
    rel_mo = weatherdata.records.locations[0].location[$("#select_city").val()].weatherElement[2].time[$("#select_time").val()].elementValue[0].value;
    high_temp = weatherdata.records.locations[0].location[$("#select_city").val()].weatherElement[12].time[$("#select_time").val()].elementValue[0].value;
    low_temp = weatherdata.records.locations[0].location[$("#select_city").val()].weatherElement[8].time[$("#select_time").val()].elementValue[0].value;
    rain = weatherdata.records.locations[0].location[$("#select_city").val()].weatherElement[0].time[$("#select_time").val()].elementValue[0].value;
    weather = weatherdata.records.locations[0].location[$("#select_city").val()].weatherElement[6].time[$("#select_time").val()].elementValue[0].value;

    $("#city").text(city);
    $("#area").text(area);
    $("#time").text(starttime+ "~" + endtime);
    $("#avg_temp").text(avg_temp + "°C"); 
    $("#rel_mo").text(rel_mo + "%"); 
    $("#high_temp").text(high_temp + "°C"); 
    $("#low_temp").text(low_temp + "°C");
    $("#rain").text(rain + "%");
    $("#weather").text(weather);

    i+=1;
    j+=1;
};

function enter() {
    j=0;
    showinfo();
    //setInterval("showinfo()", "5000"); 
}

window.onload = function(){
    $.get('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-027?Authorization=CWB-45D01851-728A-4B8B-91CC-DD3AD318A828', function(data) {
        weatherdata=data;
        var data = [];
        var time = [];
        for(var a=0; a<=19; a++){
            data[a] = weatherdata.records.locations[0].location[a].locationName;
            $("#select_city").append("<option value='"+ a +"'> "+ data[a] +" </option>");
        } 
        for(var a=0; a<=14; a++){
            let starttime = weatherdata.records.locations[0].location[0].weatherElement[0].time[a].startTime;
            let endtime = weatherdata.records.locations[0].location[0].weatherElement[0].time[a].endTime;
            time[a] = ""+starttime+"  ~  "+endtime+"";
            $("#select_time").append("<option value='"+ a +"'> "+ time[a] +" </option>");
        }
    });
}