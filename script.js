
const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})



var button1 = document.getElementById("security");
button1.addEventListener("click", function() {
    

    //const AWS = require('aws-sdk');
    const ACCESS_KEY_ID = "AKIA47CRW5WNBS42SC4W";
    const SECRET_ACCESS_KEY = "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";
    console.log("Connecting to AWS Client...");
    AWS.config.update({
        accessKeyId: ACCESS_KEY_ID,
        secretAccessKey: SECRET_ACCESS_KEY,
        region: 'us-east-1'
    });
    const s3 = new AWS.S3();
    s3.listBuckets(function(err, data) {
        if (err) {
            console.log("Error", err);
        } else {
            console.log("Success", data.Buckets);
            alert("S3 Buckets: " + data.Buckets.map(bucket => bucket.Name).join(', '));
        }
    });
    /*
    const s3_client = new AWS.S3({
        accessKeyId: ACCESS_KEY_ID,
        secretAccessKey: SECRET_ACCESS_KEY
    });*/
    console.log("Retrieving all the S3 buckets...");
    
    /*
    s3_client.listBuckets((err, response) => {
        if (err) {
            console.error("Error retrieving S3 buckets:", err);
            return;
        }
        else {
            console.log("S3 Buckets:", data.Buckets);
          }
    });*/

    //alert("Button clicked!") 
});












// Get the availability element
var button2 = document.getElementById("availability");

// Add a click event listener
button2.addEventListener("click", function() {
    // This function will be executed when the button is clicked
    alert("Button clicked!");
});



// Get the security element
var button3 = document.getElementById("cost");

// Add a click event listener
button3.addEventListener("click", function() {
    // This function will be executed when the button is clicked
    alert("Button clicked!");
});
////////////////////////////////////////////////////////////
