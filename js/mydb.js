console.log("connected to my db..retrieving value of url");
var k = {
           mgnres3 : "http://ganesha.ls/project_data/3.csv",
           mgnres4 : "http://ganesha.ls/project_data/4.csv",
           mgnres5_mb : "http://ganesha.ls/project_data/5.csv",
           nrlm1     : "http://ganesha.ls/project_data/13.csv",
           pmgsy1_mb  : "http://ganesha.ls/project_data/7.csv",
           pmgsy2_mb  : "http://ganesha.ls/project_data/8.csv",
           pmgsy3_mb  : "http://ganesha.ls/project_data/9.csv",
           ddugky  : "http://ganesha.ls/project_data/10.csv",
           nrlm2_mb  : "http://ganesha.ls/project_data/12.csv"
           };
var t = {
           mgnres3 : "Funds released to States under Mahatma Gandhi National Rural Employment Guarantee Scheme (MGNREGS)  2015-16 (till 26/11/2015) ",
           mgnres4 : "State-wise payment due under Mahatma Gandhi National Rural Employment Guarantee Scheme (MGNREGS) – 2015-16 (till 27/11/2015) ",
           mgnres5_mb : "State-UT-wise details of amount released under the Mahatma Gandhi National Rural Employment Guarantee Scheme (MGNREGS) from 2012 to 2015",
           nrlm1     : "Number of complaints received on implementation of National Rural Livelihoods Mission (NRLM)- 2015 ",
           pmgsy1_mb : "Physical Progress Of PMGSY As On 31 March, 2012",
           pmgsy2_mb  : "District wise Physical Performance of Rural Road Scheme under PMGSY during the period of 2000-01 to 2004-05 – Based on Sample Survey 2010",
           pmgsy3_mb  : "Availability of Funds for Maintenance under PMGSY and Bharat Nirman – (2000-07) – Based on Sample Survey 2010 ",
           ddugky  : "Total number of active DDU-GKY training centres as on 26th November 2015",
           nrlm2_mb  : "Physical and Financial Progress under National Rural Livelihoods Mission (NRLM) as on 31.07.2015"
         } ;

var final = true;

function invokeSb(gotUrl){
  var url = k[gotUrl];
  var title= t[gotUrl];
  var append = gotUrl.slice(-2);
    if (typeof(Storage) !== "undefined") {
    console.log("binding values to database");
    localStorage.setItem("url", url);
    localStorage.setItem("title",title);
    localStorage.setItem("append",append);
    }
    final  = false;
    //t=true;
}

function validate(){
          var scheme_name = document.getElementById("scheme_name").value;
          var scheme_url = document.getElementById("scheme_url").value;
          k[scheme_name]= scheme_url;
          console.log(k);
}

var data = {
  "schemes":[
     {
         "name" :"Pradhan Mantri Awas Yojana",
         "short":"PMAY",
         "image":"img/pmay.png",
         "Home_url" :"http://iay.nic.in/netiay/home.aspx"  
     },
     {
         "name" :"Prime Minister's Rural Development fellows scheme",
         "short":"PMRD",
         "image":"img/pmrd.png",
         "Home_url" :"http://rural.nic.in/pmrdfs/"  
     },
     {
         "name" :"National Rurban Mission",
         "short":"NRuM",
         "image":"img/NRuM.png",
         "Home_url" :"http://rurban.gov.in/"  
     },
     {
         "name" :"Pradhan Mantri Gram Sadak Yojana",
         "short":"PMGSY",
         "image":"img/PMGSY.png",
         "Home_url" :"http://pmgsy.nic.in/"  
     },
     {
         "name" :"Mahatma Gandhi National Rural Employment Guarentee Act",
         "short":"MGNREGA",
         "image":"img/mgnrea.png",
         "Home_url" :"http://nrega.nic.in/netnrega/home.aspx"  
     },
     {
         "name" :"National Social Assistance Programme",
         "short":"NSAP",
         "image":"img/nsap.png",
         "Home_url" :"http://nsap.nic.in/"  
     },
     {
         "name" :"Development Initiatives for Social and Human Action",
         "short":"DISHA",
         "image":"img/disha.png",
         "Home_url" :"http://rural.nic.in/netrural/rural/sites/Disha_main.aspx"  
     },
     {
         "name" :"Deen Dayal Upadhyaya Grameen Kaushalya Yojana",
         "short":"DDU-GKY",
         "image":"img/ddu.png",
         "Home_url" :"http://ddugky.gov.in/"  
     }
  ]
};

/*Handlebars.registerHelper('let',function(data) {
       for(i=j;i<4;i++,j++){
          return data.scheme[i];
        }
});

Handlebars.registerHelper('times', function(n, block) {
    var accum = '';
    for(var i = 0; i < n; ++i)
        accum += block.fn(i);
    return accum;
});

var count=0;
Handlebars.registerHelper("ifSet", function (schemes) {        
    console.log("ifSet is under process");       
      if (count == 4){
          console.log(count);
          break;             
      }else{
           console.log(count);
           count ++;
      }
    return;
});     



function test(){
  var rawTemplate = document.getElementById("retrievePlate").innerHTML;
  var compiledTemplate = Handlebars.compile(rawTemplate);
  var generatedHtml = compiledTemplate(data);

  var schemeContainer = document.getElementById("renderPlate");
  schemeContainer.innerHTML = generatedHtml;  
}*/












