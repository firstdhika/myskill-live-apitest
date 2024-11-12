nilai = int (input('Masukakan nilai: '))
grade = ""

if nilai > 90:
    grade = "A"
elif nilai > 80:
    grade = "B+"
elif nilai > 70:
    grade = "B"
else:
    grade = "F"

#Menampilkan grade
print("Grade adalah =", grade)