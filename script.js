const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
 let ans=false;
	for(const keys in sampleObject)
		{
			if(keys===key)
			{
				ans=true; 
			}
		}  

	return ans;
   //   write your code here
} 

// Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey(key));
