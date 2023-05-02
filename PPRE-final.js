<button id="myButton" onclick="changeText()">Click me!</button>



	<script>

		function changeText() {

			var button = document.getElementById("myButton");

			if (button.innerHTML == "Click me!") {

				button.innerHTML = "You clicked me!";

				button.style.backgroundColor = "red";

				button.style.color = "white";

			} else {

				button.innerHTML = "Click me!";

				button.style.backgroundColor = "blue";

				button.style.color = "white";

			}

		}

	</script>



</body>

</html