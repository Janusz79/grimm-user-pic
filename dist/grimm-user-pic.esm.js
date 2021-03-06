import { Carousel, Slide } from 'vue-carousel';
import axios from 'axios';
import { VImg } from 'vuetify/lib';

var img1 = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOC4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGl2ZWxsb18xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDExOTAuNiA4NDEuOSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTE5MC42IDg0MS45IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxjaXJjbGUgZmlsbD0iI0ZGRkZGRiIgY3g9IjU5NS4zIiBjeT0iNDIwLjkiIHI9IjQyMC45Ii8+DQo8Zz4NCgk8Zz4NCgkJPGRlZnM+DQoJCQk8Y2lyY2xlIGlkPSJTVkdJRF8xXyIgY3g9IjU5NS4zIiBjeT0iNDIwLjkiIHI9IjQyMC45Ii8+DQoJCTwvZGVmcz4NCgkJPGNsaXBQYXRoIGlkPSJTVkdJRF8yXyI+DQoJCQk8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8xXyIgIG92ZXJmbG93PSJ2aXNpYmxlIi8+DQoJCTwvY2xpcFBhdGg+DQoJCTxnIGNsaXAtcGF0aD0idXJsKCNTVkdJRF8yXykiPg0KCQkJPGc+DQoJCQkJPHBhdGggZmlsbD0iI0ZFQzQ5QyIgZD0iTTY4Mi4xLDYwMS4zYy00LDE2LjctOCw1NC4xLTEuMyw3Mi4yYzIuNyw2LjcsMTI5LjYsNTUuNSwxNDUsNjEuNWMzMS40LDEyLjcsNTkuNSwyNS40LDcxLjUsMzguOA0KCQkJCQljMTMuNCwxNC43LDIzLjQsNDAuMSwyMy40LDc0LjJjLTI1Ny45LDAtMzkyLjksMC02NTAuMSwwYzAtMzQuMSwxMC01OS41LDIzLjQtNzQuMmMxMi0xMi43LDM5LjQtMjYuMSw3MS41LTM4LjgNCgkJCQkJYzE1LjQtNiwxNDIuMy01NC44LDE0NS02MS41YzYuNy0xOCwyLjctNTUuNS0xLjMtNzIuMkM2MTIsNTQ2LjYsNTc3LjksNTQ2LjYsNjgyLjEsNjAxLjN6Ii8+DQoJCQkJPHBhdGggZmlsbD0iI0QyQTU4OCIgZD0iTTcxNC4yLDY5MC4yYzAsMC0zNS40LDUwLjEtNjIuOCw1My41Yy00MS40LDQuNy01MS40LTkuNC03OC44LTM2LjFjLTIyLjctMjIuNy01MC44LTUyLjgtNTkuNS03My41DQoJCQkJCWMwLDAtNC43LTQxLjQtOC00OC4xYy0zLjMtNi43LDc2LjgtMzYuNyw3Ni44LTM2LjdsODAuOC0xLjNsMTkuNCw1My41YzAsMC0xMCw1MC44LTEuMyw3Mi4yTDcxNC4yLDY5MC4yeiIvPg0KCQkJCTxnPg0KCQkJCQk8cGF0aCBmaWxsPSIjRkVDNDlDIiBkPSJNNDU4LjMsNDkzLjFjMCwwLTI0LjcsNy4zLTQyLjEtMTMuNHMtNTAuMS0xMTcuNiwyNS40LTEwNC4yTDQ1OC4zLDQ5My4xeiIvPg0KCQkJCQk8cGF0aCBmaWxsPSIjRkVDNDlDIiBkPSJNNzI4LjIsNDkzLjFjMCwwLDI0LjcsNy4zLDQyLjEtMTMuNGMxNy40LTIwLjcsNTAuMS0xMTcuNi0yNS40LTEwNC4yTDcyOC4yLDQ5My4xeiIvPg0KCQkJCQk8cGF0aCBmaWxsPSIjRkVDNDlDIiBkPSJNNjc4LjgsNjE4LjFjLTc0LjIsNzkuNS05Ni4yLDc5LjUtMTcwLjQsMEM0NTksNTY1LjMsNDUxLDUwOS44LDQ0Ny42LDQ0NC4zDQoJCQkJCQljLTMuMy01OC44LTE5LjQtMTQwLjMsMTIuNy0xNzkuMWM1MC44LTYwLjgsMjE1LjgtNjAuOCwyNjYuNiwwYzMyLjEsMzguOCwxNiwxMTkuNiwxMi43LDE3OS4xDQoJCQkJCQlDNzM2LjMsNTA5LjEsNzI4LjIsNTY0LjYsNjc4LjgsNjE4LjF6Ii8+DQoJCQkJPC9nPg0KCQkJPC9nPg0KCQkJPHBhdGggZmlsbD0iIzM1MzYzNCIgZD0iTTQzNC4yLDQzNi4zaDEyLjdjMCwwLTIxLjQtMTU5LDM5LjQtMTkxLjhzMjQxLjksMjIsMjU4LjYsNjcuNWwtNC43LDEyNC4zaDEzLjRsMTUuNC02MC4xDQoJCQkJYzAsMCwxMi0xMDAuMiw4LjctMTA5LjZjLTIuNy05LjQtMi04My41LTE2Ni40LTEyNC4zYzAsMC0xMjctMjYuNy0xNzIuNCw2NS41YzAsMC02LjcsMTYuNy00LDM4LjhjMCwwLTI5LjQsNC0yNy40LDU0LjgNCgkJCQlDNDA5LjUsMzUyLjEsNDM0LjIsNDM2LjMsNDM0LjIsNDM2LjN6Ii8+DQoJCQk8cGF0aCBmaWxsPSIjQzQ0OTVFIiBkPSJNNzA4LjksNjg3LjVjMzguOCwxNi43LDEwNi4yLDQzLjQsMTE2LjksNDcuNGMzMS40LDEyLjcsNTkuNSwyNS40LDcxLjUsMzguOA0KCQkJCWMxMy40LDE0LjcsMjMuNCw0MC4xLDIzLjQsNzQuMmMtMjU3LjksMC0zOTIuOSwwLTY1MC4xLDBjMC0zNC4xLDEwLTU5LjUsMjMuNC03NC4yYzEyLTEyLjcsMzkuNC0yNi4xLDcxLjUtMzguOA0KCQkJCWMxMC43LTQsNzguOC0zMC43LDExNy42LTQ3LjRjMjAsNDYuOCw2Mi44LDc4LjgsMTEyLjksNzguOEM2NDUuNCw3NjYuNCw2ODguOCw3MzQuMyw3MDguOSw2ODcuNXoiLz4NCgkJCTxwYXRoIGZpbGw9IiNBNjQzNTgiIGQ9Ik03MjAuMiw2OTIuMmMtMjAuNyw1Mi4xLTY5LjUsODYuMi0xMjQuMyw4Ni4ycy0xMDMuNi0zNC4xLTEyNC4zLTg2LjJsMTEuNC00LjcNCgkJCQljMjIuNyw0NC4xLDYwLjEsNzguOCwxMTMuNiw3OC44YzUzLjUsMCw5Mi45LTM0LjcsMTEyLjMtNzguOEw3MjAuMiw2OTIuMnoiLz4NCgkJPC9nPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg0K";

var img2 = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOC4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGl2ZWxsb18xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDExOTAuNiA4NDEuOSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTE5MC42IDg0MS45IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxjaXJjbGUgZmlsbD0iI0ZGRkZGRiIgY3g9IjU5NS45IiBjeT0iNDE0LjkiIHI9IjQyMC45Ii8+DQo8Zz4NCgk8Zz4NCgkJPGRlZnM+DQoJCQk8Y2lyY2xlIGlkPSJTVkdJRF8xXyIgY3g9IjU5NS45IiBjeT0iNDE0LjkiIHI9IjQyMC45Ii8+DQoJCTwvZGVmcz4NCgkJPGNsaXBQYXRoIGlkPSJTVkdJRF8yXyI+DQoJCQk8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8xXyIgIG92ZXJmbG93PSJ2aXNpYmxlIi8+DQoJCTwvY2xpcFBhdGg+DQoJCTxnIGNsaXAtcGF0aD0idXJsKCNTVkdJRF8yXykiPg0KCQkJPGc+DQoJCQkJPHBhdGggZmlsbD0iI0ZFQzQ5QyIgZD0iTTY5MS41LDU5MmMtNCwxNy40LTgsNTYuMS0xLjMsNzQuMmMyLjcsNi43LDEzMy42LDU2LjgsMTQ5LDYzLjVjMzIuNywxMi43LDYwLjgsMjYuMSw3My41LDM5LjQNCgkJCQkJYzE0LDE1LjQsMjQuMSw0MS40LDI0LjEsNzYuMmMtMjY0LjYsMC00MDMuNiwwLTY2Ny41LDBjMC0zNC43LDEwLjctNjEuNSwyNC4xLTc2LjJjMTItMTMuNCw0MC44LTI2LjcsNzMuNS0zOS40DQoJCQkJCWMxNS40LTYsMTQ2LjMtNTYuMSwxNDktNjMuNWM2LjctMTgsMi43LTU2LjgtMS4zLTc0LjJDNjIwLDUzNS45LDU4NC42LDUzNS45LDY5MS41LDU5MnoiLz4NCgkJCQk8cGF0aCBmaWxsPSIjRDJBNTg4IiBkPSJNNzI0LjIsNjgzLjVjMCwwLTM2LjEsNTEuNC02NC44LDU0LjhjLTQyLjgsNC43LTUyLjgtOS40LTgwLjgtMzcuNGMtMjMuNC0yMy40LTUyLjEtNTQuMS02MC44LTc1LjUNCgkJCQkJYzAsMC00LjctNDIuMS04LTQ5LjRjLTMuMy03LjMsNzguOC0zNy40LDc4LjgtMzcuNGw4Mi45LTEuM2wxOS40LDU1LjVjMCwwLTEwLjcsNTIuMS0xLjMsNzQuMkw3MjQuMiw2ODMuNXoiLz4NCgkJCQk8cGF0aCBmaWxsPSIjRkVDNDlDIiBkPSJNNDc3LDQ5My4xYzAsMC0yNS40LDgtNDMuNC0xMy40Yy0xOC0yMS40LTUxLjQtMTIwLjMsMjYuMS0xMDYuOUw0NzcsNDkzLjF6Ii8+DQoJCQkJPHBhdGggZmlsbD0iI0ZFQzQ5QyIgZD0iTTczMS42LDQ5My4xYzAsMCwyNS40LDgsNDMuNC0xMy40YzE4LTIxLjQsNTEuNC0xMjAuMy0yNi4xLTEwNi45TDczMS42LDQ5My4xeiIvPg0KCQkJCTxwYXRoIGZpbGw9IiNGRUM0OUMiIGQ9Ik02ODguMiw2MDkuNGMtNzYuMiw4Mi4yLTk4LjksODIuMi0xNzUuMSwwYy01MC44LTU0LjEtNTkuNS0xMTEuNi02Mi44LTE3OC40DQoJCQkJCWMtMy4zLTYwLjgtMjAtMTQzLjcsMTMuNC0xODMuN2M1Mi4xLTYyLjEsMjIxLjgtNjIuMSwyNzMuOSwwQzc3MSwyODYuNiw3NTQuMywzNzAuMiw3NTEsNDMxDQoJCQkJCUM3NDcuNiw0OTcuOCw3MzguOSw1NTQuNiw2ODguMiw2MDkuNHoiLz4NCgkJCTwvZz4NCgkJCTxwYXRoIGZpbGw9IiM3RDM3MkUiIGQ9Ik00NjAuMyw0MzljMCwwLTE0LjctNjQuMS0yNS40LTY2LjFjMCwwLTE0LjctNTcuNS03LjMtMTEwLjljNC43LTM1LjQsMjEuNC02NS41LDUwLjgtOTEuNQ0KCQkJCWM2NC44LTU2LjgsMTg3LjgtNTQuOCwyNTguNiwxMmMxOCwxNi43LDIyLDI2LjcsMjIuNyw1MC44djEyLjdjMCwwLDIxLjQsOS40LDIxLjQsNDMuNHMtNy4zLDgzLjUtNy4zLDgzLjVzLTE0LjcsMTQtMjEuNCw0OS40DQoJCQkJTDc1MSw0NDFsLTEwLjctMS4zYzAsMCw5LjQtODguMiw3LjMtMTExLjZjLTIuNy0yMy40LDAuNy0zNy40LTMwLjEtMzkuNGMwLDAtMjIuNyw0Ny40LTE1NS43LDI2LjFjMCwwLTY1LjUtMTgtODYuMiwxMg0KCQkJCWMtMjEuNCwzMC4xLTEwLDg3LjUtMTAsODcuNWwzLjMsMjUuNEw0NjAuMyw0Mzl6Ii8+DQoJCQk8cGF0aCBmaWxsPSIjRUY4MjQzIiBkPSJNNzI0LjksNjgzLjVjNDEuNCwxOCwxMDQuMiw0MC4xLDExNC4zLDQ0LjFjMzIuNywxMy40LDYwLjgsMjYuNyw3My41LDQwLjFjMTQsMTUuNCwyNC4xLDQyLjEsMjQuMSw3Ny41DQoJCQkJYy0yNjQuNiwwLTQwMy42LDAtNjY3LjUsMGMwLTM1LjQsMTAuNy02Mi4xLDI0LjEtNzcuNWMxMi0xMy40LDQwLjgtMjYuNyw3My41LTQwLjFjMTAtNCw3MC44LTI1LjQsMTExLjYtNDMuNA0KCQkJCWMzOC4xLDE3LjQsNzcuNSwyNi4xLDEyMi45LDI2LjFDNjQ1LjQsNzEwLjksNjg2LjEsNzAxLjYsNzI0LjksNjgzLjV6Ii8+DQoJCTwvZz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg==";

var img3 = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOC4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGl2ZWxsb18xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDExOTAuNiA4NDEuOSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTE5MC42IDg0MS45IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxjaXJjbGUgZmlsbD0iI0ZGRkZGRiIgY3g9IjYwMS4zIiBjeT0iNDIxLjYiIHI9IjQyMC45Ii8+DQo8Zz4NCgk8Zz4NCgkJPGRlZnM+DQoJCQk8Y2lyY2xlIGlkPSJTVkdJRF8xXyIgY3g9IjYwMS4zIiBjeT0iNDIxLjYiIHI9IjQyMC45Ii8+DQoJCTwvZGVmcz4NCgkJPGNsaXBQYXRoIGlkPSJTVkdJRF8yXyI+DQoJCQk8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8xXyIgIG92ZXJmbG93PSJ2aXNpYmxlIi8+DQoJCTwvY2xpcFBhdGg+DQoJCTxnIGNsaXAtcGF0aD0idXJsKCNTVkdJRF8yXykiPg0KCQkJPGc+DQoJCQkJPHBhdGggZmlsbD0iI0ZFQzQ5QyIgZD0iTTY5Ny41LDU5Mi43Yy00LDE2LjctOCw1NS41LTEuMyw3My41YzIuNyw2LjcsMTMyLjMsNTYuMSwxNDcuNyw2Mi44YzMyLjEsMTIuNyw2MC4xLDI2LjEsNzIuMiwzOS40DQoJCQkJCWMxMy40LDE0LjcsMjQuMSw0MC44LDI0LjEsNzUuNWMtMjYxLjksMC0zOTguOSwwLTY2MC44LDBjMC0zNC43LDEwLTYwLjgsMjQuMS03NS41YzEyLTEzLjQsNDAuMS0yNi4xLDcyLjItMzkuNA0KCQkJCQljMTUuNC02LDE0NS01Ni4xLDE0Ny43LTYyLjhjNi43LTE4LDIuNy01Ni4xLTEuMy03My41QzYyNi43LDUzNy4yLDU5MS4zLDUzNi41LDY5Ny41LDU5Mi43eiIvPg0KCQkJCTxwYXRoIGZpbGw9IiNEMkE1ODgiIGQ9Ik03MzAuMiw2ODIuOWMwLDAtMzYuMSw1MC44LTY0LjEsNTQuMWMtNDIuMSw0LjctNTIuMS05LjQtODAuMi0zNi43Yy0yMy40LTIyLjctNTEuNC01My41LTYwLjEtNzQuOA0KCQkJCQljMCwwLTQuNy00Mi4xLTgtNDguOGMtMy4zLTcuMyw3OC4yLTM3LjQsNzguMi0zNy40bDgyLjItMS4zbDE5LjQsNTQuOGMwLDAtMTAsNTEuNC0xLjMsNzMuNUw3MzAuMiw2ODIuOXoiLz4NCgkJCQk8cGF0aCBmaWxsPSIjRkVDNDlDIiBkPSJNNDgyLjQsNDg5LjhjMCwwLTI0LjcsNy4zLTQyLjgtMTMuNGMtMTgtMjEuNC01MC44LTExOC45LDI2LjEtMTA1LjZMNDgyLjQsNDg5Ljh6Ii8+DQoJCQkJPHBhdGggZmlsbD0iI0ZFQzQ5QyIgZD0iTTczNi45LDQ4OS44YzAsMCwyNC43LDcuMyw0Mi44LTEzLjRjMTgtMjEuNCw1MC44LTExOC45LTI2LjEtMTA1LjZMNzM2LjksNDg5Ljh6Ii8+DQoJCQkJPHBhdGggZmlsbD0iI0ZFQzQ5QyIgZD0iTTY5NC4yLDYwOS40Yy03NS41LDgwLjgtOTguMiw4MC44LTE3My4xLDBDNDcxLDU1NS4yLDQ2Mi4zLDQ5OS4xLDQ1OSw0MzMNCgkJCQkJYy0zLjMtNjAuMS0xOS40LTE0Mi4zLDEzLjQtMTgxLjdjNTEuNC02MS41LDIxOS4yLTYxLjUsMjcxLjMsMGMzMi43LDM5LjQsMTYsMTIxLjYsMTMuNCwxODEuNw0KCQkJCQlDNzUyLjMsNDk5LjEsNzQ0LjMsNTU1LjIsNjk0LjIsNjA5LjR6Ii8+DQoJCQk8L2c+DQoJCQk8cGF0aCBmaWxsPSIjMDA3MUJDIiBkPSJNNzA0LjksNjcxLjVjMzIuMSwxNS40LDEyNS42LDUyLjEsMTM4LjMsNTYuOGMzMi4xLDEyLjcsNjAuMSwyNi4xLDcyLjIsMzkuNA0KCQkJCWMxMy40LDE0LjcsMjQuMSw0MC44LDI0LjEsNzUuNWMtMjYxLjksMC0zOTguOSwwLTY2MC44LDBjMC0zNC43LDEwLTYwLjgsMjQuMS03NS41YzEyLTEzLjQsNDAuMS0yNi4xLDcyLjItMzkuNA0KCQkJCWMxMi43LTUuMywxMDYuOS00MS40LDEzOS01Ny41bDk1LjUsMjAuN0w3MDQuOSw2NzEuNXoiLz4NCgkJCTxwYXRoIGZpbGw9IiNFQkVCRUIiIGQ9Ik01MjUuOCw2MzAuN2MtNy4zLTAuNy04LjcsMjQuNy0xMiw0MC4xYzAsMCwyMCw1MS40LDYwLjgsOTIuOWMwLDAsMy4zLDMuMyw2LDIuN2MwLjcsMCwyLjctNi43LDQuNy0xMy40DQoJCQkJYzAuNy0yLDEuMy00LDItNmMyLTUuMywzLjMtMTAuNyw0LTExLjRjNi43LTE3LjQsMTYtNDEuNCwxNi43LTQ0LjhoLTAuN0M1ODUuMyw2ODQuOSw1MjYuNSw2NTAuOCw1MjUuOCw2MzAuN3oiLz4NCgkJCTxwYXRoIGZpbGw9IiNFQkVCRUIiIGQ9Ik02OTIuOCw2MzAuN2M3LjMtMC43LDguNywyNC43LDEyLDQwLjFjMCwwLTIwLDUxLjQtNjAuOCw5Mi45YzAsMC0zLjMsMy4zLTYsMi43DQoJCQkJYy0wLjctMC43LTEwLTI4LjEtMTAuNy0zMC4xYy02LjctMTcuNC0xNi00MS40LTE2LjctNDQuOEM2MzIsNjg1LjUsNjkyLjIsNjUwLjgsNjkyLjgsNjMwLjd6Ii8+DQoJCQk8cmVjdCB4PSI1ODYuNiIgeT0iNzQ1IiBmaWxsPSIjMzEzNTM2IiB3aWR0aD0iNDQuMSIgaGVpZ2h0PSI5Ny42Ii8+DQoJCQk8cGF0aCBmaWxsPSIjMjMyNzJBIiBkPSJNNTg3LjksNzUzLjdjMCwwLDI0LjEtMTMuNCw0NC4xLDAuN2MwLDAsNCwyLDEuMy0xMC43Yy0yLjctMTIuNy0xMy40LTUxLjQtMjIuNy01Mi4xDQoJCQkJYy05LjQsMC0yMy40LDQxLjQtMjUuNCw1My41QzU4My4yLDc1Nyw1ODcuOSw3NTMuNyw1ODcuOSw3NTMuN3oiLz4NCgkJCTxwYXRoIGZpbGw9IiM2MDQ1MzAiIGQ9Ik00NDIuOSwzMDMuM2MwLDAtMjguNy0xNi43LTAuNy04OC4yYzI4LjEtNzEuNSwxMzMtMTAwLjksMTk5LjgtNjguOGMwLDAsNjMuNSwxOS40LDEwNi4yLDYwLjENCgkJCQljMCwwLDE0LDI1LjQsMTMuNCwzOC44YzAsMCwyMi43LDE0LDIzLjQsMzIuN3MtNCwyOC4xLTkuNCwzMC43djY0LjFjMCwwLTE3LjQsMTguNy0yMCw1NS41Yy0yLjcsMzYuNy02LDY1LjUtNiw2NS41bC04LjcsMzYuNw0KCQkJCWwtNS4zLDY4LjJjLTIsMjguNy0zLjMsMzcuNC0yMi43LDYwLjhjLTE2LjcsMjAuNy00NC4xLDQ2LjEtODQuMiw1Ni4xYy00Ni4xLDEyLTkxLjUtMjIuNy0xMTguOS01MC4xDQoJCQkJYy0yMy40LTIzLjQtMjQuNy0yNy40LTI3LjQtNTcuNWwtNS4zLTYzLjVsLTEzLjQtNTEuNGwtOC04OC45YzAsMC0yLjctMjYuNy0xNC0zMS40TDQ0Mi45LDMwMy4zTDQ0Mi45LDMwMy4zeiBNNjA4LjYsNTQxLjkNCgkJCQljLTI3LjQsMC00OS40LDYtNDkuNCwxMi43YzAsNy4zLDIyLDEyLjcsNDkuNCwxMi43czQ5LjQtNiw0OS40LTEyLjdDNjU4LjEsNTQ3LjIsNjM2LDU0MS45LDYwOC42LDU0MS45TDYwOC42LDU0MS45eg0KCQkJCSBNNDc0LjMsMzg2LjljMCwwLDEyLjcsMTAwLjksMTcuNCwxMjEuNmM0LjcsMjAuNywyNC43LDQ4LjgsMzguOCw0Mi44YzYtMi43LDE0LjctOS40LDI0LjEtMTQuN2MxNC04LDE5LjQtOS40LDM1LjQtNg0KCQkJCWM2LjcsMS4zLDE0LDIuNywyMS40LDJjMTcuNC0xLjMsMjcuNC00LjcsMzQuNy00YzIyLjcsMiwxOS40LDIxLjQsNDIuMSwyMmMyOS40LDAuNyw0MC4xLTQ4LjgsNDAuMS00OC44bDE2LTExNi45DQoJCQkJYzE4LjctMTgsMTgtNTQuOCwxOC01NC44cy0wLjctMTQtMTEuNC0zMC43Yy0xMC43LTE3LjQtMzAuNy04LTMwLjctOGMtMjIsMzcuNC0xOTAuNCwyLjctMjEwLjUtNC43Yy0yMC03LjMtNDIuOC00LTUxLjQsMzYuMQ0KCQkJCUM0NDkuNiwzNjIuMSw0NzQuMywzODYuOSw0NzQuMywzODYuOXoiLz4NCgkJPC9nPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg0K";

var img4 = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOC4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGl2ZWxsb18xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDExOTAuNiA4NDEuOSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTE5MC42IDg0MS45IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxjaXJjbGUgZmlsbD0iI0ZGRkZGRiIgY3g9IjU5NS4zIiBjeT0iNDIwLjkiIHI9IjQyMC45Ii8+DQo8Zz4NCgk8Zz4NCgkJPGRlZnM+DQoJCQk8Y2lyY2xlIGlkPSJTVkdJRF8xXyIgY3g9IjU5NS4zIiBjeT0iNDIwLjkiIHI9IjQyMC45Ii8+DQoJCTwvZGVmcz4NCgkJPGNsaXBQYXRoIGlkPSJTVkdJRF8yXyI+DQoJCQk8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8xXyIgIG92ZXJmbG93PSJ2aXNpYmxlIi8+DQoJCTwvY2xpcFBhdGg+DQoJCTxnIGNsaXAtcGF0aD0idXJsKCNTVkdJRF8yXykiPg0KCQkJPHBhdGggZmlsbD0iIzNBM0IzOSIgZD0iTTQ5MSw1NjAuNmMwLDAtMTYsMi43LTQ0LjEtMzUuNGMtMjguNy0zOC4xLTYwLjEtMTA4LjktMzQuMS0yMDEuOGMyNC43LTg2LjksNTIuOC0xNTMuNyw5MC45LTE1MC4zDQoJCQkJYzIuNywwLDUuMywwLjcsOCwyYzQyLjEsMTQuNyw4MS41LDUwLjgsOTIuMiw2NS41QzYxNCwyNTUuOSw0OTEsNTYwLjYsNDkxLDU2MC42eiIvPg0KCQkJPGc+DQoJCQkJPHBhdGggZmlsbD0iI0ZFQzQ5QyIgZD0iTTUyMC40LDU5Ny4zbDgsMzQuN2M4LDM1LjQsNy4zLDM4LjEtMjIsNTIuOGMtNDguMSwyNC43LTEzMS42LDM4LjgtMTYwLjQsODUuNQ0KCQkJCQljLTEwLjcsMTcuNC0xMS40LDM4LjEtMTEuNCw3MS41YzE3My43LDAsMzQ3LjQsMCw1MjEuOCwwYzAtMzQuMS0wLjctNTQuOC0xMS40LTcxLjVjLTI4LjctNDYuMS0xMTIuMy02MC4xLTE2MC40LTg1LjUNCgkJCQkJYy0yOS40LTE1LjQtMzAuMS0xNy40LTIyLTUyLjhsOC0zNC43QzU3MS4yLDU0NS4yLDYxOS4zLDU0NS4yLDUyMC40LDU5Ny4zeiIvPg0KCQkJCTxwYXRoIGZpbGw9IiNEMkE0ODciIGQ9Ik03MDAuOCw2OTIuOWMwLDAtMjYuMSwyNi4xLTU0LjgsMjYuMWMtMjguNywwLTkzLjUtNDUuNC0xMjAuMy05Ni4ybC05LjQtNDEuNGwxMDAuMi00Mi44bDcwLjIsNDEuNA0KCQkJCQlsLTE2LjcsMThsLTExLjQsNTYuOGMwLDAtNC43LDE1LjQsMTYuNywyNi4xQzY5Ni4yLDY5MC45LDcwMC44LDY5Mi45LDcwMC44LDY5Mi45eiIvPg0KCQkJCTxnPg0KCQkJCQk8cGF0aCBmaWxsPSIjRkVDNDlDIiBkPSJNNDYxLDM4MC45Yy0yLjcsMC0yMi43LTI1LjQtMzYuNy02LjdjLTEzLjQsMTguNyw4LjcsMTEzLjYsNDAuMSwxMTEuNg0KCQkJCQkJQzQ2NC4zLDQ4NS44LDQ4Mi40LDQzNyw0NjEsMzgwLjl6Ii8+DQoJCQkJCTxwYXRoIGZpbGw9IiNGRUM0OUMiIGQ9Ik03MjkuNiwzODAuOWMyLjcsMCwyMi43LTI1LjQsMzYuNy02LjdjMTMuNCwxOC43LTguNywxMTMuNi00MC4xLDExMS42DQoJCQkJCQlDNzI2LjIsNDg1LjgsNzA3LjUsNDM3LDcyOS42LDM4MC45eiIvPg0KCQkJCQk8cGF0aCBmaWxsPSIjRkVDNDlDIiBkPSJNNTA5LjcsNTk1LjNjNjYuOCw3Mi4yLDEwMy42LDcyLjIsMTcwLjQsMGM1Mi44LTU2LjgsNDYuMS0xMTcuNiw0OS40LTE5MS4xDQoJCQkJCQljMS4zLTMyLjEtMS4zLTYyLjgtMTAuNy04Ny41Yy0zOC4xLTEwMS42LTIwOS44LTEwMS42LTI0Ny4yLDBjLTkuNCwyNC43LTEyLDU1LjUtMTAuNyw4Ny41DQoJCQkJCQlDNDYzLjYsNDc4LjQsNDU3LjYsNTM4LjUsNTA5LjcsNTk1LjN6Ii8+DQoJCQkJPC9nPg0KCQkJPC9nPg0KCQkJPHBhdGggZmlsbD0iIzM1MzYzNCIgZD0iTTY5MS41LDU4My4zYzEwNy42LTEwMS42LDE0NS43LTI0Mi41LDY2LjEtMzcwLjJjLTQ0LjgtNzIuMi0xMzIuMy0xMDEuNi0yMDguNS02NC44DQoJCQkJYy0xMi43LDYtMjYuMSwxNC00MS40LDI2LjFjMCwwLDEzNi4zLDg0LjksMTY3LjcsMTU5LjdDNzA3LjUsNDA4LjksNzExLjUsNDc5LjcsNjkxLjUsNTgzLjN6Ii8+DQoJCQk8cGF0aCBmaWxsPSIjQzQ0OTVFIiBkPSJNNDYxLjYsNzA0LjJjLTQ0LjEsMTYtOTQuOSwzMi43LTExNS42LDY2LjhjLTEwLjcsMTYuNy0xMS40LDM3LjQtMTEuNCw3MC44aDIxOS4ybC00OS40LTU3LjVsLTQwLjgtNzQuMg0KCQkJCUw0NjEuNiw3MDQuMkw0NjEuNiw3MDQuMnogTTY0Miw4NDEuOWgyMTQuNWMwLTM0LjEtMC43LTU0LjgtMTEuNC03MS41Yy0yMC0zMi4xLTY2LjgtNDguOC0xMDkuNi02NC44bC03Ny41LDExNi4zTDY0Miw4NDEuOXoiLz4NCgkJCTxwYXRoIGZpbGw9IiNBNjQzNTgiIGQ9Ik00NjUuNyw3MDIuMmMwLDAsNTYuOCwxMTQuMywxMDAuMiwxMzkuNmgtMjQuN2MwLDAtNTYuMS02My41LTkxLjUtMTM0LjNMNDY1LjcsNzAyLjJ6Ii8+DQoJCQk8cGF0aCBmaWxsPSIjQTY0MzU4IiBkPSJNNzI0LjksNzAyLjJjMCwwLTU2LjgsMTE0LjMtMTAwLjIsMTM5LjZoMjQuN2MwLDAsNTYuMS02My41LDkxLjUtMTM0LjNMNzI0LjksNzAyLjJ6Ii8+DQoJCTwvZz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg==";

var img5 = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOC4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGl2ZWxsb18xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDExOTAuNiA4NDEuOSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTE5MC42IDg0MS45IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxjaXJjbGUgZmlsbD0iI0ZGRkZGRiIgY3g9IjU5OC42IiBjeT0iNDE2LjkiIHI9IjQyMC45Ii8+DQo8Zz4NCgk8Zz4NCgkJPGRlZnM+DQoJCQk8Y2lyY2xlIGlkPSJTVkdJRF8xXyIgY3g9IjU5OC42IiBjeT0iNDE2LjkiIHI9IjQyMC45Ii8+DQoJCTwvZGVmcz4NCgkJPGNsaXBQYXRoIGlkPSJTVkdJRF8yXyI+DQoJCQk8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8xXyIgIG92ZXJmbG93PSJ2aXNpYmxlIi8+DQoJCTwvY2xpcFBhdGg+DQoJCTxnIGNsaXAtcGF0aD0idXJsKCNTVkdJRF8yXykiPg0KCQkJPHBvbHlnb24gZmlsbD0iIzcyNUI1MCIgcG9pbnRzPSI0NjAuMyw0NzMuMSA1MDEuNyw2NjkuNSA2ODguMiw2NTQuMSA3MzguOSw0OTkuOCAJCQkiLz4NCgkJCTxwYXRoIGZpbGw9IiNGRUM0OUMiIGQ9Ik01MjQuNCw1NjYuNmw4LDM0LjdjOCwzNS40LDcuMywzOC4xLTIyLDUyLjhjLTQ4LjEsMjQuNy0xMzEuNiwzOC44LTE2MC40LDg1LjUNCgkJCQljLTEwLjcsMTYuNy0xMS40LDM3LjQtMTEuNCw3MS41YzE3My43LDAsMzQ3LjQsMCw1MjEuOCwwYzAtMzQuMS0wLjctNTQuOC0xMS40LTcxLjVjLTI4LjctNDYuMS0xMTIuMy02MC4xLTE2MC40LTg1LjUNCgkJCQljLTI5LjQtMTUuNC0zMC4xLTE3LjQtMjItNTIuOGw4LTM0LjdDNTc1LjIsNTE0LjUsNjIzLjMsNTE0LjUsNTI0LjQsNTY2LjZ6Ii8+DQoJCQk8cGF0aCBmaWxsPSIjRDJBNDg3IiBkPSJNNzA0LjksNjYyLjJjMCwwLTI2LjEsMjYuMS01NC44LDI2LjFzLTkzLjUtNDUuNC0xMjAuMy05Ni4ybC0xMC00MS40TDYyMCw1MDcuOGw3MC4yLDQxLjRsLTE2LjcsMTgNCgkJCQlsLTEyLDU2LjhjMCwwLTQuNywxNS40LDE2LjcsMjYuMUM3MDAuMiw2NjAuMSw3MDQuOSw2NjIuMiw3MDQuOSw2NjIuMnoiLz4NCgkJCTxwYXRoIGZpbGw9IiNGRUM0OUMiIGQ9Ik00NjcsMzgwLjljLTIuNywwLTIyLjctMjUuNC0zNi43LTYuN2MtMTMuNCwxOC43LDguNywxMTMuNiw0MC4xLDExMS42QzQ3MC4zLDQ4Ni40LDQ4OSw0MzcsNDY3LDM4MC45eiINCgkJCQkvPg0KCQkJPHBhdGggZmlsbD0iI0ZFQzQ5QyIgZD0iTTczMy42LDM4MC45YzIuNywwLDIyLjctMjUuNCwzNi43LTYuN2MxMy40LDE4LjctOC43LDExMy42LTQwLjEsMTExLjYNCgkJCQlDNzMwLjIsNDg2LjQsNzEyLjIsNDM3LDczMy42LDM4MC45eiIvPg0KCQkJPHBhdGggZmlsbD0iI0ZFQzQ5QyIgZD0iTTUxMy44LDU2NC42YzY2LjgsNzIuMiwxMDMuNiw3Mi4yLDE3MC40LDBjNTIuOC01Ni44LDQ2LjEtMTE3LjYsNDkuNC0xOTEuMWMxLjMtMzIuMS0xLjMtNjIuOC0xMC43LTg3LjUNCgkJCQljLTM4LjEtMTAxLjYtMjA5LjgtMTAxLjYtMjQ3LjIsMGMtOS40LDI0LjctMTIsNTUuNS0xMC43LDg3LjVDNDY3LjcsNDQ3LjcsNDYxLjYsNTA3LjgsNTEzLjgsNTY0LjZ6Ii8+DQoJCQk8cGF0aCBmaWxsPSIjNjA0NTMwIiBkPSJNNTc5LjksMTI0LjNjMCwwLDY5LjUtMzQuNywxMzEuNiwyMS40YzYyLjEsNTUuNSw3NC4yLDE0OC4zLDY3LjUsMjE4LjVjLTYsNzAuMiw5LjQsMzA1LjQsMjkuNCwzNDAuOA0KCQkJCWwwLDBjLTM3LjQtMjEuNC04Ny41LTMzLjQtMTIwLjktNTAuOGMtMi43LTEuMy01LjMtMi43LTcuMy00YzE2LTMyLjEsMzYuMS04NC45LDQyLjEtMTU1bDYuNy0zNy40YzAsMC0xODkuMS05MC4yLTIwNC41LTIyOS44DQoJCQkJQzUzNC41LDE4OC40LDU1Mi41LDE1My43LDU3OS45LDEyNC4zeiIvPg0KCQkJPHBhdGggZmlsbD0iIzgwQjc5MCIgZD0iTTUwNi40LDY0NS40Yy00OC4xLDI0LjctMTMyLjMsNDAuMS0xNjEsODYuMmMtMTAuNywxNi43LTE2LjcsNzQuMi0xNi43LDEwOC4yYzE3OS43LDAsMzU5LjUsMCw1MzkuMiwwDQoJCQkJYzAtMzQuMS02LTkxLjUtMTYuNy0xMDguMmMtMjguNy00Ni4xLTExMi45LTYxLjUtMTYxLTg2LjJjLTEzLjQtNi43LTIyLTE1LjQtMjcuNC0xMmMtNy4zLDQtNi43LDI0LjEtMTIsNDAuMWwtNTIuOCwyOC43DQoJCQkJbC01Mi44LTI4LjdjLTQuNy0xNi00LjctMzYuMS0xMi00MC4xQzUyOC41LDYzMC4xLDUxOS44LDYzOC4xLDUwNi40LDY0NS40eiIvPg0KCQkJPHBhdGggZmlsbD0iIzYwNDUzMCIgZD0iTTU3OS45LDEyNC4zbC01NC44LDEwMy42YzAsMC01NS41LDYzLjUtNjAuOCwxNDVsMC43LDcuM2MtNy4zLTYtMjItMTgtMzIuNy0zLjMNCgkJCQljLTEzLjQsMTguNyw4LjcsMTEzLjYsNDAuMSwxMTEuNmM1LjMsMjcuNCwyNC43LDI0MC41LDc5LjUsMzUxLjVIMzQyLjdjMCwwLDgzLjUtMTI3LDY2LjEtNDIyLjNjLTguNy0xNDYuMywyLTMxMy40LDE2OS0yOTMuMw0KCQkJCUM1NzkuMiwxMjQuMyw1NzkuOSwxMjQuMyw1NzkuOSwxMjQuM3oiLz4NCgkJCTxyZWN0IHg9IjU4My45IiB5PSI3MDIuMiIgZmlsbD0iI0ZERkNGRiIgd2lkdGg9IjI5LjQiIGhlaWdodD0iMTM3Ii8+DQoJCQk8cGF0aCBmaWxsPSIjRkRGQ0ZGIiBkPSJNNTI4LjUsNTkwLjdsLTEyLDI4LjFsLTAuNyw2NC4xbDE0LjctNDAuMWMwLDAtMi43LDQ0LjgsNTQuOCw1OS41YzIsMC43LDQuNywxLjMsNy4zLDEuMw0KCQkJCWMwLDAsMTguNywzLjMsMjAuNywxNi43YzAsMCw2LjctMTEuNC0yOC43LTMwLjdDNTQ4LjUsNjY5LjUsNTM3LjgsNjIyLjEsNTI4LjUsNTkwLjd6Ii8+DQoJCQk8cGF0aCBmaWxsPSIjQjZDNEM0IiBkPSJNNTI1LjEsNjIzLjRjMCwwLTIuNywxLjMtNCwxNy40cy0xLjMsMzIuNy0xLjMsMzIuN2wxMS40LTMxLjRDNTMwLjUsNjQyLjgsNTI5LjgsNjIwLjcsNTI1LjEsNjIzLjR6Ii8+DQoJCQk8cGF0aCBmaWxsPSIjRkRGQ0ZGIiBkPSJNNjY4LjgsNTkwLjdsMTIsMjguMWwwLjcsNjQuMWwtMTQuNy00MC4xYzAsMC00LDQ3LjQtNTQuOCw2OS41Yy00LTQuNy04LTEwLTEzLjQtMTMuNA0KCQkJCWM0LTIuNyw4LjctNiwxNC43LTkuNEM2NDguNyw2NjkuNSw2NTkuNCw2MjIuMSw2NjguOCw1OTAuN3oiLz4NCgkJCTxwYXRoIGZpbGw9IiNCNkM0QzQiIGQ9Ik02NzIuMSw2MjMuNGMwLDAsMi43LDEuMyw0LDE3LjRzMS4zLDMyLjcsMS4zLDMyLjdsLTExLjQtMzEuNEM2NjYuOCw2NDIuOCw2NjcuNCw2MjAuNyw2NzIuMSw2MjMuNHoiLz4NCgkJCTxjaXJjbGUgZmlsbD0iI0I2QzRDNCIgY3g9IjU5OC42IiBjeT0iNzI5IiByPSI2LjciLz4NCgkJCTxjaXJjbGUgZmlsbD0iI0I2QzRDNCIgY3g9IjU5OC42IiBjeT0iNzkyLjQiIHI9IjYuNyIvPg0KCQk8L2c+DQoJPC9nPg0KPC9nPg0KPC9zdmc+DQo=";

var img6 = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOC4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGl2ZWxsb18xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDExOTAuNiA4NDEuOSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTE5MC42IDg0MS45IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxjaXJjbGUgZmlsbD0iI0ZGRkZGRiIgY3g9IjU5OC42IiBjeT0iNDE0LjkiIHI9IjQyMC45Ii8+DQo8Zz4NCgk8Zz4NCgkJPGRlZnM+DQoJCQk8Y2lyY2xlIGlkPSJTVkdJRF8xXyIgY3g9IjU5OC42IiBjeT0iNDE0LjkiIHI9IjQyMC45Ii8+DQoJCTwvZGVmcz4NCgkJPGNsaXBQYXRoIGlkPSJTVkdJRF8yXyI+DQoJCQk8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8xXyIgIG92ZXJmbG93PSJ2aXNpYmxlIi8+DQoJCTwvY2xpcFBhdGg+DQoJCTxnIGNsaXAtcGF0aD0idXJsKCNTVkdJRF8yXykiPg0KCQkJPHBhdGggZmlsbD0iIzdEMzcyRSIgZD0iTTc4Ni40LDQxNC4zYy0yLDExMC4yLTM4LjgsMjE5LjgtNjIuOCwyMTguNWMtODYuMiwxLjMtMTY4LjQsMS4zLTI1NS45LDANCgkJCQljLTI0LjEsMC43LTYyLjgtMTA4LjItNjIuOC0yMTguNWMwLjctMTU3LDQwLjEtMjIwLjUsMTExLjYtMjU1LjJjNTAuMS0yNC4xLDEyMC4zLTI2LjcsMTY5LjcsMS4zDQoJCQkJQzc0OS42LDE5Ny4xLDc4OC40LDI4Niw3ODYuNCw0MTQuM3oiLz4NCgkJCTxwYXRoIGZpbGw9IiNGRUM0OUMiIGQ9Ik01MjAuNCw1OTRsOCwzNi4xYzgsMzYuNyw3LjMsMzkuNC0yMy40LDU1LjVjLTUwLjEsMjYuMS0xMzYuMyw0MC44LTE2Ni40LDg4LjkNCgkJCQljLTEwLjcsMTcuNC0xMS40LDM4LjgtMTEuNCw3NC4yYzE4MC40LDAsMzYxLjUsMCw1NDEuOSwwYzAtMzUuNC0wLjctNTYuOC0xMS40LTc0LjJjLTMwLjEtNDguMS0xMTYuMy02Mi44LTE2Ni40LTg4LjkNCgkJCQljLTMwLjctMTYtMzEuNC0xOC0yMy40LTU1LjVsOC0zNi4xQzU3My4yLDUzOS4yLDYyMy4zLDUzOS4yLDUyMC40LDU5NHoiLz4NCgkJCTxwYXRoIGZpbGw9IiNEMkE0ODciIGQ9Ik03MDguMiw2OTIuOWMwLDAtMjYuNywyNi43LTU2LjgsMjcuNGMtMzAuMSwwLTk3LjYtNDcuNC0xMjQuOS0xMDAuMmwtMTAtNDIuOGwxMDQuMi00NC44bDcyLjgsNDIuOA0KCQkJCUw2NzYuMSw1OTRsLTEyLjcsNTkuNWMwLDAtNC43LDE2LDE3LjQsMjYuN0M3MDMuNSw2OTAuOSw3MDguMiw2OTIuOSw3MDguMiw2OTIuOXoiLz4NCgkJCTxwYXRoIGZpbGw9IiNGRUM0OUMiIGQ9Ik01MDkuNyw1OTJjNjkuNSw3NS41LDEwOC4yLDc1LjUsMTc3LjEsMGM1NC44LTU4LjgsNDguMS0xMjIuMyw1MC44LTE5OS4xYzEuMy0zMy40LTEuMy02NC44LTExLjQtOTAuOQ0KCQkJCWMtMzkuNC0xMDUuNi0yMTcuOC0xMDUuNi0yNTcuMiwwYy05LjQsMjYuMS0xMi43LDU3LjUtMTEuNCw5MC45QzQ2MS42LDQ2OS43LDQ1NSw1MzIuNSw1MDkuNyw1OTJ6Ii8+DQoJCQk8cGF0aCBmaWxsPSIjN0QzNzJFIiBkPSJNNDc4LjMsMzYxLjVoMjQxLjJjMiw2OS41LDAuNywxMzctOC43LDIwMS44bDMyLjEsMC43bDguNy0yNTMuOWwtOTIuMi0xMjIuM2wtMTc3LjcsMjguN2wtMzIuNywxMDkuNg0KCQkJCWw4LjcsMjMxLjJsMjguNyw3LjNDNDc5LDQ5OC41LDQ3OC4zLDQyNi4zLDQ3OC4zLDM2MS41eiIvPg0KCQkJPHBhdGggZmlsbD0iI0ZGQ0M2MSIgZD0iTTQ3OC4zLDY5Ny42bC0xOCw2LjdsLTM4LjgsMTQzLjdoMzYyLjFsLTM4LjgtMTQwLjNsLTE2LTZjLTIwLDYwLjgtNjcuNSwxMDIuOS0xMjQuOSwxMDIuOQ0KCQkJCUM1NDcuMiw4MDQuNSw0OTcuNyw3NTksNDc4LjMsNjk3LjZ6Ii8+DQoJCTwvZz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg==";

//

    //import  EventBus  from '@/eventBus.js';
    var script = {
        name: 'GrimmUserPic', // vue component name
        data: function(){
            return {
                slides:[img1,
                        img2,
                        img3,
                        img4,
                        img5,
                        img6],
                selectedSlide:img1,   
                selectedSlideIndex:0            
            }
        },
        created: function created(){
            // EventBus.$on('WAKEUP', () => {
            //       return document.getElementsByClassName('VueCarousel-inner')[0].className += " wakeUp";
            //     });
            // EventBus.$on('RESET', () => {
                
            //       return this.reset();
            //     });
        },
        mounted: function mounted(){          
        },
        props:{
            url:{
                default:'',
                type:String
            },
            round:{
                default:true,
                type:Boolean
            },
            flat:{
                default:true,
                type:Boolean
            },
            buttonColor:{
                default:'grey',
                type:String
            },
            textColor:{
                default:'white',
                type:String
            },
            background:{
                default:'transparent',
                type:String
            },
            navigationNextLabel:{
                default:'▶',
                type:String
            },
            navigationPrevLabel:{
                default:'◀',
                type:String
            },
            upload:{
                default:false,
                type:Boolean
            }

        },
        methods:{
            reset: function reset(){
                this.selectedSlideIndex = 0;
                this.selectedSlide = img1;
                if (this.slides.length>6) {
                    this.slides.pop(); 
                }
                
            },
            handleSlideClick: function handleSlideClick (dataset) {
                this.selectedSlide = this.slides[dataset];
                this.$emit('input', {
                    string: this.selectedSlide,
                });
            },
            updateValue: function updateValue() {
              this.$emit('input', {
                string: this.selectedSlide,
              });
            },
            handleFileUpload: function handleFileUpload(name, files){
                if (this.upload) {
                    var form_data = new FormData();
                    form_data.append('file',files[0]);
                    axios.post(this.url,form_data)
                    .then(function(response){
                        response = response.data;
                        if (this.slides.length> 6) {
                            this.slides.pop();
                            this.slides.push(response.outsidePath);
                        }else{
                            this.slides.push(response.outsidePath);
                        }
                        this.selectedSlide = response.outsidePath;
                        setTimeout(function() {
                            this.selectedSlideIndex = 6;
                            this.$emit('input', {
                                string: this.selectedSlide,
                            });
                        }.bind(this), 100);
                    }.bind(this));
                }else{
                    var reader= new FileReader();
                    reader.addEventListener("load", function () {
                        if (this.slides.length > 6) {
                            this.slides.pop();
                            this.slides.push(reader.result);
                        }else{
                            this.slides.push(reader.result);
                        }
                        this.selectedSlide = reader.result;
                        this.selectedSlideIndex = this.slides.length-1;
                        this.$emit('inputNoUpload', {
                            file: files[0]
                        });
                    }.bind(this), false);

                    if (files) {
                        reader.readAsDataURL(files[0]);
                    }
                }
                
                
            }
        },
        components:{
            Carousel: Carousel,
            Slide: Slide,
            VImg: VImg
        }

    };

/* script */
            var __vue_script__ = script;
            
/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      staticClass: "userPanelFoto",
      class: { round: _vm.round },
      style: { backgroundColor: _vm.background }
    },
    [
      _c(
        "carousel",
        {
          ref: "carousel",
          attrs: {
            navigationEnabled: true,
            perPage: 1,
            paginationEnabled: false,
            loop: true,
            navigationNextLabel: _vm.navigationNextLabel,
            navigationPrevLabel: _vm.navigationPrevLabel,
            "navigate-to": _vm.selectedSlideIndex
          },
          on: { pageChange: _vm.handleSlideClick }
        },
        _vm._l(_vm.slides, function(slide, index) {
          return _c(
            "slide",
            {
              key: index,
              staticClass: "image is-square",
              attrs: { data: _vm.slides }
            },
            [
              _c("v-img", {
                attrs: { src: slide, alt: "", "aspect-ratio": "1" }
              })
            ],
            1
          )
        })
      ),
      _vm._v(" "),
      _c(
        "form",
        { attrs: { method: "post", enctype: "multipart/form-data" } },
        [
          _c("input", {
            attrs: { type: "file", name: "fileToUpload", id: "fileToUpload" },
            on: {
              change: function($event) {
                _vm.handleFileUpload($event.target.name, $event.target.files);
              }
            }
          }),
          _vm._v(" "),
          _c(
            "label",
            {
              class: { btn: !_vm.flat, btnFlat: _vm.flat },
              style: { background: _vm.buttonColor, color: _vm.textColor },
              attrs: { for: "fileToUpload" }
            },
            [_vm._v("Personalizza")]
          )
        ]
      )
    ],
    1
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = function (inject) {
    if (!inject) { return }
    inject("data-v-c4b63908_0", { source: "\n.userPanelFoto[data-v-c4b63908]{\n    padding-left: 18px;\n    padding-right: 18px;\n    display: flex;\n    flex-direction:column;\n    height: 100%;\n}\n.userPanelFoto label[data-v-c4b63908]{\n    margin:auto;\n}\n.userPanelFoto img[data-v-c4b63908]{\n    width: 100%;\n}\n.round img[data-v-c4b63908]{\n   border-radius: 50000px;\n}\n.userPanelFoto form[data-v-c4b63908]{\n    height: 100%;\n    display: flex;\n}\n.userPanelFoto input[data-v-c4b63908]{\n    width: 0.1px;\n    height: 0.1px;\n    opacity: 0;\n    overflow: hidden;\n    position: absolute;\n    z-index: -1;\n}\n.btn[data-v-c4b63908] {\n    -moz-box-shadow:inset 0px 1px 0px 0px #ffffff;\n    -webkit-box-shadow:inset 0px 1px 0px 0px #ffffff;\n    box-shadow:inset 0px 1px 0px 0px #ffffff;\n    background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #ededed), color-stop(1, #dfdfdf));\n    background:-moz-linear-gradient(top, #ededed 5%, #dfdfdf 100%);\n    background:-webkit-linear-gradient(top, #ededed 5%, #dfdfdf 100%);\n    background:-o-linear-gradient(top, #ededed 5%, #dfdfdf 100%);\n    background:-ms-linear-gradient(top, #ededed 5%, #dfdfdf 100%);\n    background:linear-gradient(to bottom, #ededed 5%, #dfdfdf 100%);\n    filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ededed', endColorstr='#dfdfdf',GradientType=0);\n    background-color:#ededed;\n    -moz-border-radius:6px;\n    -webkit-border-radius:6px;\n    border-radius:6px;\n    border:1px solid #dcdcdc;\n    display:inline-block;\n    cursor:pointer;\n    color:#777777;\n    font-family:Arial;\n    font-size:15px;\n    font-weight:bold;\n    padding:6px 24px;\n    text-decoration:none;\n    text-shadow:0px 1px 0px #ffffff;\n    margin-top: 18px !important;\n}\n.btn[data-v-c4b63908]:hover {\n    background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #dfdfdf), color-stop(1, #ededed));\n    background:-moz-linear-gradient(top, #dfdfdf 5%, #ededed 100%);\n    background:-webkit-linear-gradient(top, #dfdfdf 5%, #ededed 100%);\n    background:-o-linear-gradient(top, #dfdfdf 5%, #ededed 100%);\n    background:-ms-linear-gradient(top, #dfdfdf 5%, #ededed 100%);\n    background:linear-gradient(to bottom, #dfdfdf 5%, #ededed 100%);\n    filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#dfdfdf', endColorstr='#ededed',GradientType=0);\n    background-color:#dfdfdf;\n}\n.btn[data-v-c4b63908]:active {\n    position:relative;\n    top:1px;\n}\n.btnFlat[data-v-c4b63908] {\n    background-color:#ededed;\n    display:inline-block;\n    cursor:pointer;\n    color:#777777;\n    font-family:Arial;\n    font-size:15px;\n    font-weight:bold;\n    padding:6px 24px;\n    text-decoration:none;\n    margin-top: 18px !important;\n}\n.btnFlat[data-v-c4b63908]:hover {\n    background-color:#dfdfdf;\n}\n.btnFlat[data-v-c4b63908]:active {\n    position:relative;\n    top:1px;\n}\n\n", map: {"version":3,"sources":["/Users/davidesimoncini/Documents/GrimmNodeModules/grimm-user-pic/src/grimm-user-pic.vue"],"names":[],"mappings":";AAkLA;IACA,mBAAA;IACA,oBAAA;IACA,cAAA;IACA,sBAAA;IACA,aAAA;CACA;AAEA;IACA,YAAA;CACA;AACA;IACA,YAAA;CAEA;AACA;GACA,uBAAA;CACA;AACA;IACA,aAAA;IACA,cAAA;CACA;AACA;IACA,aAAA;IACA,cAAA;IACA,WAAA;IACA,iBAAA;IACA,mBAAA;IACA,YAAA;CACA;AACA;IACA,8CAAA;IACA,iDAAA;IACA,yCAAA;IACA,8GAAA;IACA,+DAAA;IACA,kEAAA;IACA,6DAAA;IACA,8DAAA;IACA,gEAAA;IACA,iHAAA;IACA,yBAAA;IACA,uBAAA;IACA,0BAAA;IACA,kBAAA;IACA,yBAAA;IACA,qBAAA;IACA,eAAA;IACA,cAAA;IACA,kBAAA;IACA,eAAA;IACA,iBAAA;IACA,iBAAA;IACA,qBAAA;IACA,gCAAA;IACA,4BAAA;CACA;AACA;IACA,8GAAA;IACA,+DAAA;IACA,kEAAA;IACA,6DAAA;IACA,8DAAA;IACA,gEAAA;IACA,iHAAA;IACA,yBAAA;CACA;AACA;IACA,kBAAA;IACA,QAAA;CACA;AAEA;IACA,yBAAA;IACA,qBAAA;IACA,eAAA;IACA,cAAA;IACA,kBAAA;IACA,eAAA;IACA,iBAAA;IACA,iBAAA;IACA,qBAAA;IACA,4BAAA;CACA;AACA;IACA,yBAAA;CACA;AACA;IACA,kBAAA;IACA,QAAA;CACA","file":"grimm-user-pic.vue","sourcesContent":["<template>\n    <div class=\"userPanelFoto\" :class=\"{round:round}\"  :style=\"{ backgroundColor: background}\">\n        <carousel   :navigationEnabled=\"true\"\n                    :perPage=\"1\"\n                    :paginationEnabled=\"false\"\n                    ref=\"carousel\"\n                    :loop=\"true\"\n                    @pageChange=\"handleSlideClick\"\n                    :navigationNextLabel=\"navigationNextLabel\"\n                    :navigationPrevLabel=\"navigationPrevLabel\"\n                    :navigate-to=\"selectedSlideIndex\">\n          <slide v-for=\"(slide, index) in slides\"\n                class=\"image is-square\"\n                v-bind:data=\"slides\"\n                v-bind:key=\"index\">\n            <v-img :src=\"slide\" alt=\"\" aspect-ratio=\"1\" />\n          </slide>\n        </carousel>\n        <form method=\"post\" enctype=\"multipart/form-data\">\n            <input type=\"file\" name=\"fileToUpload\" id=\"fileToUpload\" @change=\"handleFileUpload($event.target.name, $event.target.files)\">\n            <label for=\"fileToUpload\" \n                :class=\"{btn:!flat, btnFlat:flat}\"\n                :style=\"{background:buttonColor, color:textColor}\"\n                >Personalizza</label>\n        </form>\n    </div>\n</template>\n\n<script>\n    import { Carousel, Slide } from 'vue-carousel';\n    import axios from 'axios';\n    import img1 from './assets/ProfiloUomo_1.svg';\n    import img2 from './assets/ProfiloUomo_2.svg';\n    import img3 from './assets/ProfiloUomo_3.svg';\n    import img4 from './assets/ProfiloDonna_1.svg';\n    import img5 from './assets/ProfiloDonna_2.svg';\n    import img6 from './assets/ProfiloDonna_3.svg';\nimport {VImg} from 'vuetify/lib';\n\n    //import  EventBus  from '@/eventBus.js';\n    export default{\n        name: 'GrimmUserPic', // vue component name\n        data: function(){\n            return{\n                slides:[img1,\n                        img2,\n                        img3,\n                        img4,\n                        img5,\n                        img6],\n                selectedSlide:img1,   \n                selectedSlideIndex:0            \n            }\n        },\n        created(){\n            // EventBus.$on('WAKEUP', () => {\n            //       return document.getElementsByClassName('VueCarousel-inner')[0].className += \" wakeUp\";\n            //     });\n            // EventBus.$on('RESET', () => {\n                \n            //       return this.reset();\n            //     });\n        },\n        mounted(){          \n        },\n        props:{\n            url:{\n                default:'',\n                type:String\n            },\n            round:{\n                default:true,\n                type:Boolean\n            },\n            flat:{\n                default:true,\n                type:Boolean\n            },\n            buttonColor:{\n                default:'grey',\n                type:String\n            },\n            textColor:{\n                default:'white',\n                type:String\n            },\n            background:{\n                default:'transparent',\n                type:String\n            },\n            navigationNextLabel:{\n                default:'▶',\n                type:String\n            },\n            navigationPrevLabel:{\n                default:'◀',\n                type:String\n            },\n            upload:{\n                default:false,\n                type:Boolean\n            }\n\n        },\n        methods:{\n            reset(){\n                this.selectedSlideIndex = 0;\n                this.selectedSlide = img1;\n                if (this.slides.length>6) {\n                    this.slides.pop(); \n                }\n                \n            },\n            handleSlideClick (dataset) {\n                this.selectedSlide = this.slides[dataset];\n                this.$emit('input', {\n                    string: this.selectedSlide,\n                });\n            },\n            updateValue() {\n              this.$emit('input', {\n                string: this.selectedSlide,\n              })\n            },\n            handleFileUpload(name, files){\n                if (this.upload) {\n                    var form_data = new FormData();\n                    form_data.append('file',files[0]);\n                    axios.post(this.url,form_data)\n                    .then(function(response){\n                        response = response.data;\n                        if (this.slides.length> 6) {\n                            this.slides.pop();\n                            this.slides.push(response.outsidePath);\n                        }else{\n                            this.slides.push(response.outsidePath);\n                        }\n                        this.selectedSlide = response.outsidePath;\n                        setTimeout(function() {\n                            this.selectedSlideIndex = 6;\n                            this.$emit('input', {\n                                string: this.selectedSlide,\n                            });\n                        }.bind(this), 100);\n                    }.bind(this))\n                }else{\n                    var reader= new FileReader();\n                    reader.addEventListener(\"load\", function () {\n                        if (this.slides.length > 6) {\n                            this.slides.pop();\n                            this.slides.push(reader.result);\n                        }else{\n                            this.slides.push(reader.result);\n                        }\n                        this.selectedSlide = reader.result;\n                        this.selectedSlideIndex = this.slides.length-1;\n                        this.$emit('inputNoUpload', {\n                            file: files[0]\n                        });\n                    }.bind(this), false);\n\n                    if (files) {\n                        reader.readAsDataURL(files[0]);\n                    }\n                }\n                \n                \n            }\n        },\n        components:{\n            Carousel,\n            Slide,\n            VImg\n        }\n\n    };\n</script>\n<style scoped>\n    .userPanelFoto{\n        padding-left: 18px;\n        padding-right: 18px;\n        display: flex;\n        flex-direction:column;\n        height: 100%;\n    }\n                    \n    .userPanelFoto label{\n        margin:auto;\n    }\n    .userPanelFoto img{\n        width: 100%;\n        \n    }\n    .round img{\n       border-radius: 50000px; \n    }\n    .userPanelFoto form{\n        height: 100%;\n        display: flex;\n    }\n    .userPanelFoto input{\n        width: 0.1px;\n        height: 0.1px;\n        opacity: 0;\n        overflow: hidden;\n        position: absolute;\n        z-index: -1;\n    }\n    .btn {\n        -moz-box-shadow:inset 0px 1px 0px 0px #ffffff;\n        -webkit-box-shadow:inset 0px 1px 0px 0px #ffffff;\n        box-shadow:inset 0px 1px 0px 0px #ffffff;\n        background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #ededed), color-stop(1, #dfdfdf));\n        background:-moz-linear-gradient(top, #ededed 5%, #dfdfdf 100%);\n        background:-webkit-linear-gradient(top, #ededed 5%, #dfdfdf 100%);\n        background:-o-linear-gradient(top, #ededed 5%, #dfdfdf 100%);\n        background:-ms-linear-gradient(top, #ededed 5%, #dfdfdf 100%);\n        background:linear-gradient(to bottom, #ededed 5%, #dfdfdf 100%);\n        filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ededed', endColorstr='#dfdfdf',GradientType=0);\n        background-color:#ededed;\n        -moz-border-radius:6px;\n        -webkit-border-radius:6px;\n        border-radius:6px;\n        border:1px solid #dcdcdc;\n        display:inline-block;\n        cursor:pointer;\n        color:#777777;\n        font-family:Arial;\n        font-size:15px;\n        font-weight:bold;\n        padding:6px 24px;\n        text-decoration:none;\n        text-shadow:0px 1px 0px #ffffff;\n        margin-top: 18px !important;\n    }\n    .btn:hover {\n        background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #dfdfdf), color-stop(1, #ededed));\n        background:-moz-linear-gradient(top, #dfdfdf 5%, #ededed 100%);\n        background:-webkit-linear-gradient(top, #dfdfdf 5%, #ededed 100%);\n        background:-o-linear-gradient(top, #dfdfdf 5%, #ededed 100%);\n        background:-ms-linear-gradient(top, #dfdfdf 5%, #ededed 100%);\n        background:linear-gradient(to bottom, #dfdfdf 5%, #ededed 100%);\n        filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#dfdfdf', endColorstr='#ededed',GradientType=0);\n        background-color:#dfdfdf;\n    }\n    .btn:active {\n        position:relative;\n        top:1px;\n    }\n\n    .btnFlat {\n        background-color:#ededed;\n        display:inline-block;\n        cursor:pointer;\n        color:#777777;\n        font-family:Arial;\n        font-size:15px;\n        font-weight:bold;\n        padding:6px 24px;\n        text-decoration:none;\n        margin-top: 18px !important;\n    }\n    .btnFlat:hover {\n        background-color:#dfdfdf;\n    }\n    .btnFlat:active {\n        position:relative;\n        top:1px;\n    }\n\n</style>"]}, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__ = "data-v-c4b63908";
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* component normalizer */
  function __vue_normalize__(
    template, style, script$$1,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/davidesimoncini/Documents/GrimmNodeModules/grimm-user-pic/src/grimm-user-pic.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    {
      var hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          var originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          var existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
    var isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) { el.setAttribute('media', css.media); }
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) { style.element.removeChild(nodes[index]); }
          if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
          else { style.element.appendChild(textNode); }
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var component = __vue_normalize__(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    __vue_create_injector__,
    undefined
  );

// Import vue component

// install function executed by Vue.use()
function install(Vue) {
  if (install.installed) { return; }
  install.installed = true;
  Vue.component('GrimmUserPic', component);
  Vue.component(VImg);
}

// Create module definition for Vue.use()
var plugin = {
  install: install,
};

// To auto-install when vue is found
/* global window global */
var GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

// It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;

export default component;
