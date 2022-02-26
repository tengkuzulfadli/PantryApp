import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { fileTrayStackedOutline, fastFoodOutline, timerOutline } from 'ionicons/icons';
import Pantry from './pages/Pantry';
import Recipe from './pages/Recipe';
import RecipeInput from './components/Recipe/RecipeInput';
import History from './pages/History';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/pantry">
            <Pantry />
          </Route>
          <Route exact path="/recipe">
            <Recipe />
          </Route>
          <Route exact path="/recipe/recipeinput">
            <RecipeInput />
          </Route>          
          <Route path="/history">
            <History />
          </Route>
          <Route exact path="/">
            <Redirect to="/pantry" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="pantry" href="/pantry">
            <IonIcon icon={fileTrayStackedOutline} />
            <IonLabel>Pantry</IonLabel>
          </IonTabButton>
          <IonTabButton tab="recipe" href="/recipe">
            <IonIcon icon={fastFoodOutline} />
            <IonLabel>Recipe</IonLabel>
          </IonTabButton>
          <IonTabButton tab="history" href="/history">
            <IonIcon icon={timerOutline} />
            <IonLabel>History</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
