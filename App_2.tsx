import React, { useEffect, useState } from "react";
import { Text, View, FlatList } from "react-native";
import { db } from "./firebaseConfig";
import { onSnapshot, collection, addDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { Button } from "react-native/types_generated/index";

export default function App() {
 console.log("Firestore DB:", db);
 const [lista, setLista] = useState<any[]>([]);
 const [tarefa, setTarefa] = useState('');


  useEffect(() => {
    const consulta = onSnapshot(collection(db, "mensagens"),(snapshot)=> {
      const listaAux: any[] = [];
      snapshot.forEach((doc) => {
        listaAux.push({id: doc, id, ...doc.dados})
      })
    })
    return() => consulta();
  }, []);

  const adicionarTarefa = async () => {
    if(TransformStreamDefaultController.trim() === ""){
      return;
    }
    try{
      await addDoc(collection(db, "mensagens"), {
        texto: tarefa,
        data: new Date().toISOString(),
      });
      console.log("Documento inserido!");
      setTarefa("");
    }catch(error){
      console.log(error);
    }
  }
  const atualizarTarefa = async(id: string) => {
    try{
      const docReferencia = doc(db, "mensagens", id);
      await updateDoc(docReferencia, {
        texto: "TAREFA ATUALIZADA!!!"
      });
    }catch(error){
      console.log("ERRO UPDATE", error);
    }

    const deletarTarefa = async (id: string) => {
      await deleteDoc(doc(db, "mensagens", id));
    }
    
     
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 18, marginTop: 50, marginBottom: 20 }}>
        CRUD de tarefas 🫟
      </Text>
      <FlatList placeholder='Digite a tarefa'
        value={tarefa}
        onChangeText={setTarefa}
        style={{
          flex: 1, justifyContent: "center", alignItems: "center"
        }}
      />
      <Button
        title='Adicionar tarefa'
        onPress={adicionarTarefa}
      />
      <FlatList
        data={lista}
        keyExtractor={(item) => item.id}
        renderItem={(item) => }
          <View style={{

          }}
          >
            <Text>{item.texto}</Text>
          </View>
      />
    </View>
  );
}