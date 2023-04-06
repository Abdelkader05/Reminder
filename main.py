import tkinter
import os
import  random
from PIL import ImageTk

window = tkinter.Tk()


liste_image = os.listdir("image")
for i in range(len(liste_image)):
    image = ImageTk.PhotoImage(file=f"image/{liste_image[i]}")
    couple = (liste_image[i], image )
    liste_image[i] = couple



def affiche(taille = 3):
    try:
        assert taille >= 3
        assert taille < 10
        cpt = 0
        copy = list.copy(liste_image)
        copy = copy + copy
        random.shuffle(copy)
        colonne = 0
        ligne = 0
        while copy != []:
            if cpt > taille - 2:
                cpt = 0
                label = tkinter.Button(window, image=copy[0][1], command=affiche)
                label.grid(column=colonne, row=ligne)
                copy.remove(copy[0])
                ligne += 1
                colonne = 0
            else:
                label = tkinter.Button(window, image=copy[0][1], command=affiche)
                label.grid(column=colonne, row=ligne)
                copy.remove(copy[0])
                cpt += 1
                colonne += 1
    except:
        erreur = tkinter.Label(window,text="choisir une taille plus grande", font=("broadway", 50), background="black", foreground="white" )
        erreur.pack()


affiche(5)

window.mainloop()


