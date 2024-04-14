import { usePatientStore } from "../store";

const PatientList = () => {
  const patients = usePatientStore((state) => state.patients);
  return <div>PatientLists</div>;
};

export default PatientList;
