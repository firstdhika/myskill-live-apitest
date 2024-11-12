class Car:

    type = "Fiat"
    model = "500"
    color = "white"

#method
    def start(self):
        print("Ini method start")

    def drive(self):
        print("ini method drive")

    def brake(self):
        print("Ini method brake")

    def stop(self):
        print("Ini method stop")

# Membuat objek mobil
car = Car()
print(car.type)
print(car.color)

# Memanggil method 
car.start()
car.drive()
car.brake()
car.stop()