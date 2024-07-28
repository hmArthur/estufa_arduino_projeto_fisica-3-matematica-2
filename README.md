# ESTUFA AUTOMATIZADA CONTROLADA PELA INTERNET COM ARDUINO

OBS: para testar devidamente o projeto é necessário o arduino com a montagem especifica* 
Caso não tenha é possível "simular" utilizando a página de simulação, a mesma roda por si só.

``TUTORIAL DE USO:``

1. PASSO:
   -montagem do arduino da seguinte forma:
   <img src="montagem1.jpeg" alt="montagem">
   <img src="montagem2.jpeg" alt="montagem">
   <img src="montagem3.jpeg" alt="montagem">
<br/>
levantamento de materiais: <br/>
   -arduino uno<br/>
   -relé de 4 interruptores<br/>
   -breadboard<br/>
   (ligada na bread board)<br/>
      -lampada (porta digital 4) <br/>
      -ventoinha (porta digital 2)<br/>
      -bomba d'água (porta digital 7)<br/>
   (+ 3 bateriais 9V para alimentar esses componentes)<br/>
   -sensor dht11 de temperatura (porta analogica A0)<br/>
   -sensor de gases (porta analogica A2)<br/>
   -sensor umidade (porta analogica A1)<br/>
   

3. PASSO:
   -Carregar o código da pasta arduino desse mesmo repositório através do USB na placa.
   (sendo antes necessário adicionar a biblioteca DHT11 adafruit a sua IDE, driver necessário para fazer uso do sensor de temperatura DHT11)
   <br/>
   <br/>
4.PASSO:
  Pela falta de um ESP-01 como servidor wifi, optamos por fazer a comunicacão serial da placa com um computador, fazendo o mesmo rodar uma API flask
  para permitir o acesso aos recursos da placa através de meios externos como websites e aplicativos.
   -Para isso:
     *Antes de tudo é necessário ter o python e pip instalados em sua máquina
   -Baixar a pasta python nesse mesmo repositório, abri-la em seu computador e baixar as seguintes dependências:<br/>
   `pip install pyserial`<br/>
   `pip install flask`<br/>
   com o código funcionando corretamente, basta ligar o arduino a seu computador e rodar o código python usando:<br/>
   `python index.py`<br/>
   
``a partir desse momento todo o back-end já está em funcionamento``<br/><br/>
5.PASSO: 
    -após baixar o front-end (com a placa) e abrir a pasta em sua IDE de escolha, basta rodar o HTML que ele automáticamente puxará os dados da API flask.
