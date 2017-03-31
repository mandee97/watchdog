
<?php
if($_POST)
{
    include 'config.php';
    $username=$_POST['username'];
    $password=$_POST['password'];
    $sUser=mysqli_real_escape_string($conn,$username);
    $sPass=mysqli_real_escape_string($conn,$password);
    // For Security 
    $query="SELECT * From ministry where username='$sUser' and password='$sPass'";
    //$result=mysqli_query($conn,$query);
    $result = $conn->query($query);

    if (!$result) {
    printf("Error: %s\n", mysqli_error($conn));
    exit();
}
    $row = mysqli_fetch_array($result);
    
    if($row["username"]== $sUser&& $row["password"] == $sPass)
    {
        session_start();
        $_SESSION['anything']='something';
        header('location:index.html');
    }
}
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
     <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Welcome to Ministry of Rural Development (Govt. of India)</title>
        <!-- Bootstrap core CSS -->
    <link href="css/bootstrap1.css" rel="stylesheet">
       <link rel="stylesheet" href="css/custom-styles.css">

<link rel="stylesheet" href="css/style.css">
<style>
/* Bordered form */
form {margin: 40px 500px 40px 500px;
    border: 3px solid #f1f1f1;
}

/* Full-width inputs */
input[type=text], input[type=password] {
    width: 100%;
    padding: 12px 20px;
  
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
}

/* Set a style for all buttons */
button {
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
}

/* Add a hover effect for buttons */
button:hover {
    opacity: 0.8;
}

/* Extra style for the cancel button (red) */
.cancelbtn {
    width: auto;
    padding: 10px 18px;
    background-color: #f44336;
}

/* Center the avatar image inside this container */
.imgcontainer {
    text-align: center;
    margin: 24px 0 12px 0;
}

/* Avatar image */
img.avatar {
    width: 40%;
    border-radius: 50%;
}

/* Add padding to containers */
.container {
    padding: 16px;
}

/* The "Forgot password" text */
span.psw {
    float: right;
    padding-top: 16px;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
    span.psw {
        display: block;
        float: none;
    }
    .cancelbtn {
        width: 100%;
    }
}
</style>


</head>

  <body >

 <!--MAIN PANEL DIV START-->
    <div class="main-container">
        <div class="header">
            <!---HEADER PANEL DIV START-->
            <div class="logo"><a href="http://rural.nic.in/netrural/rural/index.aspx">
                <img src="img/logo.png" width="425" height="76" alt="Ministry of rural development :: Govt. of India" title="Ministry of rural development :: Govt. of India" /></a></div>
            <div class="top_menu">
                <div class="header-topmenu">
                    
                        <ul>
                            <li><a href="https://www.facebook.com/IndiaRuralDev" target="_blank">
                                <img src="http://rural.nic.in/netrural/rural/sites/images/Rural_facebook.png" width="20px" height="20px" style="margin-bottom: -6px;" /></a></li>
                           
                            <li>|</li>
                            <li><a href="http://rural.nic.in/netrural/rural/index.aspx">Home</a></li>
                            <li>|</li>
                            <li><a href="sites/RD_SITEMAP.htm">Site Map</a></li>
                    <li>|</li>
                            <li><a href="http://rural.nic.in/netrural/rural/sites/contact-us.aspx" target="_blank">Contact Us</a></li>
                        </ul>
                </div>
                <div class="search">
                    <div id="search1" name="search" method="get" action="http://www.google.com/search" target="_blank">
                        <span>
                            <input name="q" type="text" class="keywords" id="searchbox" maxlength="50" value="Search..." onblur="if(this.value=='') this.value='Search...'" onfocus="if(this.value =='Search...' ) this.value=''" />
                            <input name="sitesearch" value="rural.nic.in" type="hidden" />
                        </span>
                        <input name="Search" type="submit" class="button" id="Search" value="Search" onclick="javascript: return fnSiteSearch();" />
                    </div>

                </div>
            </div>

        </div>
        <!--HEADER PANEL DIV END-->
        <div class="topmenu">
            <!--TOP MENU PANEL DIV START-->

            <ul class="navmenu">
                <li><a href="http://rural.nic.in/netrural/rural/sites/about-the-ministry.aspx" class="top_link">ABOUT THE MINISTRY</a></li>
                <li><a href="#">DEPARTMENTS</a>

                    <ul>
                        <li><a href="http://rural.nic.in/netrural/rural/sites/programmes-schemes.aspx" target="_blank">DEPARTMENT OF RURAL DEVELOPMENT</a></li>
                       
                        
                        <li><a href="http://dolr.nic.in/" target="_blank">DEPARTMENT OF LAND RESOURCES</a></li>
                    </ul>
                </li>
                
             
                <li><a href="#">LINKS</a>
                    <ul>
                       
                        
                        <li><a href="http://www.egazette.nic.in/">e-GAZETTE</a></li>
                        <li><a href="http://evisitors.nic.in/">eVMS</a></li>
                       
                        <li><a href="http://rural.nic.in/netrural/rural/sites/Upload_Letters.aspx">UPLOAD</a></li>
                    </ul>
                </li>

                <li><a href="http://rural.nic.in/netrural/rural/sites/right-information-act.aspx">RTI</a></li>
                
                <li><a href="http://rural.nic.in/netrural/rural/sites/Citizen_Charter.aspx">CITIZEN'S CHARTER</a></li>
                <li><a href="#">eBOOK</a>
                    <ul>
                        <li><a href="http://rural.nic.in/netrural/rural/sites/online_eBook/MORD.html">VIEW ONLINE</a></li>
                        <li><a href="http://rural.nic.in/netrural/rural/sites/MORD_eBook.zip">DOWNLOAD OFFLINE</a></li>
                    </ul>
                </li>

                <li><a href="http://rural.nic.in/netrural/rural/sites/Digital_Payment.aspx">DIGITAL PAYMENTS</a>
                    
            </ul>

        </div><br/>
<hr/>
  <!--TOP MENU PANEL DIV END-->



<!--=====================================================================================================-->
<center>
<form method="POST">
  <div class="imgcontainer">
    <img src="img/nst.png" alt="minister" class="avatar">
<h4>Sri.NARENDRA SINGH TOMAR</h4>
  </div>

  <div class="container">
    
    <input type="text"  name="username"  required><br><br>

    <input type="password" name="password" required>

    <button type="submit">Login</button>
  </div>

  <div class="container" style="background-color:#f1f1f1">
   
    <span class="psw">Forgot <a href="#">password?</a></span>
  </div>
</form></center>
  <!-- ============================================================================================================================================ -->
  
<div class="footer-wrapper" style="height: 70px">
 
   
                
                    <center>
                              <a href="http://naco.gov.in/"  target="_blank"><img src="img/3.jpg"></a>
                              <a href="http://mygov.in"  target="_blank"><img src="img/2.jpg"></a>
                              <a href="http://www.cvc.nic.in/ "  target="_blank"><img src="img/1.jpg"></a>
                              <a href="http://digitalindia.gov.in"  target="_blank"><img src="img/4.jpg"></a>
                             

                            </center>
          
                </div>
                  
                    <div class="footer">  <center>
                       <span style="color:black"> Site designed and developed by<span style="font-weight: bold;color:black"> National Informatics Centre</span><br />
                        <span style="height: 18px; text-align: center; margin-top: 11px;color:black">Contents provided and maintained by </span><span style="font-weight: bold;color:black">Department of Rural Development, Ministry of Rural Development, Govt. of India.</span>
                    </center></div>
                    
                
    <!--footer Panel DIV END-->

    <!-- ================================================= -->
  
   
    <script src="js/bootstrap.js"></script>
     <script>

<!--Close the dropdown if the user clicks outside of it-->
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;


    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
</script>
    
    
  </body>
</html>
