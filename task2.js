// button hide and show effect
function myFunction() {
    var x = document.getElementById("main1");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function myFunction2() {
    var x = document.getElementById("main2");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function myFunction3() {
    var x = document.getElementById("main3");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function myFunction4() {
    var x = document.getElementById("main4");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function myFunction5() {
    var x = document.getElementById("main5");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function myFunction6() {
    var x = document.getElementById("main6");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function myFunction7() {
    var x = document.getElementById("main7");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function myFunction8() {
    var x = document.getElementById("main8");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function myFunction9() {
    var x = document.getElementById("main9");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function myFunction10() {
    var x = document.getElementById("main10");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function remember() {
    var x = document.getElementById("remember");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
// Scroll top button
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// for allow alpha and numeric validation
function allowAlphaNumeric(e) {
    var code = ('charCode' in e) ? e.charCode : e.keyCode;
    if (!(code > 47 && code < 58) && // 0-9
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
        e.preventDefault();
    }
}
//   for home address
function allowAlphaNumericSpace(e) {
    var code = ('charCode' in e) ? e.charCode : e.keyCode;
    if (!(code == 45) && // dase
        !(code == 32) && // space
        !(code == 44) && // coma
        !(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
        e.preventDefault();
    }
}
// for issu date only select past date
function validDate() {
    var today = new Date().toISOString().split('T')[0];
    document.getElementsByName("dateone")[0].setAttribute('max', today);
}
//   for  number validation
function validateNumber(e) {
    const pattern = /^[0-9]$/;

    return pattern.test(e.key)
}
// fresh and re-isssue diseble enabel func
function check() {
    if (document.getElementById('1.1').checked) {
        document.getElementById('1.2').disabled = true;
        document.getElementById('1.2.1').disabled = true;
        document.getElementById('1.2.2').disabled = true;
        document.getElementById('1.2.3').disabled = true;
        document.getElementById('1.2.4').disabled = true;
        document.getElementById('1.2.5').disabled = true;
        document.getElementById('prvcern').disabled = true;
        document.getElementById('prvdoi').disabled = true;
        document.getElementById('prvdoe').disabled = true;
        document.getElementById('prvplace').disabled = true;
        document.getElementById('1.2reiss').style.display = "none";
        document.getElementById('1.3rereason').style.display = "none";
        // document.getElementById('1.3other').style.display="none";

        document.getElementById('1.3').disabled = true;
        document.getElementById('1.3.1').disabled = true;
        document.getElementById('1.3.2').disabled = true;
        document.getElementById('1.3.3').disabled = true;
        document.getElementById('1.3.4').disabled = true;
        document.getElementById('1.3.5').disabled = true;
        document.getElementById('1.3.6').disabled = true;
        document.getElementById('1.3.7').disabled = true;
        document.getElementById('cheoth').disabled = true;
    }

    else {
        document.getElementById('1.2').disabled = false;
        document.getElementById('1.2.1').disabled = false;
        document.getElementById('1.2.2').disabled = false;
        document.getElementById('1.2.3').disabled = false;
        document.getElementById('1.2.4').disabled = false;
        document.getElementById('1.2.5').disabled = false;
        document.getElementById('prvcern').disabled = false;
        document.getElementById('prvdoi').disabled = false;
        document.getElementById('prvdoe').disabled = false;
        document.getElementById('prvplace').disabled = false;
        document.getElementById('1.2reiss').style.display = "block";
        document.getElementById('1.3rereason').style.display = "block";
        // document.getElementById('1.3other').style.display="block";

        // document.getElementById('1.3').disabled = false;
        // document.getElementById('1.3.1').disabled = false;
        // document.getElementById('1.3.2').disabled = false;
        // document.getElementById('1.3.3').disabled = false;
        // document.getElementById('1.3.4').disabled = false;
        // document.getElementById('1.3.5').disabled = false;
        // document.getElementById('1.3.6').disabled = false;
        // document.getElementById('1.3.7').disabled = false;
        // document.getElementById('cheoth').disabled = false;
    }
}
// 1.3 enabel disebel fun
function existing() {
    if (document.getElementById('1.2.4').checked) {
        document.getElementById('1.3').disabled = false;
        document.getElementById('1.3.1').disabled = false;
        document.getElementById('1.3.2').disabled = false;
        document.getElementById('1.3.3').disabled = false;
        document.getElementById('1.3.4').disabled = false;
        document.getElementById('1.3.5').disabled = false;
        document.getElementById('1.3.6').disabled = false;
        document.getElementById('1.3.7').disabled = false;
        document.getElementById('cheoth').disabled = false;
        document.getElementById('1.3rereason').style.display = "block";
        document.getElementById('1.3other').style.display = "block";

    }

    else {
        document.getElementById('1.3').disabled = true;
        document.getElementById('1.3.1').disabled = true;
        document.getElementById('1.3.2').disabled = true;
        document.getElementById('1.3.3').disabled = true;
        document.getElementById('1.3.4').disabled = true;
        document.getElementById('1.3.5').disabled = true;
        document.getElementById('1.3.6').disabled = true;
        document.getElementById('1.3.7').disabled = true;
        document.getElementById('cheoth').disabled = true;
        document.getElementById('1.3rereason').style.display = "none";
        document.getElementById('1.3other').style.display = "none";
    }

}
// 6.2 Enable and disable fun
function passport() {
    if (document.getElementById('6.2').checked) {
        document.getElementById('prefilen').disabled = false;
        document.getElementById('premayo').disabled = false;
        document.getElementById('prepassoff').disabled = false;
    }
    else {
        document.getElementById('prefilen').disabled = true;
        document.getElementById('premayo').disabled = true;
        document.getElementById('prepassoff').disabled = true;
    }
}
// 4.2 address enabel and disebel fun   
function preaddress() {
    if (document.getElementById('4.2.1').checked) {
        document.getElementById('prenocity').disabled = false;
        document.getElementById('prenodis').disabled = false;
        document.getElementById('prenopoli').disabled = false;
        document.getElementById('prenostate').disabled = false;
        document.getElementById('prenopin').disabled = false;

        document.getElementById('emeadd').disabled = false;
        document.getElementById('ememon').disabled = false;
        document.getElementById('emeteln').disabled = false;
        document.getElementById('emeeid').disabled = false;

    }
    else {
        document.getElementById('prenocity').disabled = true;
        document.getElementById('prenodis').disabled = true;
        document.getElementById('prenopoli').disabled = true;
        document.getElementById('prenostate').disabled = true;
        document.getElementById('prenopin').disabled = true;

        document.getElementById('emeadd').disabled = true;
        document.getElementById('ememon').disabled = true;
        document.getElementById('emeteln').disabled = true;
        document.getElementById('emeeid').disabled = true;

    }
}
// date of birth
function ValidateDOB() {
    var lblError = document.getElementById("lblError");

    //Get the date from the TextBox.
    var dateString = document.getElementById("appdate").value;
    var regex = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;

    //Check whether valid dd/MM/yyyy Date Format.
    if (regex.test(dateString)) {
        var parts = dateString.split("/");
        var dtDOB = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);
        var dtCurrent = new Date();
        // lblError.innerHTML = "Eligibility 1 years ONLY."
        lblError.innerHTML = "<a href=#appdate><p>2.4 Minimum Eligibility 1 Month ONLY.</p></a>";
        if (dtCurrent.getFullYear() - dtDOB.getFullYear() < 0.1) {
            return false;
        }

        if (dtCurrent.getFullYear() - dtDOB.getFullYear() == 0.1) {

            //CD: 11/06/2018 and DB: 15/07/2000. Will turned 18 on 15/07/2018.
            if (dtCurrent.getMonth() < dtDOB.getMonth()) {
                return false;
            }
            if (dtCurrent.getMonth() == dtDOB.getMonth()) {
                //CD: 11/06/2018 and DB: 15/06/2000. Will turned 18 on 15/06/2018.
                if (dtCurrent.getDate() < dtDOB.getDate()) {
                    return false;
                }
            }
        }
        lblError.innerHTML = "";
        return true;
    } else {
        // lblError.innerHTML = "Enter date in dd/MM/yyyy format ONLY."
        lblError.innerHTML = "<a href=#appdate><p>2.4 Enter date in DD/MM/YYYY format ONLY.</p></a>";
        return false;
    }
}

// 1.2 other text box fun
function ShowHideDiv(cheoth) {
    var other = document.getElementById("other");

    other.style.display = cheoth.checked ? "block" : "none";
    if (document.getElementById('cheoth').checked) {
        document.getElementById('1.3other').disabled = false;
        // document.getElementById('1.3other').style.display="block";
    }
    else {
        document.getElementById('1.3other').disabled = true;
        // document.getElementById('1.3other').style.display="none";
    }


}


// Form validation 
function checkForm() {
    var x = true;
    var fileNumcheck = document.getElementById("filenumber").value;
    // Session-1
    // var serReq = document.getElementById("1.1");
    var srPiccheck = document.getElementById("srpic");
    var pic = /(.jpg|\.jpeg|\.png|\.gif|\.pdf)$/i;
    var srSigcheck = document.getElementById("srsig");
    // var srsOthercheck = document.getElementById("other")
    // Session-2
    var appNamecheck = document.getElementById("appname");
    var appmidNamecheck = document.getElementById("appmidname");
    var appsurNamecheck = document.getElementById("appsurname");
    var appDatecheck = document.getElementById("appdate");


    var appPobvillagecheck = document.getElementById("appvillage");
    var appPobdischeck = document.getElementById("appdis").value;
    var appPobstatecheck = document.getElementById("appstate").value;
    var appPobcouncheck = document.getElementById("appcoun").value;
    var appPancheck = document.getElementById("apppan").value;
    var appVotercheck = document.getElementById("appvoter").value;
    var appOrgcheck = document.getElementById("apporg");
    var appDismarkcheck = document.getElementById("appdismark");
    var appAadhaarcheck = document.getElementById("appaadhaar").value;
    // Session-3
    var appFnamecheck = document.getElementById("famfname");
    var appFmnanecheck = document.getElementById("famfmname");
    var appFsnamecheck = document.getElementById("famfsname");
    var appMnamecheck = document.getElementById("fammname");
    var appMmnanecheck = document.getElementById("fammmname");
    var appMsnamecheck = document.getElementById("fammsname");
    var appLnamecheck = document.getElementById("famlname");
    var appLmnanecheck = document.getElementById("famlmname");
    var appLsnamecheck = document.getElementById("famlsname");
    var appSnamecheck = document.getElementById("famsname");
    var appSmnanecheck = document.getElementById("famsmname");
    var appSsnamecheck = document.getElementById("famssname");
    // Session-4
    var preStrcheck = document.getElementById("prestr").value;
    var preCitycheck = document.getElementById("precity");
    var preDischeck = document.getElementById("predis");
    var prePolicheck = document.getElementById("prepoli");
    var preStatecheck = document.getElementById("prestate");
    var prePincheck = document.getElementById("prepin");
    var preMoncheck = document.getElementById("premon");
    var preTelncheck = document.getElementById("preteln");
    var preEidcheck = document.getElementById("preeid").value;
    // Session-5
    var emeAddcheck = document.getElementById("emeadd");
    var emeMoncheck = document.getElementById("ememon");
    var emetelncheck = document.getElementById("emeteln");
    var emeEidcheck = document.getElementById("emeeid");
    // Session-6
    var prvCerncheck = document.getElementById("prvcern").value;

    var prvDoicheck = new Date(document.getElementById("prvdoi").value);
    var prvDoecheck = new Date(document.getElementById("prvdoe").value);

    var prvPlacecheck = document.getElementById("prvplace");
    var prvFilencheck = document.getElementById("prefilen");
    var prvMayocheck = document.getElementById("premayo");
    var prvPassoffcheck = document.getElementById("prepassoff");
    // Session-7

    // Session-8
    var feeAmocheck = document.getElementById("feeamo");
    var feeDnumcheck = document.getElementById("feeddnum");
    var feeDdisdcheck = document.getElementById("feeddisd");
    var feeDdexdcheck = document.getElementById("feeddexd");
    var feeBnamecheck = document.getElementById("frrbname");
    var feeBranchcheck = document.getElementById("feebra");

    // Session-9

    // Session-10
    var sdPlacecheck = document.getElementById("sdplace");
    var sdSigcheck = document.getElementById("sdsig");

    // if statement to check box is empty or not
    document.getElementById("filenum").style.display = "block";
    // Session-1
    document.getElementById("service").style.display = "none";
    document.getElementById("1.2reiss").style.display = "none";
    document.getElementById("1.1pic").style.display = "block";
    // document.getElementById("pic").style.display="none";
    document.getElementById("1.3sig").style.display = "block";

    document.getElementById("1.3rereason").style.display = "none";
    // document.getElementById("1.3other").style.display = "none";
    document.getElementById("1.4reapp").style.display = "none";
    document.getElementById("1.5repb").style.display = "none";
    document.getElementById("1.6rereq").style.display = "none";
    // Session-2
    document.getElementById("2.1name").style.display = "none";
    document.getElementById("2.1.1name").style.display = "none";
    document.getElementById("2.1.2name").style.display = "none";
    document.getElementById("2.2ali").style.display = "none";
    document.getElementById("2.3yn").style.display = "none";
    document.getElementById("2.4date").style.display = "none";
    document.getElementById("2.5.1pob").style.display = "none";

    document.getElementById("2.5.2pob").style.display = "block";
    document.getElementById("2.5.3pob").style.display = "block";
    document.getElementById("2.5.4pob").style.display = "block";

    document.getElementById("2.6Gender").style.display = "none";
    document.getElementById("2.7ms").style.display = "none";
    document.getElementById("2.8coi").style.display = "none";
    document.getElementById("2.9pan").style.display = "block";
    document.getElementById("2.10voter").style.display = "block";
    document.getElementById("2.11et").style.display = "none";
    document.getElementById("2.12orgname").style.display = "none";
    document.getElementById("2.13minor").style.display = "none";
    document.getElementById("2.14eq").style.display = "none";
    document.getElementById("2.15ecr").style.display = "none";
    document.getElementById("2.16dismark").style.display = "none";
    document.getElementById("2.17aadhar").style.display = "block";

    // Session-3
    document.getElementById("3.1.1fname").style.display = "none";
    document.getElementById("3.1.2fmname").style.display = "none";
    document.getElementById("3.1.3fsname").style.display = "none";
    document.getElementById("3.2.1mname").style.display = "none";
    document.getElementById("3.2.2mmname").style.display = "none";
    document.getElementById("3.2.3msname").style.display = "none";
    document.getElementById("3.3.1lname").style.display = "none";
    document.getElementById("3.3.2lmname").style.display = "none";
    document.getElementById("3.3.3lsname").style.display = "none";
    document.getElementById("3.4.1sname").style.display = "none";
    document.getElementById("3.4.2smname").style.display = "none";
    document.getElementById("3.4.3ssname").style.display = "none";

    // Session-4
    document.getElementById("4.1str").style.display = "block";
    document.getElementById("4.1city").style.display = "none";
    document.getElementById("4.1dis").style.display = "none";
    document.getElementById("4.1poli").style.display = "none";
    document.getElementById("4.1state").style.display = "none";
    document.getElementById("4.1pin").style.display = "none";
    document.getElementById("4.1mon").style.display = "none";
    document.getElementById("4.1teln").style.display = "none";
    document.getElementById("4.1eid").style.display = "block";
    document.getElementById("4.2add").style.display = "none";

    // Session-5
    document.getElementById("5emeadd").style.display = "none";
    document.getElementById("5ememon").style.display = "none";
    document.getElementById("5emeteln").style.display = "none";
    document.getElementById("5emeeid").style.display = "none";

    // Session-6
    document.getElementById("6.1num").style.display = "block";
    document.getElementById("6.1doi").style.display = "block";
    // document.getElementById("6.1doe").style.display = "block";
    document.getElementById("6.1place").style.display = "none";
    document.getElementById("6.2issued").style.display = "none";
    document.getElementById("6.2num").style.display = "none";
    document.getElementById("6.2mayo").style.display = "none";
    document.getElementById("6.2passoff").style.display = "none";

    // Session-7
    document.getElementById("7.1yn").style.display = "none";
    document.getElementById("7.2yn").style.display = "none";
    document.getElementById("7.3yn").style.display = "none";
    document.getElementById("7.4yn").style.display = "none";
    document.getElementById("7.5yn").style.display = "none";
    document.getElementById("7.6yn").style.display = "none";
    document.getElementById("7.7yn").style.display = "none";
    document.getElementById("7.8yn").style.display = "none";
    document.getElementById("7.9yn").style.display = "none";
    document.getElementById("7.10yn").style.display = "none";
    document.getElementById("7.11yn").style.display = "none";
    document.getElementById("7.12yn").style.display = "none";
    document.getElementById("7.13yn").style.display = "none";
    document.getElementById("7.14yn").style.display = "none";
    document.getElementById("7.15yn").style.display = "none";

    // Session-8
    document.getElementById("8amo").style.display = "none";
    document.getElementById("8ddnum").style.display = "none";
    document.getElementById("8ddissd").style.display = "none";
    document.getElementById("8ddexd").style.display = "none";
    document.getElementById("8banme").style.display = "none";
    document.getElementById("8bra").style.display = "none";

    //  Session-10
    document.getElementById("10place").style.display = "none";
    document.getElementById("10sig").style.display = "none";
    var yr=new Date().getFullYear().toString().slice(-2);
    if (fileNumcheck == "") {
        document.getElementById("filenum").innerHTML = "<a  href=#filenumber><p> 0.1 Please Enter file Number </p></a>";

        x = false;
    }
    else if (fileNumcheck.length < 12) {
        document.getElementById("filenum").innerHTML = "<a href=#filenumber ><p> 0.1 Please must be lenth in min12 file Number </p></a>";
        x = false;
    }
    else if (!fileNumcheck.match(/^([A-Z]{4})([0-9]+)$/)) {
        document.getElementById("filenum").innerHTML = "<a href=#filenumber ><p> 0.1  invalid </p></a>";
        x = false;
    }
    // else if (!fileNumcheck.match(/[A-Z][A-Z][A-Z0-9][A-Z0-9][A-Z0-9][A-Z0-9][A-Z0-9][A-Z0-9][A-Z0-9][A-Z0-9][2][2]/)) {
    else if(fileNumcheck.slice(-2)!=yr){
        document.getElementById("filenum").innerHTML = "<a href=#filenumber ><p> 0.1 Plz Starting from Alfabet </p></a>";
        x = false;
    }
    else {
        document.getElementById("filenum").innerHTML = "";

    }

    // Session-1
    
    if (srPiccheck.value == "") {
        document.getElementById("1.1pic").innerHTML="<a href=#srpic><p>1.1 Please Upload Passport photo </p></a>";

        x = false;
    }
    else if (!pic.exec(srPiccheck.value)){
        document.getElementById("1.1pic").innerHTML="<a href=#srpic ><p>Plz Enter Image in png jpg pdf and jpeg</p></a>";
    }
    else{
        document.getElementById("1.1pic").innerHTML="";
    }
    if (document.querySelector('input[name="1.1"]:checked') == null) {
        document.getElementById("service").style.display = "inline";

        x = false;
    }
    if (document.getElementById("1.0.1").checked) {
        if (document.querySelector('input[name="1.2"]:checked') == null) {
            document.getElementById("1.2reiss").style.display = "inline";

            x = false;
        }
    }
    else {
        document.getElementById("1.2reiss").style.display = "none";
    }


    if (srSigcheck.value == "") {
        document.getElementById("1.3sig").innerHTML="<a href=#srsig><p>1.3 Please Upload sign</p></a>";

        x = false;
    }
    else if (!pic.exec(srSigcheck.value)){
        document.getElementById("1.3sig").innerHTML="<a href=#srsig ><p>1.3 Plz Enter Image in png jpg pdf and jpeg</p></a>";
    }
    else{
        document.getElementById("1.3sig").innerHTML="";
    }

    if (document.getElementById("1.2.4").checked) {
        if (document.querySelector('input[name="1.3"]:checked') == null) {
            document.getElementById("1.3rereason").style.display = "inline";

            x = false;
        }
    }
    else {
        document.getElementById("1.3rereason").style.display = "none";
    }

    if (document.querySelector('input[name="1.4"]:checked') == null) {
        document.getElementById("1.4reapp").style.display = "inline";

        x = false;
    }
    if (document.querySelector('input[name="1.5"]:checked') == null) {
        document.getElementById("1.5repb").style.display = "inline";

        x = false;
    }
    if (document.querySelector('input[name="1.6"]:checked') == null) {
        document.getElementById("1.6rereq").style.display = "inline";

        x = false;
    }

    // Session-2
    if (appNamecheck.value == "") {
        document.getElementById("2.1name").style.display = "inline";

        x = false;
    }
    if (appmidNamecheck.value == "") {
        document.getElementById("2.1.1name").style.display = "inline";

        x = false;
    }
    if (appsurNamecheck.value == "") {
        document.getElementById("2.1.2name").style.display = "inline";

        x = false;
    }
    if (document.querySelector('input[name="2.2"]:checked') == null) {
        document.getElementById("2.2ali").style.display = "inline";

        x = false;
    }
    if (document.querySelector('input[name="2.3"]:checked') == null) {
        document.getElementById("2.3yn").style.display = "inline";

        x = false;
    }
    if (appDatecheck.value == "") {
        document.getElementById("2.4date").style.display = "inline";

        x = false;
    }
    if (appPobvillagecheck.value == "") {
        document.getElementById("2.5.1pob").style.display = "inline";

        x = false;
    }
    if (appPobdischeck == "") {
        document.getElementById('2.5.2pob').innerHTML = "<a href=#appdis><p>2.5.2 Enter District</p></a>";
        x = false;
    }
    else if (appPobdischeck == appPobstatecheck || appPobstatecheck == appPobcouncheck || appPobcouncheck == appPobdischeck) {
        document.getElementById("2.5.2pob").innerHTML = "<a  href=#appdis><p> 2.5.2 District State and Country  do not have same value !!</p></a>";
        x = false;
    }
    else {
        document.getElementById("2.5.2pob").innerHTML = "";

    }
    if (appPobstatecheck == "") {
        document.getElementById('2.5.3pob').innerHTML = "<a href=#appstate><p>2.5.3 Enter State</p></a>";
        x = false;
    }
    else if (appPobstatecheck == appPobcouncheck || appPobcouncheck == appPobdischeck || appPobdischeck == appPobstatecheck) {
        document.getElementById("2.5.3pob").innerHTML = "<a  href=#appstate><p> 2.5.3 District State and Country  do not have same value !!</p></a>";
        x = false;
    }
    else {
        document.getElementById("2.5.3pob").innerHTML = "";

    }
    if (appPobcouncheck == "") {
        document.getElementById('2.5.4pob').innerHTML = "<a href=#appcoun><p>2.5.4 enter country</p></a>";
        x = false;
    }
    else if (appPobcouncheck == appPobdischeck || appPobdischeck == appPobstatecheck || appPobstatecheck == appPobcouncheck) {
        document.getElementById("2.5.4pob").innerHTML = "<a  href=#appcoun><p> 2.5.4 dist state country and village do not have same value !!</p></a>";
        x = false;
    }
    else {
        document.getElementById("2.5.4pob").innerHTML = "";

    }
    if (document.querySelector('input[name="2.6"]:checked') == null) {
        document.getElementById("2.6Gender").style.display = "inline";

        x = false;
    }
    if (document.querySelector('input[name="2.7"]:checked') == null) {
        document.getElementById("2.7ms").style.display = "inline";

        x = false;
    }
    if (document.querySelector('input[name="2.8"]:checked') == null) {
        document.getElementById("2.8coi").style.display = "inline";

        x = false;
    }
    if (appPancheck == "") {
        document.getElementById("2.9pan").innerHTML = "<a href=#apppan><p>2.9 Please Enter PAN</p></a>";

        x = false;
    }
    else if (appPancheck.length < 10) {
        document.getElementById("2.9pan").innerHTML = "<a href=#apppan><p>2.9 Please Enter only Digit 10 </p></a>";
        x = false;
    }
    else {
        document.getElementById("2.9pan").innerHTML = "";
    }
    if (appVotercheck == "") {
        document.getElementById("2.10voter").innerHTML = "<a href=#appvoter><p>2.10 Please Enter Voter ID</p></a>";

        x = false;
    }
    else if (appVotercheck.length < 10) {
        document.getElementById("2.10voter").innerHTML = "<a href=#appvoter><p>2.10 Please Enter only Digit 10 </p></a>";
        x = false;
    }
    else {
        document.getElementById("2.10voter").innerHTML = "";
    }
    if (document.querySelector('input[name="2.11"]:checked') == null) {
        document.getElementById("2.11et").style.display = "inline";

        x = false;
    }
    if (appOrgcheck.value == "") {
        document.getElementById("2.12orgname").style.display = "inline";

        x = false;
    }
    if (document.querySelector('input[name="2.13"]:checked') == null) {
        document.getElementById("2.13minor").style.display = "inline";

        x = false;
    }
    if (document.querySelector('input[name="2.14"]:checked') == null) {
        document.getElementById("2.14eq").style.display = "inline";

        x = false;
    }
    if (document.querySelector('input[name="2.15"]:checked') == null) {
        document.getElementById("2.15ecr").style.display = "inline";

        x = false;
    }
    if (appDismarkcheck.value == "") {
        document.getElementById("2.16dismark").style.display = "inline";

        x = false;
    }
    if (appAadhaarcheck == "") {
        document.getElementById("2.17aadhar").innerHTML = "<a href=#appaadhaar><p>2.17 Please Enter Aadhaar Number</p></a>";

        x = false;
    }
    else if (appAadhaarcheck.length < 12) {
        document.getElementById("2.17aadhar").innerHTML = "<a href=#appaadhaar><p>2.17 Please Enter Only 12 Digit Number</p></a>";
        x = false;
    }
    else {
        document.getElementById("2.17aadhar").innerHTML = "";
    }

    // Session-3
    if (appFnamecheck.value == "") {
        document.getElementById("3.1.1fname").style.display = "inline";

        x = false;
    }
    if (appFmnanecheck.value == "") {
        document.getElementById("3.1.2fmname").style.display = "inline";

        x = false;
    }
    if (appFsnamecheck.value == "") {
        document.getElementById("3.1.3fsname").style.display = "inline";

        x = false;
    }
    if (appMnamecheck.value == "") {
        document.getElementById("3.2.1mname").style.display = "inline";

        x = false;
    }
    if (appMmnanecheck.value == "") {
        document.getElementById("3.2.2mmname").style.display = "inline";

        x = false;
    }
    if (appMsnamecheck.value == "") {
        document.getElementById("3.2.3msname").style.display = "inline";

        x = false;
    }
    if (appLnamecheck.value == "") {
        document.getElementById("3.3.1lname").style.display = "inline";

        x = false;
    }
    if (appLmnanecheck.value == "") {
        document.getElementById("3.3.2lmname").style.display = "inline";

        x = false;
    }
    if (appLsnamecheck.value == "") {
        document.getElementById("3.3.3lsname").style.display = "inline";

        x = false;
    }
    if (appSnamecheck.value == "") {
        document.getElementById("3.4.1sname").style.display = "inline";

        x = false;
    }
    if (appSmnanecheck.value == "") {
        document.getElementById("3.4.2smname").style.display = "inline";

        x = false;
    }
    if (appSsnamecheck.value == "") {
        document.getElementById("3.4.3ssname").style.display = "inline";

        x = false;
    }

    // Session-4
    if (preStrcheck == "") {
        document.getElementById("4.1str").innerHTML = "<a href=#prestr><p >4.1 Please Enter House No. and Street Name </p></a>";

        x = false;
    }
    else if (preStrcheck.length < 10) {
        document.getElementById("4.1str").innerHTML = "<a href=#prestr><p>4.1 Please Enter min Digit 10 </p></a>";
        x = false;
    }
    else {
        document.getElementById("4.1str").innerHTML = "";
    }

    if (preCitycheck.value == "") {
        document.getElementById("4.1city").style.display = "inline";

        x = false;
    }
    if (preDischeck.value == "") {
        document.getElementById("4.1dis").style.display = "inline";

        x = false;
    }
    if (prePolicheck.value == "") {
        document.getElementById("4.1poli").style.display = "inline";

        x = false;
    }
    if (preStatecheck.value == "") {
        document.getElementById("4.1state").style.display = "inline";

        x = false;
    }
    if (prePincheck.value == "") {
        document.getElementById("4.1pin").style.display = "inline";

        x = false;
    }
    if (preMoncheck.value == "") {
        document.getElementById("4.1mon").style.display = "inline";

        x = false;
    }
    if (preTelncheck.value == "") {
        document.getElementById("4.1teln").style.display = "inline";

        x = false;
    }
    if (preEidcheck == "") {
        document.getElementById("4.1eid").innerHTML = "<a href=#preeid><p> 4.1 Please Enter E-mail </p></a>";
        x = false;
    }
    else if (!preEidcheck.match(/^([a-z0-9]+)@([a-z0-9]+).([a-z]+)$/)) {
        document.getElementById("4.1eid").innerHTML = "<a href=#preeid><p> 4.1 Please Enter small letter, number add @ . </p></a>";
        x = false;
    }
    else {
        document.getElementById("4.1eid").innerHTML = "";
    }
    if (document.querySelector('input[name="4.2"]:checked') == null) {
        document.getElementById("4.2add").style.display = "inline";

        x = false;
    }

    // Session-5
    if (document.getElementById("4.2.1").checked) {
        if (emeAddcheck.value == "") {
            document.getElementById("5emeadd").style.display = "inline";

            x = false;
        }
    }
    else {
        document.getElementById("5emeadd").style.display = "none";
    }
    if (document.getElementById("4.2.1").checked) {
        if (emeMoncheck.value == "") {
            document.getElementById("5ememon").style.display = "inline";

            x = false;
        }
    }
    else {
        document.getElementById("5ememon").style.display = "none";
    }
    if (document.getElementById("4.2.1").checked) {
        if (emetelncheck.value == "") {
            document.getElementById("5emeteln").style.display = "inline";

            x = false;
        }
    }
    else {
        document.getElementById("5emeteln").style.display = "none";
    }
    if (document.getElementById("4.2.1").checked) {
        if (emeEidcheck.value == "") {
            document.getElementById("5emeeid").style.display = "inline";

            x = false;
        }
    }
    else {
        document.getElementById("5emeeid").style.display = "none";
    }

    // Session-6
    if (document.getElementById("1.0.1").checked) {
        if (prvCerncheck == "") {
            document.getElementById("6.1num").innerHTML = "<a href=#prvcern><p >6.1 Please Enter Certificate Number</p></a>";
            x = false;
        }
        else if (prvCerncheck.length < 8) {
            document.getElementById("6.1num").innerHTML = "<a href=#prvcern><p>6.1 Please Enter min Digit 8 </p></a>";
            x = false;
        }
        else {
            document.getElementById("6.1num").innerHTML = "";
        }
    }
    else {
        document.getElementById("6.1num").style.display = "none";
    }
    if (document.getElementById("1.0.1").checked) {
        if (prvDoicheck > prvDoecheck) {
            document.getElementById("6.1doi").innerHTML = "<a href=#prvdoi><p >6.1  Issue is Greter than Expire </p></a>";
            x = false;
        }
        else if (prvDoicheck < prvDoecheck) {
            document.getElementById("6.1doi").innerHTML = "";

        }
        else {
            document.getElementById("6.1doi").innerHTML = "<a href=#prvdoi><p >6.1 Enter Date Issue and Expire Date </p></a>";
            x = false;
        }

    }
    else {
        document.getElementById("6.1doi").style.display = "none";
    }
    if (document.getElementById("1.0.1").checked) {
        if (prvPlacecheck.value == "") {
            document.getElementById("6.1place").style.display = "inline";

            x = false;
        }
    }
    else {
        document.getElementById("6.1place").style.display = "none";
    }

    if (document.querySelector('input[name="6.2"]:checked') == null) {
        document.getElementById("6.2issued").style.display = "inline";

        x = false;
    }

    if (document.getElementById("6.2").checked) {

        if (prvFilencheck.value == "") {
            document.getElementById("6.2num").style.display = "inline";

            x = false;
        }
    }
    else {
        document.getElementById("6.2num").style.display = "none";
    }

    if (document.getElementById("6.2").checked) {

        if (prvMayocheck.value == "") {
            document.getElementById("6.2mayo").style.display = "inline";

            x = false;
        }
    }
    else {
        document.getElementById("6.2mayo").style.display = "none";
    }
    if (document.getElementById("6.2").checked) {

        if (prvPassoffcheck.value == "") {
            document.getElementById("6.2passoff").style.display = "inline";

            x = false;
        }
    }
    else {
        document.getElementById("6.2passoff").style.display = "none";
    }

    // Session-7
    if (document.querySelector('input[name="7.1.1"]:checked') == null) {
        document.getElementById("7.1yn").style.display = "inline";

        x = false;
    }
    if (document.querySelector('input[name="7.1.2"]:checked') == null) {
        document.getElementById("7.2yn").style.display = "inline";

        x = false;
    }
    if (document.querySelector('input[name="7.1.3"]:checked') == null) {
        document.getElementById("7.3yn").style.display = "inline";

        x = false;
    }
    if (document.querySelector('input[name="7.1.4"]:checked') == null) {
        document.getElementById("7.4yn").style.display = "inline";

        x = false;
    }
    if (document.querySelector('input[name="7.2.1"]:checked') == null) {
        document.getElementById("7.5yn").style.display = "inline";

        x = false;
    }
    if (document.querySelector('input[name="7.3.1"]:checked') == null) {
        document.getElementById("7.6yn").style.display = "inline";

        x = false;
    }
    if (document.querySelector('input[name="7.3.2"]:checked') == null) {
        document.getElementById("7.7yn").style.display = "inline";

        x = false;
    }
    if (document.querySelector('input[name="7.3.3"]:checked') == null) {
        document.getElementById("7.8yn").style.display = "inline";

        x = false;
    }
    if (document.querySelector('input[name="7.4.1"]:checked') == null) {
        document.getElementById("7.9yn").style.display = "inline";

        x = false;
    }
    if (document.querySelector('input[name="7.4.2"]:checked') == null) {
        document.getElementById("7.10yn").style.display = "inline";

        x = false;
    }
    if (document.querySelector('input[name="7.4.3"]:checked') == null) {
        document.getElementById("7.11yn").style.display = "inline";

        x = false;
    }
    if (document.querySelector('input[name="7.4.4"]:checked') == null) {
        document.getElementById("7.12yn").style.display = "inline";

        x = false;
    }
    if (document.querySelector('input[name="7.5.1"]:checked') == null) {
        document.getElementById("7.13yn").style.display = "inline";

        x = false;
    }
    if (document.querySelector('input[name="7.5.2"]:checked') == null) {
        document.getElementById("7.14yn").style.display = "inline";

        x = false;
    }

    if (document.querySelector('input[name="7.5.3"]:checked') == null) {
        document.getElementById("7.15yn").style.display = "inline";

        x = false;
    }

    // Session-8
    if (feeAmocheck.value == "") {
        document.getElementById("8amo").style.display = "inline";

        x = false;
    }
    if (feeDnumcheck.value == "") {
        document.getElementById("8ddnum").style.display = "inline";

        x = false;
    }
    if (feeDdisdcheck.value == "") {
        document.getElementById("8ddissd").style.display = "inline";

        x = false;
    }
    if (feeDdexdcheck.value == "") {
        document.getElementById("8ddexd").style.display = "inline";

        x = false;
    }
    if (feeBnamecheck.value == "") {
        document.getElementById("8banme").style.display = "inline";

        x = false;
    }
    if (feeBranchcheck.value == "") {
        document.getElementById("8bra").style.display = "inline";

        x = false;
    }

    // Session-10
    if (sdPlacecheck.value == "") {
        document.getElementById("10place").style.display = "inline";

        x = false;
    }
    if (sdSigcheck.value == "") {
        document.getElementById("10sig").style.display = "inline";

        x = false;
    }
    return x;

}