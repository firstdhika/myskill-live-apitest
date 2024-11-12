#import module
from getpass import getpass

username = input('Masukan Username: ')
password = getpass('Enter Password: ')
valid_password = 'password'

#Logic
if password == valid_password:
    print("Selamat Datang Bos")
else:
    print("Password salah, coba lagi")

print("Terimakasih sudah menggunakan aplikasi kami")