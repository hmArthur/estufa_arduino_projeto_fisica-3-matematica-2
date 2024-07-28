import serial
import time
from flask import Flask

ser = serial.Serial(port="/dev/ttyACM0", baudrate=9600)

app = Flask(__name__)

# while True:
#     value=ser.readline().decode('utf')
#     valueinString=str(value)
#     print(value)



@app.route('/dados')
def retornaDados():
    ser.write(b'G')
    value1=ser.readline().decode('utf')
    value2=ser.readline().decode('utf')
    value3=ser.readline().decode('utf')

    return {
        "gas":value1,
        "umidade":value2,
        "temperatura":value3
    }


@app.route('/A')
def desligaVentoinha():
    ser.write(b'A')

    return ""

@app.route('/D')
def ligaVentoinha():
    ser.write(b'D')

    return ""

@app.route('/B')
def desligaLampada():
    ser.write(b'B')

    return ""

@app.route('/E')
def ligaLampada():
    ser.write(b'E')

    return ""

@app.route('/C')
def desligabomba():
    ser.write(b'C')

    return ""

@app.route('/F')
def ligaBomba():
    ser.write(b'F')

    return ""


app.run(debug=True)