import { IonContent, IonPage } from '@ionic/react';
import RecipeList from '../components/Recipe/RecipeList';
import './Recipe.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>        
        <RecipeList />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
