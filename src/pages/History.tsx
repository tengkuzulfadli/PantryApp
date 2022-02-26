import { IonContent, IonPage } from '@ionic/react';
import CookingHistory from '../components/Cooking/CookingHistory';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <CookingHistory />
      </IonContent>      
    </IonPage>
  );
};

export default Tab3;
