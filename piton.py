from rembg import remove
from PIL import Image

# Buka gambar
input_path = "../DSC_5790.jpg"
output_path = "output1.png"

image = Image.open(input_path)
output = remove(image)  # Proses penghapusan background
output.save(output_path)  # Simpan hasilnya

print("Background berhasil dihapus!")
