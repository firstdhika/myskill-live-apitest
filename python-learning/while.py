ulangi =  input("Are you ready? ")
print("Start")
counter = 0

while ulangi:
    jawab = input("Apakah anda mau mengulangi? (yes/no) : ")  #input yes/no
    counter += 1
    if jawab =="no":
        ulangi = False
    print("Pengulangan ke-" + str(counter))