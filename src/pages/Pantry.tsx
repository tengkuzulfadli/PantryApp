import { IonContent, IonPage } from '@ionic/react';
import PantryInput from '../components/Pantry/PantryInput';
import PantryList from '../components/Pantry/PantryList';

const Pantry: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <PantryInput />
        <PantryList />
      </IonContent>
    </IonPage>
  );
};

export default Pantry;
