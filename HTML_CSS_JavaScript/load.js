import data from "./data.json" assert {type:'json'}




function smallBox(){
var smallBox=document.getElementsByClassName("small-box")[0];
console.log(data["data"]["box-1"]["TotalSchool"])

for (var i=1; i<= data["data"]["box-1"]["title"].length;i++)
{
    smallBox.innerHTML=smallBox.innerHTML+`<div class="small-box-css">
                                        <span class="small-box-heading"> ${data["data"]["box-1"]["title"][i-1]}</span>
                                        <div class="small-box-middle">
                                            <span class="small-box-middle-1" >${data["data"]["box-1"]["countNumber"][i-1]} <sub class="subclass">Active</sub> </span>
                                            <span class="small-box-middle-2" id="bg-color-${i}"><img width="20px" src="${data["data"]["box-1"]["imgPath"][i-1]}" alt=""></span>
                                        </div>
                                        <span class="small-box-footor">Total ${data["data"]["box-1"]["TotalSchool"][i-1][0]}:${data["data"]["box-1"]["TotalSchool"][i-1][1]} </span>
                                    </div>`


    console.log(smallBox)
}
}



window.onload=smallBox();


var tableData=document.querySelector("tbody");

for (var i=1; i<= data["data"]["table"]["imgPath"].length;i++)
{
    tableData.innerHTML=tableData.innerHTML+`<tr class="table-data-css">
                                            <th scope="row" ><img class="css-for-img"src=${data["data"]["table"]["imgPath"][i-1]} alt=""></th>
                                            <td>${data["data"]["table"]["SchoolName"][i-1]}</td>
                                            <td>${data["data"]["table"]["Email"][i-1]} <br> ${data["data"]["table"]["Contact"][i-1]}</td>
                                            <td>${data["data"]["table"]["SchoolSize"][i-1][0]} / ${data["data"]["table"]["SchoolSize"][i-1][1]}</td>
                                            <td> <strong>
                                            ${data["data"]["table"]["dataUsage"][i-1]}</strong><span class="table-lightfont-color"> /400mb</span></td>    
                                            <td>Active</td>
                                            <td class="view-color"><i class="fa-solid fa-eye"></i> view</td>
                                        </tr>`


    console.log(smallBox)
}