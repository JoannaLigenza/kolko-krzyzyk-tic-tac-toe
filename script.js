
document.addEventListener('DOMContentLoaded', function() {
	
	// Funkcja gry - naprzemiennie wstawiamy 0 i X
	const all_table = document.querySelector("table");
	let helper = "0";
	
	all_table.addEventListener("click", function(e){
		
		
		
		let field = e.target.closest("td").innerText
		
		if (document.querySelector("#statement").innerText == "Wygrana!"){ // jesli jest wygrana to wyjdz i nic nie rob wiecej
				return;
		}
		if (helper === "X" && field == ""){   			// Jesli helper, (ustawiony pierwotnie na 0) rowna sie X to wykonaj:
		e.target.closest("td").innerText = "X";			// wpisz w najbliszy td (czyli klikniety td) X
		helper = "0";									// i ustaw helpera na 0
		if (document.querySelector("#statement").innerText != "Wygrana!"){  // jesli nie ma wygranej to uruchom funkcje wygrana
		wygrana("X");
		}
		return;											// wyjdz i nie sprawdzaj kolejnego warunku
		} 
		
		if (helper === "0" && field == ""){ 
		e.target.closest("td").innerText = "0";
		helper = "X"; 
		if (document.querySelector("#statement").innerText != "Wygrana!"){ 
		wygrana("0");
		}
		return;
		} 		
	}) 	
	
	// Funkcja sprawdzajaca wynik
	
	function wynik()
	{
		document.querySelector("#statement").innerText = "Wygrana!";
		console.log("yupi!");
	}
	
	function wygrana(C)	{ 
	
	let new_tab = document.querySelectorAll("td");
	//console.log(new_tab[2].innerText);
	
	// sprawdzanie wyniku w poziomie (skacze co 3 komorki, bo musi byc sprawdzony 3 razy)
	for ( i = 0; i < new_tab.length; i = i+3 )				
	{ 	//console.log(i + new_tab[i].innerText)
		//console.log(i+1 + new_tab[i+1].innerText)
		//console.log(i+2 + new_tab[i+2].innerText)


		if (new_tab[i].innerText == C && new_tab[i+1].innerText == C && new_tab[i+2].innerText == C) { 
		wynik();
		}
	}
	// sprawdzanie wyniku w pionie (musi byc sprawdzony 3 razy )
	for ( i = 0; i < 3; i= i+1 )							
	{ 	
		if (new_tab[i].innerText == C && new_tab[i+3].innerText == C && new_tab[i+6].innerText == C) { 
		wynik();
		}
	}
		// sprawdzanie skosow
		if (new_tab[0].innerText == C && new_tab[4].innerText == C && new_tab[8].innerText == C) { 
		wynik();
		}
		if (new_tab[2].innerText == C && new_tab[4].innerText == C && new_tab[6].innerText == C) { 
		wynik();
		}
	}	
});