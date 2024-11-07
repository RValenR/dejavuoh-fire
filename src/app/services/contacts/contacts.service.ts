import { Injectable } from '@angular/core';
import { addDoc, arrayUnion, collection, doc, Firestore, getDocs, query, updateDoc, where } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(
    private firestore: Firestore,
  ) { }

   
async agregarOModificarMensaje(dataform:any) {
  const contactosRef = collection(this.firestore, 'contacts');
  
  // Busca si existe un documento con el email especificado
  const q = query(contactosRef, where('email', '==', dataform.email));
  const querySnapshot = await getDocs(q);

  console.log('Contyrol 1',querySnapshot)
  console.log('Mensaje a guardar', dataform.mensaje[0])
  if (!querySnapshot.empty) {
    console.log('existe')
    // Si el email existe, actualizamos el array 'mensajes' en el documento
    querySnapshot.forEach(async (docSnap) => {
      const docRef = doc(this.firestore, 'contacts', docSnap.id);
      
      // Usamos arrayUnion para agregar el nuevo mensaje al array 'mensajes'
      await updateDoc(docRef, {
        mensajes: arrayUnion(dataform.mensaje[0])
      });
      console.log(`Mensaje agregado al documento con email ${dataform.email}`);
      // dataform.mensaje[0] = null;
    });
  } else {
    console.log('No existe')

    // Si no existe, creamos un nuevo documento con el email y el mensaje
    await addDoc(contactosRef, {
      email: dataform.email,
      nombre: dataform.nombre,
      mensajes: [dataform.mensaje[0]] // Se crea el array con el nuevo mensaje
    });
    console.log(`Documento creado para el email ${dataform.email} con el mensaje inicial`);
    // dataform.mensaje[0] = null;
  }
}
}
