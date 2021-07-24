/***********************
* Acciones de composición de Adobe Edge Animate
*
* Editar este archivo con precaución, teniendo cuidado de conservar 
* las firmas de función y los comentarios que comienzan con "Edge" para mantener la 
* capacidad de interactuar con estas acciones en Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15805, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${plus_btn_1}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.play("esc");
         sym.getSymbol("plus_btn_1").stop("check");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Scroll_01}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         // Mostrar un elemento 
         sym.$("modal_01").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Scroll_01}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         // Ocultar un elemento 
         sym.$("modal_01").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Scroll_02}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         // Mostrar un elemento 
         sym.$("modal_02").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Scroll_02}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         // Ocultar un elemento 
         sym.$("modal_02").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Scroll_03}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         // Mostrar un elemento 
         sym.$("modal_03").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Scroll_03}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         // Ocultar un elemento 
         sym.$("modal_03").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Scroll_04}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         // Mostrar un elemento 
         sym.$("modal_04").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Scroll_04}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         // Ocultar un elemento 
         sym.$("modal_04").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Scroll_05}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         // Mostrar un elemento 
         sym.$("modal_05").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Scroll_05}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         // Ocultar un elemento 
         sym.$("modal_05").hide();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 24250, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_close}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.play("intro");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 32146, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_close2}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.play("intro");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${plus_btn_2}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.play("esc_02");
         
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.getSymbol("plus_btn_2").play("check");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 40000, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 40960, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${btn_PClose_01}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.play("pestal");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_PClose_02}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.play("pestal");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_PClose_03}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.play("pestal");
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${btn_PClose_04}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.play("pestal");
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${btn_PClose_05}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.play("pestal");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_PClose_06}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.play("pestal");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${plus_btn_7}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.play("modal01");
         
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.getSymbol("plus_btn_7").play("check");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${plus_btn_8}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.play("modal02");
         
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.getSymbol("plus_btn_8").play("check");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${plus_btn_9}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.play("modal03");
         
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.getSymbol("plus_btn_9").play("check");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${plus_btn_10}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.play("modal04");
         
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.getSymbol("plus_btn_10").play("check");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${plus_btn_11}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.play("modal05");
         
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.getSymbol("plus_btn_11").play("check");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${plus_btn_12}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.getSymbol("plus_btn_12").play("check");
         
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.play("modal06");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 52500, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 55842, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 56702, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 55046, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 54127, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 53296, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${plus_btn_13}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.play("M01");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${plus_btn_14}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.play("M02");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${plus_btn_15}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.play("M03");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${plus_btn_16}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.play("M04");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${plus_btn_17}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.play("M05");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_close5}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.play("intro");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 62865, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_close3}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.play("intro");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 68545, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 71557, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 70350, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 69165, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_close6}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.play("intro");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${plus_btn_18}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.play("MD01");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${plus_btn_19}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.play("MD02");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${plus_btn_20}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.play("MD03");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${plus_btn_3}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.play("esc_03");
         
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.getSymbol("plus_btn_3").play("check");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${plus_btn_4}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.play("esc_04");
         
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.getSymbol("plus_btn_4").play("check");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${plus_btn_5}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.play("esc_05");
         
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.getSymbol("plus_btn_5").play("check");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${plus_btn_6}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.play("esc_06");
         
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.getSymbol("plus_btn_6").play("check");
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 42122, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 43372, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 44622, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 45912, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 47122, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_close4}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.play("intro");
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'plus_btn'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2190, function(sym, e) {
         // introducir código aquí
         sym.stop();
         
         // Reproducir desde el principio, independientemente del estado de reproducción actual 
         if (!sym.isPlaying() ) {
         	sym.play(0);
         }

      });
      //Edge binding end

   })("plus_btn_1");
   //Edge symbol end:'plus_btn_1'

   //=========================================================
   
   //Edge symbol: 'plus_btn_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2190, function(sym, e) {
         // introducir código aquí
         sym.stop();
         
         // Reproducir desde el principio, independientemente del estado de reproducción actual 
         if (!sym.isPlaying() ) {
         	sym.play(0);
         }

      });
      //Edge binding end

   })("plus_btn_2");
   //Edge symbol end:'plus_btn_2'

   //=========================================================
   
   //Edge symbol: 'plus_btn_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2190, function(sym, e) {
         // introducir código aquí
         sym.stop();
         
         // Reproducir desde el principio, independientemente del estado de reproducción actual 
         if (!sym.isPlaying() ) {
         	sym.play(0);
         }

      });
      //Edge binding end

   })("plus_btn_3");
   //Edge symbol end:'plus_btn_3'

   //=========================================================
   
   //Edge symbol: 'plus_btn_4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2190, function(sym, e) {
         // introducir código aquí
         sym.stop();
         
         // Reproducir desde el principio, independientemente del estado de reproducción actual 
         if (!sym.isPlaying() ) {
         	sym.play(0);
         }

      });
      //Edge binding end

   })("plus_btn_4");
   //Edge symbol end:'plus_btn_4'

   //=========================================================
   
   //Edge symbol: 'plus_btn_5'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2190, function(sym, e) {
         // introducir código aquí
         sym.stop();
         
         // Reproducir desde el principio, independientemente del estado de reproducción actual 
         if (!sym.isPlaying() ) {
         	sym.play(0);
         }

      });
      //Edge binding end

   })("plus_btn_5");
   //Edge symbol end:'plus_btn_5'

   //=========================================================
   
   //Edge symbol: 'plus_btn_6'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2190, function(sym, e) {
         // introducir código aquí
         sym.stop();
         
         // Reproducir desde el principio, independientemente del estado de reproducción actual 
         if (!sym.isPlaying() ) {
         	sym.play(0);
         }

      });
      //Edge binding end

   })("plus_btn_6");
   //Edge symbol end:'plus_btn_6'

   //=========================================================
   
   //Edge symbol: 'plus_btn_7'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2190, function(sym, e) {
         // introducir código aquí
         sym.stop();
         
         // Reproducir desde el principio, independientemente del estado de reproducción actual 
         if (!sym.isPlaying() ) {
         	sym.play(0);
         }

      });
      //Edge binding end

   })("plus_btn_7");
   //Edge symbol end:'plus_btn_7'

   //=========================================================
   
   //Edge symbol: 'plus_btn_8'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2190, function(sym, e) {
         // introducir código aquí
         sym.stop();
         
         // Reproducir desde el principio, independientemente del estado de reproducción actual 
         if (!sym.isPlaying() ) {
         	sym.play(0);
         }

      });
      //Edge binding end

   })("plus_btn_8");
   //Edge symbol end:'plus_btn_8'

   //=========================================================
   
   //Edge symbol: 'plus_btn_9'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2190, function(sym, e) {
         // introducir código aquí
         sym.stop();
         
         // Reproducir desde el principio, independientemente del estado de reproducción actual 
         if (!sym.isPlaying() ) {
         	sym.play(0);
         }

      });
      //Edge binding end

   })("plus_btn_9");
   //Edge symbol end:'plus_btn_9'

   //=========================================================
   
   //Edge symbol: 'plus_btn_10'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2190, function(sym, e) {
         // introducir código aquí
         sym.stop();
         
         // Reproducir desde el principio, independientemente del estado de reproducción actual 
         if (!sym.isPlaying() ) {
         	sym.play(0);
         }

      });
      //Edge binding end

   })("plus_btn_10");
   //Edge symbol end:'plus_btn_10'

   //=========================================================
   
   //Edge symbol: 'plus_btn_11'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2190, function(sym, e) {
         // introducir código aquí
         sym.stop();
         
         // Reproducir desde el principio, independientemente del estado de reproducción actual 
         if (!sym.isPlaying() ) {
         	sym.play(0);
         }

      });
      //Edge binding end

   })("plus_btn_11");
   //Edge symbol end:'plus_btn_11'

   //=========================================================
   
   //Edge symbol: 'plus_btn_12'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2190, function(sym, e) {
         // introducir código aquí
         sym.stop();
         
         // Reproducir desde el principio, independientemente del estado de reproducción actual 
         if (!sym.isPlaying() ) {
         	sym.play(0);
         }

      });
      //Edge binding end

   })("plus_btn_12");
   //Edge symbol end:'plus_btn_12'

   //=========================================================
   
   //Edge symbol: 'plus_btn_13'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2190, function(sym, e) {
         // introducir código aquí
         sym.stop();
         
         // Reproducir desde el principio, independientemente del estado de reproducción actual 
         if (!sym.isPlaying() ) {
         	sym.play(0);
         }

      });
         //Edge binding end

      })("plus_btn_13");
   //Edge symbol end:'plus_btn_13'

   //=========================================================
   
   //Edge symbol: 'plus_btn_14'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2190, function(sym, e) {
         // introducir código aquí
         sym.stop();
         
         // Reproducir desde el principio, independientemente del estado de reproducción actual 
         if (!sym.isPlaying() ) {
         	sym.play(0);
         }

      });
         //Edge binding end

      })("plus_btn_14");
   //Edge symbol end:'plus_btn_14'

   //=========================================================
   
   //Edge symbol: 'plus_btn_15'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2190, function(sym, e) {
         // introducir código aquí
         sym.stop();
         
         // Reproducir desde el principio, independientemente del estado de reproducción actual 
         if (!sym.isPlaying() ) {
         	sym.play(0);
         }

      });
         //Edge binding end

      })("plus_btn_15");
   //Edge symbol end:'plus_btn_15'

   //=========================================================
   
   //Edge symbol: 'plus_btn_16'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2190, function(sym, e) {
         // introducir código aquí
         sym.stop();
         
         // Reproducir desde el principio, independientemente del estado de reproducción actual 
         if (!sym.isPlaying() ) {
         	sym.play(0);
         }

      });
         //Edge binding end

      })("plus_btn_16");
   //Edge symbol end:'plus_btn_16'

   //=========================================================
   
   //Edge symbol: 'plus_btn_17'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2190, function(sym, e) {
         // introducir código aquí
         sym.stop();
         
         // Reproducir desde el principio, independientemente del estado de reproducción actual 
         if (!sym.isPlaying() ) {
         	sym.play(0);
         }

      });
         //Edge binding end

      })("plus_btn_17");
   //Edge symbol end:'plus_btn_17'

   //=========================================================
   
   //Edge symbol: 'plus_btn_18'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2190, function(sym, e) {
         // introducir código aquí
         sym.stop();
         
         // Reproducir desde el principio, independientemente del estado de reproducción actual 
         if (!sym.isPlaying() ) {
         	sym.play(0);
         }

      });
            //Edge binding end

         })("plus_btn_18");
   //Edge symbol end:'plus_btn_18'

   //=========================================================
   
   //Edge symbol: 'plus_btn_19'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2190, function(sym, e) {
         // introducir código aquí
         sym.stop();
         
         // Reproducir desde el principio, independientemente del estado de reproducción actual 
         if (!sym.isPlaying() ) {
         	sym.play(0);
         }

      });
            //Edge binding end

         })("plus_btn_19");
   //Edge symbol end:'plus_btn_19'

   //=========================================================
   
   //Edge symbol: 'plus_btn_20'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2190, function(sym, e) {
         // introducir código aquí
         sym.stop();
         
         // Reproducir desde el principio, independientemente del estado de reproducción actual 
         if (!sym.isPlaying() ) {
         	sym.play(0);
         }

      });
            //Edge binding end

         })("plus_btn_20");
   //Edge symbol end:'plus_btn_20'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-147110726");