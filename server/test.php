<?php
	class Test {
		function getCinemasByCity(){
			$result = file_get_contents("http://api.m.mtime.cn/OnlineLocationCinema/OnlineCinemasByCity.api?locationId=290");
			echo $result;
		}

		function getFilms() {
			$result = file_get_contents("http://api.m.mtime.cn/Showtime/LocationMovies.api?locationId=290");
			$result = json_decode($result, true);
			$arr = array();

			for($i=0;$i<count($result['ms']);$i++) {
				$ms = $result['ms'][$i];
				if($ms['r'] >= 7.9) {
					array_push($arr, $result['ms'][$i]);
				}
			}
			print_r(json_encode($arr));
		}
	}
	Test::getFilms();
?>
