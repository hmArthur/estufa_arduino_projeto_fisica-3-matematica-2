#include "DHT.h"

const int gasA = A2;
char gasB[] = ""; 
char umidadeB[] = "";
char tempB[]= "";
const int gasD = 8;

const int pinoSensorUmidadeTerra = A1;

/* Cria o objeto dht para o sensor DHT11 no pino A0 do Arduino
*/
DHT dht(A0, DHT11);

const int ventoinha = 7; 
const int lampada = 4;
const int bombaAgua = 2;
int incomingByte; 

byte byteRead;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(pinoSensorUmidadeTerra, INPUT);
  pinMode(gasD, INPUT);
  dht.begin();

  pinMode(ventoinha, OUTPUT); // seta o pino como saída
  digitalWrite(ventoinha, LOW); // seta o pino com nivel logico baixo

  pinMode(lampada, OUTPUT); // seta o pino como saída
  digitalWrite(lampada, LOW); // seta o pin

  pinMode(bombaAgua, OUTPUT); // seta o pino como saída
  digitalWrite(bombaAgua, LOW); // seta o pin
  
}

void loop() {
  float t = dht.readTemperature();

  if (Serial.available()) {
     switch(Serial.read())      //verifica qual caracter recebido
    {
      case 'A':                  //caso 'A'
          digitalWrite(ventoinha, HIGH);
      break;
       case 'B':                  //caso 'A'
          digitalWrite(lampada, HIGH);
      break;
       case 'C':                  //caso 'A'
          digitalWrite(bombaAgua, HIGH);
      break;
      case 'D':                  //caso 'A'
          digitalWrite(ventoinha, LOW);
      break;
       case 'E':                  //caso 'A'
          digitalWrite(lampada, LOW);
      break;
       case 'F':                  //caso 'A'
          digitalWrite(bombaAgua, LOW);
      break;
        case 'G':
            
        int gsValueD = digitalRead(gasD);
        int gsValueA = analogRead(gasA);

        Serial.print("g:");
        Serial.println(gsValueA);

        Serial.print("u:");
        Serial.println(String(analogRead(pinoSensorUmidadeTerra)));

    
        Serial.print("t:");

        Serial.print(String(t,1));
        Serial.println();
      break;
    }
   //reenvia para o computador o dado recebido
  }
}

