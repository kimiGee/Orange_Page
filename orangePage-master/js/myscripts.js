
    function interbutton() {
        /*document.getElementById("parentguest").src = "\images\Parent_Guest Interface.png"*/
        alert("Hello World!");
    }

    function showGUI() {
        document.getElementById('wbs_gui').style.display = 'block';
        document.getElementById('wbs_algo').style.display = 'none';
        document.getElementById('wbs_data').style.display = 'none';
        document.getElementById('wbs_test').style.display = 'none';
    };
    
    function showAlgo() {
        document.getElementById('wbs_algo').style.display = 'block';
        document.getElementById('wbs_gui').style.display = 'none';
        document.getElementById('wbs_data').style.display = 'none';
        document.getElementById('wbs_test').style.display = 'none';
    };
    
    function showData() {
        document.getElementById('wbs_data').style.display = 'block';
        document.getElementById('wbs_algo').style.display = 'none';
        document.getElementById('wbs_gui').style.display = 'none';
        document.getElementById('wbs_test').style.display = 'none';
    };
    
    function showTest() {
        document.getElementById('wbs_test').style.display = 'block';
        document.getElementById('wbs_data').style.display = 'none';
        document.getElementById('wbs_algo').style.display = 'none';
        document.getElementById('wbs_gui').style.display = 'none';
    };
    