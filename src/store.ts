import { create } from "zustand";
import { DraftPatient, patient } from "./types";


type PatientState = {
    patients:patient[]
    addPatient:(data:DraftPatient) => void
}
export const usePatientStore = create<PatientState>( ()=>({
patients:[],
addPatient: (data) => {}

}))